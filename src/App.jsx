import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>📇 Contact Book</h1>
        <nav>
          <Link className="btn btn-primary me-2" to="/">Home</Link>
          <Link className="btn btn-success" to="/new">Add Contact</Link>
        </nav>
      </header>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
