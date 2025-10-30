import SearchProgress from "../SearchProgress";

export default function SearchProgressExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <SearchProgress currentRound={45678} maxRounds={100000} />
    </div>
  );
}
