import { z } from "zod";

export const kenoInputSchema = z.object({
  clientSeed: z.string().min(1, "Client seed is required"),
  serverSeed: z.string().min(1, "Server seed is required"),
  startNonce: z.number().int().min(0, "Nonce must be non-negative"),
  pickedNumbers: z.array(z.number().int().min(1).max(40)).min(1).max(10),
  minHits: z.number().int().min(1).max(10),
  nextRounds: z.number().int().min(1).max(100),
  maxSearch: z.number().int().min(1000).max(1000000).optional(),
}).refine(
  (data) => data.minHits <= data.pickedNumbers.length,
  {
    message: "Minimum hits cannot exceed the number of picked numbers",
    path: ["minHits"],
  }
).refine(
  (data) => new Set(data.pickedNumbers).size === data.pickedNumbers.length,
  {
    message: "Picked numbers must be unique",
    path: ["pickedNumbers"],
  }
);

export const limboInputSchema = z.object({
  clientSeed: z.string().min(1, "Client seed is required"),
  serverSeed: z.string().min(1, "Server seed is required"),
  startNonce: z.number().int().min(0, "Nonce must be non-negative"),
  minMultiplier: z.number().min(1.01, "Minimum multiplier must be at least 1.01"),
  nextHits: z.number().int().min(1).max(100),
  maxSearch: z.number().int().min(1000).max(1000000).optional(),
});

export type KenoInput = z.infer<typeof kenoInputSchema>;
export type LimboInput = z.infer<typeof limboInputSchema>;

export type KenoResult = {
  nonce: number;
  drawnNumbers: number[];
  hits: number;
  distance: number;
};

export type LimboResult = {
  nonce: number;
  multiplier: number;
  distance: number;
};

export type Casino = "stake" | "shuffle";
export type GameMode = "keno" | "limbo";
