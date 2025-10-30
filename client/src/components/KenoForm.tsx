import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, X, ChevronDown } from "lucide-react";
import type { KenoInput } from "@shared/schema";

interface KenoFormProps {
  onSearch: (input: KenoInput) => void;
  isSearching?: boolean;
}

export default function KenoForm({ onSearch, isSearching = false }: KenoFormProps) {
  const [clientSeed, setClientSeed] = useState("");
  const [serverSeed, setServerSeed] = useState("");
  const [startNonce, setStartNonce] = useState("0");
  const [pickedInput, setPickedInput] = useState("");
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);
  const [minHits, setMinHits] = useState("5");
  const [nextRounds, setNextRounds] = useState("10");
  const [maxSearch, setMaxSearch] = useState("100000");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handlePickedInputChange = (value: string) => {
    setPickedInput(value);
    const numbers = value
      .split(/[,\s]+/)
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n) && n >= 1 && n <= 40);
    const uniqueNumbers = Array.from(new Set(numbers));
    setPickedNumbers(uniqueNumbers.slice(0, 10));
  };

  const removeNumber = (num: number) => {
    setPickedNumbers(pickedNumbers.filter(n => n !== num));
    setPickedInput(pickedNumbers.filter(n => n !== num).join(", "));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      clientSeed,
      serverSeed,
      startNonce: parseInt(startNonce),
      pickedNumbers,
      minHits: parseInt(minHits),
      nextRounds: parseInt(nextRounds),
      maxSearch: parseInt(maxSearch),
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-accent text-2xl">Keno Hit Tracker</CardTitle>
        <CardDescription>
          Enter your seeds and game parameters to track and find upcoming winning hits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="client-seed" className="text-sm font-medium uppercase tracking-wide">
                Client Seed
              </Label>
              <Input
                id="client-seed"
                type="text"
                placeholder="e.g., my-client-seed-123"
                value={clientSeed}
                onChange={(e) => setClientSeed(e.target.value)}
                required
                data-testid="input-client-seed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="server-seed" className="text-sm font-medium uppercase tracking-wide">
                Server Seed
              </Label>
              <Input
                id="server-seed"
                type="text"
                placeholder="e.g., server-seed-xyz-789"
                value={serverSeed}
                onChange={(e) => setServerSeed(e.target.value)}
                required
                data-testid="input-server-seed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="start-nonce" className="text-sm font-medium uppercase tracking-wide">
                Starting Nonce
              </Label>
              <Input
                id="start-nonce"
                type="number"
                min="0"
                placeholder="0"
                value={startNonce}
                onChange={(e) => setStartNonce(e.target.value)}
                required
                data-testid="input-start-nonce"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <Label htmlFor="picked-numbers" className="text-sm font-medium uppercase tracking-wide">
                Your Picked Numbers (1-40)
              </Label>
              <Input
                id="picked-numbers"
                type="text"
                placeholder="e.g., 5, 12, 23, 34, 38"
                value={pickedInput}
                onChange={(e) => handlePickedInputChange(e.target.value)}
                data-testid="input-picked-numbers"
              />
              <p className="text-xs text-muted-foreground">
                Enter numbers separated by commas or spaces (max 10 numbers)
              </p>
              {pickedNumbers.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {pickedNumbers.map((num) => (
                    <Badge
                      key={num}
                      variant="secondary"
                      className="gap-1 pr-1"
                      data-testid={`badge-number-${num}`}
                    >
                      {num}
                      <button
                        type="button"
                        onClick={() => removeNumber(num)}
                        className="ml-1 hover-elevate rounded-full p-0.5"
                        data-testid={`button-remove-${num}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min-hits" className="text-sm font-medium uppercase tracking-wide">
                  Minimum Tiles To Hits
                </Label>
                <Input
                  id="min-hits"
                  type="number"
                  min="1"
                  max="10"
                  value={minHits}
                  onChange={(e) => setMinHits(e.target.value)}
                  required
                  data-testid="input-min-hits"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="next-rounds" className="text-sm font-medium uppercase tracking-wide">
                  Rounds to Find
                </Label>
                <Input
                  id="next-rounds"
                  type="number"
                  min="1"
                  max="100"
                  value={nextRounds}
                  onChange={(e) => setNextRounds(e.target.value)}
                  required
                  data-testid="input-next-rounds"
                />
              </div>
            </div>
          </div>

          <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
            <CollapsibleTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-between"
                data-testid="button-advanced-toggle"
              >
                Advanced Options
                <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="space-y-2">
                <Label htmlFor="max-search" className="text-sm font-medium uppercase tracking-wide">
                  Max Search Limit
                </Label>
                <Input
                  id="max-search"
                  type="number"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={maxSearch}
                  onChange={(e) => setMaxSearch(e.target.value)}
                  data-testid="input-max-search"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum number of rounds to scan (1,000 - 1,000,000). Higher values may find bigger hits but take longer.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Button
            type="submit"
            className="w-full"
            disabled={isSearching || pickedNumbers.length === 0}
            data-testid="button-search"
          >
            <Search className="w-4 h-4 mr-2" />
            {isSearching ? "Searching..." : "Find Next Hits"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
