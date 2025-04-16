import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../utils/db.js";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const ref = doc(db, "ContactBook", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setForm(snap.data());
      }
    };
    fetch();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const ref = doc(db, "ContactBook", id);
    await updateDoc(ref, form);
    navigate("/");
  };

  if (!form) return <p className="text-center">Loading...</p>;

  return (
    <form onSubmit={handleUpdate} className="container mt-5">
      <h2 className="text-center mb-4">Edit Contact</h2>
      <input name="name" value={form.name} onChange={handleChange} className="form-control mb-2" />
      <input name="lastName" value={form.lastName} onChange={handleChange} className="form-control mb-2" />
      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control mb-2" />
      <input name="phone" value={form.phone} onChange={handleChange} className="form-control mb-2" />
      <input name="address" value={form.address} onChange={handleChange} className="form-control mb-3" />
      <button className="btn btn-primary w-100">Save Changes</button>
    </form>
  );
}
