// Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={{ margin: "10px" }}>Home</NavLink>
      <NavLink to="/login" style={{ margin: "10px" }}>Login</NavLink>
      <NavLink to="/dashboard" style={{ margin: "10px" }}>Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
