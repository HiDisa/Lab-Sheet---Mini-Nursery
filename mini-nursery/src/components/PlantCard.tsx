import React from "react";
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
          <h4 className="card-title">
            {plant.name}{" "}
            <small className="text-muted">({plant.scientific})</small>
          </h4>

          <p>{plant.description}</p>

          <div className="mb-3">
            <span className="badge bg-primary me-2">{plant.difficulty}</span>
            <span className="badge bg-warning text-dark">{plant.rarity}</span>
          </div>

          <div className="row">
            <div className="col-6">
              <strong>Light</strong>
              <div>{lightIcon} {plant.light}</div>
            </div>

            <div className="col-6">
              <strong>Water</strong>
              <div>{waterIcon} {plant.water}</div>
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <button className="btn btn-outline-primary me-2" disabled>
              View
            </button>

            <button className="btn btn-outline-danger" disabled>
              Buy (UI-only)
            </button>
          </div>
        </div>
      </div>
    );
}
