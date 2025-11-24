import { useEffect, useState } from "react";
import type { User } from "../types";
import { getUsers } from "../services/UserService";

type Props = {
  onSelect?: (u: User) => void;
};

export default function PeopleDropdown({ onSelect }: Props) {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load users.");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedId != null) {
      const u = users?.find((x) => x.id === selectedId) ?? null;
      if (u && onSelect) onSelect(u);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  if (loading) return <div className="d-flex align-items-center"><div className="spinner-border spinner-border-sm me-2" role="status" /> Loading users...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!users) return null;

  return (
    <div>
      <select className="form-select" onChange={(e) => setSelectedId(Number(e.target.value))} value={selectedId ?? ""}>
        <option value="">Select user...</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>
    </div>
  );
}
