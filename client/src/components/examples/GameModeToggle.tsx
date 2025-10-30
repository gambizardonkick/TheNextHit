import { useState } from "react";
import GameModeToggle from "../GameModeToggle";
import type { GameMode } from "@shared/schema";

export default function GameModeToggleExample() {
  const [mode, setMode] = useState<GameMode>("keno");

  return (
    <div className="min-h-screen bg-background p-8">
      <GameModeToggle selectedMode={mode} onSelectMode={setMode} />
    </div>
  );
}
