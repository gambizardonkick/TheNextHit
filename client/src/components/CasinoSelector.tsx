import { Card } from "@/components/ui/card";
import stakeLogo from "@assets/stake_logo.png";
import shuffleLogo from "@assets/shuffle_logo.png";
import type { Casino } from "@shared/schema";

interface CasinoSelectorProps {
  selectedCasino: Casino;
  onSelectCasino: (casino: Casino) => void;
}

export default function CasinoSelector({ selectedCasino, onSelectCasino }: CasinoSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-center text-xl font-accent font-semibold mb-4 text-muted-foreground">
        Select Your Casino
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className={`p-8 cursor-pointer transition-all hover-elevate active-elevate-2 ${
            selectedCasino === "stake"
              ? "ring-2 ring-primary border-primary"
              : "border-card-border"
          }`}
          onClick={() => onSelectCasino("stake")}
          data-testid="button-casino-stake"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src={stakeLogo} 
              alt="Stake Casino" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">stake.com</p>
          </div>
        </Card>

        <Card
          className={`p-8 cursor-pointer transition-all hover-elevate active-elevate-2 ${
            selectedCasino === "shuffle"
              ? "ring-2 ring-primary border-primary"
              : "border-card-border"
          }`}
          onClick={() => onSelectCasino("shuffle")}
          data-testid="button-casino-shuffle"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src={shuffleLogo} 
              alt="Shuffle Casino" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">shuffle.com</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
