const FILTERS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

export default function FilterBar({ current, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          className={current === f.value ? "chip active" : "chip"}
          aria-pressed={current === f.value}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
