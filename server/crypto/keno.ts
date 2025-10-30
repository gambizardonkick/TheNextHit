import crypto from "crypto";

export function kenoResult(
  clientSeed: string,
  serverSeed: string,
  nonce: number,
  balls: number = 40,
  picks: number = 10
): number[] {
  const hmacStream: number[] = [];
  let i = 0;

  // Generate enough bytes for all picks
  while (hmacStream.length < picks * 4) {
    const msg = `${clientSeed}:${nonce}:${i}`;
    const hmac = crypto.createHmac("sha256", serverSeed);
    hmac.update(msg);
    const hash = hmac.digest();
    
    for (let j = 0; j < hash.length; j++) {
      hmacStream.push(hash[j]);
    }
    i++;
  }

  // Create pool of available numbers
  const pool = Array.from({ length: balls }, (_, i) => i);
  const result: number[] = [];

  // Select numbers from pool
  for (let pick = 0; pick < picks; pick++) {
    const offset = pick * 4;
    const a = hmacStream[offset];
    const b = hmacStream[offset + 1];
    const c = hmacStream[offset + 2];
    const d = hmacStream[offset + 3];

    // Convert to fraction
    const frac = a / 256 + b / 256 ** 2 + c / 256 ** 3 + d / 256 ** 4;
    
    // Select index from pool
    let idx = Math.floor(frac * pool.length);
    if (idx >= pool.length) {
      idx = pool.length - 1;
    }

    result.push(pool[idx]);
    pool.splice(idx, 1);
  }

  // Return 1-based numbers (convert from 0-based)
  return result.map(n => n + 1);
}

export interface KenoSearchResult {
  nonce: number;
  drawnNumbers: number[];
  hits: number;
  distance: number;
}

export function findKenoHits(
  clientSeed: string,
  serverSeed: string,
  startNonce: number,
  pickedNumbers: number[],
  minHits: number,
  nextRounds: number,
  maxSearch?: number
): KenoSearchResult[] {
  const searchLimit = maxSearch || 100000;
  const foundResults: KenoSearchResult[] = [];
  let nonce = startNonce;
  const pickedSet = new Set(pickedNumbers);

  while (foundResults.length < nextRounds && nonce < startNonce + searchLimit) {
    const result = kenoResult(clientSeed, serverSeed, nonce);
    const hits = result.filter(n => pickedSet.has(n)).length;

    if (hits >= minHits) {
      foundResults.push({
        nonce,
        drawnNumbers: result,
        hits,
        distance: nonce - startNonce,
      });
    }

    nonce++;
  }

  return foundResults;
}
