import React from "react";
import Dashboard from "./components/Dashboard";
import Goals from "./components/Goals";
import Stats from "./components/Stats";

function App() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚀 FluxFocus - “Track smarter. Focus better.” ⭐</h2>
      <Goals />
      <Dashboard />
      <Stats />
    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    padding: "15px",
    fontFamily: "Arial",
    background: "#0f172a",
    color: "white",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
  },
};

export default App;
