import LimboForm from "../LimboForm";

export default function LimboFormExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <LimboForm
        onSearch={(input) => console.log("Limbo search:", input)}
        isSearching={false}
      />
    </div>
  );
}
