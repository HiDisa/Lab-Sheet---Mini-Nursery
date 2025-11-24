//import React from "react";
import type { Plant } from "../types";

type Props = {
  plant: Plant;
  onDelete: (id:number) => void;
  onView: () => void;
};

export default function PlantCard({ plant, onDelete, onView }: Props) {
    const lightIcon = 
    plant.light === "Bright" ? "☀️ Bright":
    plant.light === "Medium" ? "🌤️ Medium" : "🌙 Low"
    
    const waterIcon =
        plant.water === "Low" ? "💧 Low ":
        plant.water === "Moderate" ? "💧💧 Moderate" : "💧💧💧 Frequent";
    return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4 className="card-title mb-1">
              {plant.name} <small className="text-muted">({plant.scientific})</small>
            </h4>
            <p className="text-muted">{plant.description}</p>
          </div>

          <div className="text-end">
            <button className="btn btn-outline-primary btn-sm mb-2" onClick={onView}>
              View Details
            </button>
            <br />
            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(plant.id)}>
              Remove
            </button>
          </div>
        </div>

        <div className="mt-3">
          <span className="badge bg-primary me-2">{plant.difficulty}</span>
          <span className="badge bg-warning text-dark">{plant.rarity}</span>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <small className="text-muted">Light</small>
            <div>{lightIcon} {plant.light}</div>
          </div>
          <div className="col-6">
            <small className="text-muted">Water</small>
            <div>{waterIcon} {plant.water}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
