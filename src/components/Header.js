import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="React logo" width="300px"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
