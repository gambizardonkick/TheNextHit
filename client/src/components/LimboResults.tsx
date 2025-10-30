import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target } from "lucide-react";
import type { LimboResult } from "@shared/schema";

interface LimboResultsProps {
  results: LimboResult[];
}

export default function LimboResults({ results }: LimboResultsProps) {
  if (results.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Target className="w-12 h-12 text-muted-foreground" />
            <div>
              <p className="text-lg font-medium text-muted-foreground">No results found</p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your minimum multiplier or search range
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const firstHit = results[0];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-primary/50 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            <CardTitle className="font-accent text-xl" data-testid="text-first-hit">First Hit</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Nonce</p>
              <p className="text-2xl font-bold font-accent" data-testid="text-nonce">{firstHit.nonce}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Multiplier</p>
              <p className="text-3xl font-bold font-accent text-primary" data-testid="text-multiplier">
                {firstHit.multiplier.toFixed(2)}×
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Distance</p>
              <p className="text-2xl font-bold font-accent">
                {firstHit.distance.toLocaleString()} bets
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {results.length > 1 && (
        <>
          <h3 className="text-lg font-accent font-semibold">Additional Hits</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.slice(1).map((result, index) => (
              <Card key={result.nonce} data-testid={`card-result-${index + 1}`}>
                <CardContent className="py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Round {index + 2}</span>
                    <Badge variant="outline" className="rounded-full">
                      {result.distance.toLocaleString()} bets
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Nonce</p>
                      <p className="text-lg font-bold font-mono">{result.nonce}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Multiplier</p>
                      <p className="text-2xl font-bold text-primary">
                        {result.multiplier.toFixed(2)}×
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
