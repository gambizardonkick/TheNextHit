import crypto from "crypto";

const HOUSE_EDGE = 0.01; // 1% house edge

export function limboMultiplier(
  clientSeed: string,
  serverSeed: string,
  nonce: number
): number {
  const msg = `${clientSeed}:${nonce}:0`;
  const hmac = crypto.createHmac("sha256", serverSeed);
  hmac.update(msg);
  const hash = hmac.digest();

  // First 4 bytes -> convert to 24-bit integer
  const bytes = hash.readUInt32BE(0);
  const r = bytes >>> 8; // Shift right 8 bits (32->24 bits)

  if (r === 0) {
    return 1000000.0; // avoid divide-by-zero
  }

  // Raw multiplier calculation
  const result = (16777216 / (r + 1)) * (1 - HOUSE_EDGE);
  return Math.round(result * 100000000) / 100000000; // round to 8 decimals
}

export interface LimboSearchResult {
  nonce: number;
  multiplier: number;
  distance: number;
}

export function findLimboHits(
  clientSeed: string,
  serverSeed: string,
  startNonce: number,
  minMultiplier: number,
  nextHits: number,
  maxSearch?: number
): LimboSearchResult[] {
  const searchLimit = maxSearch || 200000;
  const found: LimboSearchResult[] = [];
  let nonce = startNonce;

  while (found.length < nextHits && nonce < startNonce + searchLimit) {
    const multiplier = limboMultiplier(clientSeed, serverSeed, nonce);

    if (multiplier >= minMultiplier) {
      found.push({
        nonce,
        multiplier,
        distance: nonce - startNonce,
      });
    }

    nonce++;
  }

  return found;
}
