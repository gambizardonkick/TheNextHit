import { useState } from "react";
import CasinoSelector from "@/components/CasinoSelector";
import GameModeToggle from "@/components/GameModeToggle";
import KenoForm from "@/components/KenoForm";
import LimboForm from "@/components/LimboForm";
import KenoResults from "@/components/KenoResults";
import LimboResults from "@/components/LimboResults";
import SearchProgress from "@/components/SearchProgress";
import type { Casino, GameMode, KenoInput, KenoResult, LimboInput, LimboResult } from "@shared/schema";

export default function Home() {
  const [casino, setCasino] = useState<Casino>("stake");
  const [gameMode, setGameMode] = useState<GameMode>("keno");
  const [isSearching, setIsSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  
  const [kenoResults, setKenoResults] = useState<KenoResult[]>([]);
  const [kenoPickedNumbers, setKenoPickedNumbers] = useState<number[]>([]);
  
  const [limboResults, setLimboResults] = useState<LimboResult[]>([]);

  const handleKenoSearch = async (input: KenoInput) => {
    console.log("Keno search started:", input);
    setIsSearching(true);
    setKenoResults([]);
    setKenoPickedNumbers(input.pickedNumbers);
    setSearchProgress(0);
    
    let progressInterval: NodeJS.Timeout | null = null;

    try {
      // Start a progress simulation
      progressInterval = setInterval(() => {
        setSearchProgress(prev => Math.min(prev + 2000, 95000));
      }, 100);

      const response = await fetch("/api/keno/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Search failed" }));
        throw new Error(errorData.error || "Search failed");
      }

      const data = await response.json();
      setKenoResults(data.results);
      setSearchProgress(100000);
    } catch (error) {
      console.error("Keno search error:", error);
      alert(error instanceof Error ? error.message : "Search failed. Please check your inputs and try again.");
    } finally {
      if (progressInterval) clearInterval(progressInterval);
      setIsSearching(false);
      setTimeout(() => setSearchProgress(0), 500);
    }
  };

  const handleLimboSearch = async (input: LimboInput) => {
    console.log("Limbo search started:", input);
    setIsSearching(true);
    setLimboResults([]);
    setSearchProgress(0);
    
    let progressInterval: NodeJS.Timeout | null = null;

    try {
      // Start a progress simulation
      progressInterval = setInterval(() => {
        setSearchProgress(prev => Math.min(prev + 5000, 190000));
      }, 100);

      const response = await fetch("/api/limbo/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Search failed" }));
        throw new Error(errorData.error || "Search failed");
      }

      const data = await response.json();
      setLimboResults(data.results);
      setSearchProgress(200000);
    } catch (error) {
      console.error("Limbo search error:", error);
      alert(error instanceof Error ? error.message : "Search failed. Please check your inputs and try again.");
    } finally {
      if (progressInterval) clearInterval(progressInterval);
      setIsSearching(false);
      setTimeout(() => setSearchProgress(0), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <header className="text-center space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-accent font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            TheNextHit
          </h1>
          <p className="text-muted-foreground text-lg">
            Provably Fair Predictions for Stake & Shuffle
          </p>
        </header>

        <CasinoSelector selectedCasino={casino} onSelectCasino={setCasino} />

        <GameModeToggle selectedMode={gameMode} onSelectMode={setGameMode} />

        <div className="pt-4">
          {gameMode === "keno" ? (
            <KenoForm onSearch={handleKenoSearch} isSearching={isSearching} />
          ) : (
            <LimboForm onSearch={handleLimboSearch} isSearching={isSearching} />
          )}
        </div>

        {isSearching && (
          <div className="pt-4">
            <SearchProgress 
              currentRound={searchProgress} 
              maxRounds={gameMode === "keno" ? 100000 : 200000} 
            />
          </div>
        )}

        {!isSearching && gameMode === "keno" && kenoResults.length > 0 && (
          <div className="pt-4">
            <KenoResults results={kenoResults} pickedNumbers={kenoPickedNumbers} />
          </div>
        )}

        {!isSearching && gameMode === "limbo" && limboResults.length > 0 && (
          <div className="pt-4">
            <LimboResults results={limboResults} />
          </div>
        )}

        <footer className="text-center pt-12 pb-4 text-sm text-muted-foreground">
          <p>
            This tool uses provably fair algorithms to analyze game outcomes.
            Always gamble responsibly.
          </p>
        </footer>
      </div>
    </div>
  );
}
