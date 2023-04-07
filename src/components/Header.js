import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <section className="logo-wrapper">
          <img src={logo} alt="React logo"></img>
          <h3>ReactFacts</h3>
        </section>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
