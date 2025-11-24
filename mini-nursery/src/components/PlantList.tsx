import type { Plant } from "../types";

type Props = {
  plants: Plant[];
  selected: Plant | null;
  onSelect: (p: Plant) => void;
};

export default function PlantList({ plants, selected, onSelect }: Props) {
  return (
    <div>
      <ul className="list-group">
        {plants.map((p) => (
          <li
            key={p.id}
            onClick={() => onSelect(p)}
            className={`list-group-item d-flex justify-content-between align-items-start ${selected?.id === p.id ? "active" : ""}`}
            style={{ cursor: "pointer" }}
          >
            <div>
              <div className="fw-bold">{p.name}</div>
              <small className="text-muted">{p.scientific}</small>
            </div>

            <div className="text-end">
              <span className="badge bg-primary me-1">{p.difficulty}</span>
              <span className="badge bg-info text-dark me-1">{p.rarity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

