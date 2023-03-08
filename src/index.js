import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const editToggle = () => {
  document.querySelector("button").addEventListener("click", function (e) {
    if (document.querySelector("button").textContent === "Edit") {
      //show left
      document.querySelector("#left").classList.remove("hidden");
      //center right
      document.querySelector("#right").classList.remove("focus");
      //change text
    } else {
      //hide left
      document.querySelector("#left").classList.add("hidden");
      //offset right
      document.querySelector("#right").classList.add("focus");
      //change text
    }
  });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

editToggle();
