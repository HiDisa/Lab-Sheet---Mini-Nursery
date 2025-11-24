import { useState } from "react";
import type { Plant } from "../types";

type NewPlant = Omit<Plant, "id">;

type Props = {
  onAdd: (p: NewPlant) => void;
};

export default function PlantForm({ onAdd }: Props) {
  const defaultPlant: NewPlant = {
    name: "",
    scientific: "",
    difficulty: "Easy",
    light: "Medium",
    water: "Moderate",
    rarity: "Common",
    description: ""
  };

  const [form, setForm] = useState<NewPlant>(defaultPlant);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Plant name is required.");
      return;
    }
    onAdd(form);
    setForm(defaultPlant);
    setError(null);
  }

  return (
    <form className="card p-3" onSubmit={handleSubmit}>
      <h5 className="mb-3">Add New Plant</h5>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-2 mb-2">
        <div className="col">
          <input className="form-control" placeholder="Plant name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Scientific name" value={form.scientific} onChange={(e) => setForm({...form, scientific: e.target.value})} />
        </div>
      </div>

      <div className="row g-2 mb-2">
        <div className="col">
          <select className="form-select" value={form.difficulty} onChange={(e) => setForm({...form, difficulty: e.target.value as any})}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={form.light} onChange={(e) => setForm({...form, light: e.target.value as any})}>
            <option>Low</option>
            <option>Medium</option>
            <option>Bright</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={form.water} onChange={(e) => setForm({...form, water: e.target.value as any})}>
            <option>Low</option>
            <option>Moderate</option>
            <option>Frequent</option>
          </select>
        </div>
      </div>

      <div className="mb-2">
        <select className="form-select" value={form.rarity} onChange={(e) => setForm({...form, rarity: e.target.value as any})}>
          <option>Common</option>
          <option>Uncommon</option>
          <option>Rare</option>
        </select>
      </div>

      <div className="mb-2">
        <textarea className="form-control" rows={3} placeholder="Short description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} />
      </div>

      <div className="d-flex">
        <button className="btn btn-primary me-2" type="submit">Add Plant</button>
        <button className="btn btn-secondary" type="button" onClick={() => { setForm(defaultPlant); setError(null); }}>Clear</button>
      </div>
    </form>
  );
}

