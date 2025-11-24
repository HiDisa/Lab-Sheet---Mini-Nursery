import { useMemo, useState } from "react";
import type { Plant, User } from "./types";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from "./components/Banner.tsx";
import PlantList from "./components/PlantList";
import PlantCard from "./components/PlantCard";
import PlantForm from "./components/PlantForm";

type Props = { initialPlants: Plant[] };

export default function App({ initialPlants }: Props) {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [selectedId, setSelectedId] = useState<number | null>(initialPlants[0].id);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(initialPlants[0] ?? null);
  const [searchText, setSearchText] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<"All" | Plant["difficulty"]>("All");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function handleAdd(newPlant: Omit<Plant, "id">) {
    // create id (simple incremental)
    const nextId = plants.length ? Math.max(...plants.map((p) => p.id)) + 1 : 1;
    const plantWithId: Plant = { id: nextId, ...newPlant };
    setPlants((prev) => [plantWithId, ...prev]);
    setSuccessMessage("Plant added successfully.");
    // clear message after 3s
    setTimeout(() => setSuccessMessage(null), 3000);
  }

  function handleDelete(id: number) {
    setPlants((prev) => prev.filter((p) => p.id !== id));
    if (selectedPlant?.id === id) setSelectedPlant(null);
    setSuccessMessage("Plant removed.");
    setTimeout(() => setSuccessMessage(null), 3000);
  }

  const filteredPlants = useMemo(() => {
    const text = searchText.trim().toLowerCase();
    return plants.filter((p) => {
      if (difficultyFilter !== "All" && p.difficulty !== difficultyFilter) return false;
      if (text && !p.name.toLowerCase().includes(text)) return false;
      return true;
    });
  }, [plants, searchText, difficultyFilter]);

  return (
    <div>
      <Header title="Mini Nursery" />
      <div className="container py-4">
        <Banner>
          <h3 className="mb-0">Welcome to the Mini Nursery</h3>
        </Banner>

        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

        <div className="row mt-3">
          {/* LEFT COLUMN */}
          <div className="col-md-4">
            {/* Search */}
            <div className="mb-2">
              <input
                className="form-control"
                placeholder="Search plants (UI-only)"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* Difficulty filter */}
            <div className="mb-2 d-flex gap-2">
              <select
                className="form-select"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value as any)}
              >
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSearchText("");
                  setDifficultyFilter("All");
                }}
              >
                Reset
              </button>
            </div>

            {/* People dropdown (loads users) */}
            <div className="mb-3">
              <PeopleDropdown onSelect={(u) => setSelectedUser(u)} />
            </div>

            <PlantList
              plants={filteredPlants}
              selected={selectedPlant}
              onSelect={(p) => setSelectedPlant(p)}
            />

            <button
              className="btn btn-secondary w-100 mt-3"
              onClick={() => {
                setSelectedPlant(null);
              }}
            >
              Reset Selection (UI-only)
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-8">
            <PlantForm
              onAdd={(plant) => {
                handleAdd(plant);
              }}
            />

            <div className="mt-4">
              {selectedPlant ? (
                <PlantCard
                  plant={selectedPlant}
                  onDelete={(id) => handleDelete(id)}
                  onView={() => alert(selectedPlant.name)}
                />
              ) : (
                <div className="alert alert-secondary">Select a plant to see details</div>
              )}

              {/* Optional selected user display */}
              {selectedUser && (
                <div className="card mt-3">
                  <div className="card-body">
                    <h5>Selected User</h5>
                    <p className="mb-0"><strong>{selectedUser.name}</strong></p>
                    {selectedUser.email && <div>{selectedUser.email}</div>}
                    {selectedUser.phone && <div>{selectedUser.phone}</div>}
                    {selectedUser.company?.name && <div className="text-muted">{selectedUser.company.name}</div>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

