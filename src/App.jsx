import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import anchorLogo from "./assets/anchor.png";
import awardLogo from "./assets/award.png";
import gitlabLogo from "./assets/gitlab.png";
import "./App.css";

const items = [
  {
    color: "#E14B3A",
    logo: anchorLogo,
    title: "PIRATE PLAN",
    benefit: ["Lifetime Update", "Daily Rewards", "Annually Reports"],
    price: "IDR 950.000",
  },
  {
    color: "#4583A8",
    logo: gitlabLogo,
    title: "CATMAN PLAN",
    benefit: ["Lifetime Update", "Daily Rewards", "Annually Reports"],
    price: "IDR 1.590.000",
  },
  {
    color: "#FC991C",
    logo: awardLogo,
    title: "CHAMP PLAN",
    benefit: ["Lifetime Update", "Daily Rewards", "Annually Reports"],
    price: "IDR 4.590.000",
  },
];

function App() {
  return (
    <>
      <div className="container column" style={{ minHeight: "100vh" }}>
        {items.map((item, key) => (
          <>
            <input
              type="radio"
              name="choice"
              id={`choice${key}`}
              className="checkbox-input"
            />
            <label htmlFor={`choice${key}`} className="card" key={key}>
              <img src={item.logo} alt="" style={{ width: "100px" }} />
              <h2 className="fm-1 title">{item.title}</h2>
              <hr />
              {item.benefit.map((benefit) => (
                <p className="fm-2">{benefit}</p>
              ))}
              <hr />
              <h3 className="fm-1 price" style={{ color: item.color }}>
                {item.price}
              </h3>
              <p className="permonth fm-1">per month</p>
            </label>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
