import type { Filter } from "../App";

interface FilterProps {
  filterOptions: Filter[];
  selected: Filter;
  onChange: (filter: Filter) => void;
}

export default function TodoFilter({
  filterOptions,
  selected,
  onChange,
}: FilterProps) {
  return (
    <div className="flex gap-2 justify-center mb-3">
      {filterOptions.map((f) => (
        <label key={f} className="join-item">
          <input
            type="radio"
            name="filter"
            value={f}
            checked={f === selected}
            onChange={() => onChange(f)}
            className="radio"
          />
          <span>{f}</span>
        </label>
      ))}
    </div>
  );
}
