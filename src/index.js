import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
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

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React:</h1>
      <ul>
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100K stars on GitHub.</li>
        <li>Is maintained by Facebook.</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Fede development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <section className="page">
      <Header />
      <MainContent />
      <Footer />
    </section>
  );
}

root.render(<Page />);
