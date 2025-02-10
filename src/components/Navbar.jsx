import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <button className="login">Login</button>
    </nav>
  );
};

export default Navbar;
