export default function PlantForm() {
  return (
    <div className="card p-3">
      <h5 className="mb-3">Add New Plant</h5>

      <div className="row mb-2">
        <div className="col">
          <input className="form-control" placeholder="Plant name" disabled />
        </div>
        <div className="col">
          <input className="form-control" placeholder="Scientific name" disabled />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <select className="form-select" disabled>
            <option>Difficulty</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" disabled>
            <option>Light</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" disabled>
            <option>Water</option>
          </select>
        </div>
      </div>

      <textarea
        className="form-control mb-3"
        placeholder="Short description"
        disabled
      />

      <button className="btn btn-primary me-2" disabled>
        Add Plant
      </button>
      <button className="btn btn-secondary" disabled>
        Clear
      </button>
    </div>
  );
}

