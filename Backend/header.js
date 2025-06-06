import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Food Ordering App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
