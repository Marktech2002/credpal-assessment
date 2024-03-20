import { heroImage } from "../assets/img";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">

        <div className="navbar-left">
          {/* Logo */}
          <img src={heroImage}></img>
          {/* Navbar links */}
          <ul className="navbar-links">
            <li>
              <a href="#">Personal</a>
            </li>
            <li>
              <a href="#">Retail</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
          </ul>
        </div>

        {/* Right side of the Navbar */}
        <div className="navbar-right">
          {/* Navbar links */}
          <ul className="navbar-links">
            <li>
              <a href="#">Link 4</a>
            </li>
            <li>
              <a href="#">Link 5</a>
            </li>
          </ul>
          {/* Button */}
          <button className="navbar-button">Button</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
