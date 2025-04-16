import { useState } from "react";
import db from "../utils/db.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "ContactBook"), form);
      navigate("/");
    } catch (error) {
      console.log("Error adding contact", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2 className="text-center mb-4">Add New Contact</h2>
      <input name="name" placeholder="First Name" onChange={handleChange} className="form-control mb-2" />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} className="form-control mb-2" />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="form-control mb-2" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="form-control mb-2" />
      <input name="address" placeholder="Address" onChange={handleChange} className="form-control mb-3" />
      <button className="btn btn-success w-100">Add Contact</button>
    </form>
  );
}
