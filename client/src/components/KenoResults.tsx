import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target } from "lucide-react";
import type { KenoResult } from "@shared/schema";

interface KenoResultsProps {
  results: KenoResult[];
  pickedNumbers: number[];
}

export default function KenoResults({ results, pickedNumbers }: KenoResultsProps) {
  if (results.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Target className="w-12 h-12 text-muted-foreground" />
            <div>
              <p className="text-lg font-medium text-muted-foreground">No results found</p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search parameters or minimum hits requirement
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Nonce</p>
              <p className="text-2xl font-bold font-accent" data-testid="text-nonce">{firstHit.nonce}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Hits</p>
              <p className="text-2xl font-bold font-accent text-primary">
                {firstHit.hits}/{pickedNumbers.length}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Distance</p>
              <p className="text-2xl font-bold font-accent">
                {firstHit.distance.toLocaleString()} bets away
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Drawn Numbers</p>
            <div className="flex flex-wrap gap-2">
              {firstHit.drawnNumbers.map((num) => (
                <Badge
                  key={num}
                  variant={pickedNumbers.includes(num) ? "default" : "secondary"}
                  className="text-base px-3 py-1"
                  data-testid={`badge-drawn-${num}`}
                >
                  {num}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {results.length > 1 && (
        <>
          <h3 className="text-lg font-accent font-semibold">Additional Hits</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {results.slice(1).map((result, index) => (
              <Card key={result.nonce} data-testid={`card-result-${index + 1}`}>
                <CardContent className="py-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Round {index + 2}</span>
                    <Badge variant="outline" className="rounded-full">
                      {result.distance.toLocaleString()} bets away
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Nonce</p>
                      <p className="text-lg font-bold font-mono">{result.nonce}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hits</p>
                      <p className="text-lg font-bold text-primary">
                        {result.hits}/{pickedNumbers.length}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Drawn Numbers</p>
                    <div className="flex flex-wrap gap-1">
                      {result.drawnNumbers.map((num) => (
                        <Badge
                          key={num}
                          variant={pickedNumbers.includes(num) ? "default" : "secondary"}
                          className="text-xs px-2 py-0.5"
                        >
                          {num}
                        </Badge>
                      ))}
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
