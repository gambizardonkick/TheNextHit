import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, ChevronDown } from "lucide-react";
import type { LimboInput } from "@shared/schema";

interface LimboFormProps {
  onSearch: (input: LimboInput) => void;
  isSearching?: boolean;
}

export default function LimboForm({ onSearch, isSearching = false }: LimboFormProps) {
  const [clientSeed, setClientSeed] = useState("");
  const [serverSeed, setServerSeed] = useState("");
  const [startNonce, setStartNonce] = useState("0");
  const [minMultiplier, setMinMultiplier] = useState("2.0");
  const [nextHits, setNextHits] = useState("10");
  const [maxSearch, setMaxSearch] = useState("200000");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      clientSeed,
      serverSeed,
      startNonce: parseInt(startNonce),
      minMultiplier: parseFloat(minMultiplier),
      nextHits: parseInt(nextHits),
      maxSearch: parseInt(maxSearch),
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-accent text-2xl">Limbo Hit Tracker</CardTitle>
        <CardDescription>
          Enter your seeds and target multiplier to track upcoming high multiplier hits
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
              <Label htmlFor="min-multiplier" className="text-sm font-medium uppercase tracking-wide">
                Minimum Multiplier
              </Label>
              <Input
                id="min-multiplier"
                type="number"
                min="1.01"
                step="0.01"
                placeholder="2.0"
                value={minMultiplier}
                onChange={(e) => setMinMultiplier(e.target.value)}
                required
                data-testid="input-min-multiplier"
              />
              <p className="text-xs text-muted-foreground">
                Find rounds with multipliers equal to or greater than this value
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="next-hits" className="text-sm font-medium uppercase tracking-wide">
                Number of Hits to Find
              </Label>
              <Input
                id="next-hits"
                type="number"
                min="1"
                max="100"
                value={nextHits}
                onChange={(e) => setNextHits(e.target.value)}
                required
                data-testid="input-next-hits"
              />
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
            disabled={isSearching}
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
