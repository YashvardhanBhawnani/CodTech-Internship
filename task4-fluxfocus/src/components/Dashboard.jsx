import { useEffect, useState } from "react";

const formatTime = (ms) => {
  const seconds = Math.floor(ms / 1000);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hrs > 0) return `${hrs}h ${mins}m`;
  if (mins > 0) return `${mins}m ${secs}s`;
  return `${secs}s`;
};

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const updateData = () => {
      if (window.chrome && chrome.storage) {
        chrome.storage.local.get(["timeData"], (res) => {
          setData(res.timeData || {});
        });
      }
    };

    updateData(); // initial load

    const interval = setInterval(updateData, 5000); // 🔥 match background (5s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={card}>
      <h4>⏱ Time Spent</h4>
      {Object.keys(data).length === 0 && <p>No data yet</p>}

      {Object.keys(data).map((site) => (
        <div key={site} style={row}>
          <span>{site}</span>
          <span>{formatTime(data[site])}</span>
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "10px",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  marginTop: "5px",
};
