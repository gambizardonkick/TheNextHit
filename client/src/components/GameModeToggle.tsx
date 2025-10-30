import { Dices, TrendingUp } from "lucide-react";
import type { GameMode } from "@shared/schema";

interface GameModeToggleProps {
  selectedMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
}

export default function GameModeToggle({ selectedMode, onSelectMode }: GameModeToggleProps) {
  return (
    <div className="flex items-center justify-center gap-2 p-1 bg-card rounded-lg border border-card-border max-w-md mx-auto">
      <button
        onClick={() => onSelectMode("keno")}
        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md font-accent font-semibold transition-all ${
          selectedMode === "keno"
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover-elevate active-elevate-2"
        }`}
        data-testid="button-mode-keno"
      >
        <Dices className="w-5 h-5" />
        Keno
      </button>
      <button
        onClick={() => onSelectMode("limbo")}
        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md font-accent font-semibold transition-all ${
          selectedMode === "limbo"
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover-elevate active-elevate-2"
        }`}
        data-testid="button-mode-limbo"
      >
        <TrendingUp className="w-5 h-5" />
        Limbo
      </button>
    </div>
  );
}
