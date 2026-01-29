import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Bar from "./components/Bar";
import Route from "./components/Route";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Bar />
    <div className="min-h-screen">
      <Route />
    </div>
  </React.StrictMode>,
);
