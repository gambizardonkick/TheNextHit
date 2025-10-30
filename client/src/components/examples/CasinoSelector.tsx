import { useState } from "react";
import CasinoSelector from "../CasinoSelector";
import type { Casino } from "@shared/schema";

export default function CasinoSelectorExample() {
  const [casino, setCasino] = useState<Casino>("stake");

  return (
    <div className="min-h-screen bg-background p-8">
      <CasinoSelector selectedCasino={casino} onSelectCasino={setCasino} />
    </div>
  );
}
