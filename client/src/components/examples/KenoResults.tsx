import KenoResults from "../KenoResults";
import type { KenoResult } from "@shared/schema";

const mockResults: KenoResult[] = [
  {
    nonce: 12450,
    drawnNumbers: [3, 7, 12, 18, 23, 29, 34, 38, 40, 15],
    hits: 6,
    distance: 12450,
  },
  {
    nonce: 15678,
    drawnNumbers: [5, 12, 19, 23, 28, 34, 38, 2, 11, 25],
    hits: 5,
    distance: 15678,
  },
  {
    nonce: 18920,
    drawnNumbers: [5, 9, 12, 23, 27, 34, 38, 40, 6, 14],
    hits: 5,
    distance: 18920,
  },
];

const pickedNumbers = [5, 12, 23, 34, 38, 40];

export default function KenoResultsExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <KenoResults results={mockResults} pickedNumbers={pickedNumbers} />
    </div>
  );
}
