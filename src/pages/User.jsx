import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import db from "../utils/db.js";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const ref = doc(db, "ContactBook", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setUser({ id: snap.id, ...snap.data() });
      }
    };
    fetch();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      await deleteDoc(doc(db, "ContactBook", id));
      navigate("/");
    }
  };

  if (!user) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center">{user.name} {user.lastName}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <div className="d-flex gap-3">
        <Link to={`/edit/${user.id}`} className="btn btn-warning">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
