import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
