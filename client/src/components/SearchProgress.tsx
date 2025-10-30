import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface SearchProgressProps {
  currentRound: number;
  maxRounds: number;
}

export default function SearchProgress({ currentRound, maxRounds }: SearchProgressProps) {
  const progress = (currentRound / maxRounds) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          <p className="text-lg font-medium font-accent">
            Scanning rounds...
          </p>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground" data-testid="text-progress">
            {currentRound.toLocaleString()} / {maxRounds.toLocaleString()} rounds searched
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
