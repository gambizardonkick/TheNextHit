import KenoForm from "../KenoForm";

export default function KenoFormExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <KenoForm
        onSearch={(input) => console.log("Keno search:", input)}
        isSearching={false}
      />
    </div>
  );
}
