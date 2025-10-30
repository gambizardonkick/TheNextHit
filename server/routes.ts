import type { Express } from "express";
import { createServer, type Server } from "http";
import { kenoInputSchema, limboInputSchema } from "@shared/schema";
import { findKenoHits } from "./crypto/keno";
import { findLimboHits } from "./crypto/limbo";

export async function registerRoutes(app: Express): Promise<Server> {
  // Keno search endpoint
  app.post("/api/keno/search", async (req, res) => {
    try {
      const input = kenoInputSchema.parse(req.body);

      const results = findKenoHits(
        input.clientSeed,
        input.serverSeed,
        input.startNonce,
        input.pickedNumbers,
        input.minHits,
        input.nextRounds,
        input.maxSearch
      );

      res.json({ results });
    } catch (error) {
      console.error("Keno search error:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid input parameters" });
      } else {
        res.status(500).json({ error: "Search failed" });
      }
    }
  });

  // Limbo search endpoint
  app.post("/api/limbo/search", async (req, res) => {
    try {
      const input = limboInputSchema.parse(req.body);

      const results = findLimboHits(
        input.clientSeed,
        input.serverSeed,
        input.startNonce,
        input.minMultiplier,
        input.nextHits,
        input.maxSearch
      );

      res.json({ results });
    } catch (error) {
      console.error("Limbo search error:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid input parameters" });
      } else {
        res.status(500).json({ error: "Search failed" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
