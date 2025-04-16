import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "./utils/db.js";



export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "ContactBook"));
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sorted = fetched.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      setUsers(sorted);
    };

    fetchUsers();
  }, []);

  const filtered = users.filter((user) =>
    `${user.name} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Book</h1>
      <input
        className="form-control my-3"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {filtered.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            <span>{user.lastName}, {user.name}</span>
            <Link to={`/user/${user.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
