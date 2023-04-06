import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  return (
    <section className="page">
      <header>
        <img src={logo} alt="React logo" width="300px"></img>
      </header>
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
    </section>
  );
}

root.render(<Page />);
