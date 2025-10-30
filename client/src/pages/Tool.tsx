import { useState } from "react";
import CasinoSelector from "@/components/CasinoSelector";
import GameModeToggle from "@/components/GameModeToggle";
import KenoForm from "@/components/KenoForm";
import LimboForm from "@/components/LimboForm";
import KenoResults from "@/components/KenoResults";
import LimboResults from "@/components/LimboResults";
import SearchProgress from "@/components/SearchProgress";
import type { Casino, GameMode, KenoInput, KenoResult, LimboInput, LimboResult } from "@shared/schema";

export default function Tool() {
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
      progressInterval = setInterval(() => {
        setSearchProgress(prev => Math.min(prev + 2000, 95000));
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
      setSearchProgress(100000);
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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="font-accent text-3xl md:text-4xl font-bold">
            Next Hit Tracker
          </h1>
          <p className="text-muted-foreground">
            Track and find your next winning hits with precision analysis
          </p>
        </div>

        <CasinoSelector selectedCasino={casino} onSelectCasino={setCasino} />

        <GameModeToggle selectedMode={gameMode} onSelectMode={setGameMode} />

        {gameMode === "keno" && (
          <KenoForm onSearch={handleKenoSearch} isSearching={isSearching} />
        )}

        {gameMode === "limbo" && (
          <LimboForm onSearch={handleLimboSearch} isSearching={isSearching} />
        )}

        {isSearching && <SearchProgress currentRound={searchProgress} maxRounds={100000} />}

        {!isSearching && gameMode === "keno" && kenoResults.length > 0 && (
          <KenoResults results={kenoResults} pickedNumbers={kenoPickedNumbers} />
        )}

        {!isSearching && gameMode === "limbo" && limboResults.length > 0 && (
          <LimboResults results={limboResults} />
        )}
      </div>
    </div>
  );
}
