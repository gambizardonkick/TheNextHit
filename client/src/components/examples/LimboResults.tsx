import LimboResults from "../LimboResults";
import type { LimboResult } from "@shared/schema";

const mockResults: LimboResult[] = [
  {
    nonce: 8543,
    multiplier: 5.67,
    distance: 8543,
  },
  {
    nonce: 12890,
    multiplier: 3.24,
    distance: 12890,
  },
  {
    nonce: 19453,
    multiplier: 2.98,
    distance: 19453,
  },
  {
    nonce: 24012,
    multiplier: 4.12,
    distance: 24012,
  },
];

export default function LimboResultsExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <LimboResults results={mockResults} />
    </div>
  );
}
