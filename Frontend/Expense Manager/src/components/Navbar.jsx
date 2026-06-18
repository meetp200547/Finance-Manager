import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <h1 className="text-2xl font-bold">
        Expense Manager
      </h1>

      <div className="flex gap-6">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/stats">Statistics</NavLink>
        <NavLink to="/scan-bill">Scan Bill</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;