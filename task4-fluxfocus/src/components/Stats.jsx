import { useEffect, useState } from "react";

export default function Stats() {
  const [total, setTotal] = useState(0);

  // 🔥 Format time properly (no more 0.1 min)
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  useEffect(() => {
    const updateTotal = () => {
      if (window.chrome && chrome.storage) {
        chrome.storage.local.get(["timeData"], (res) => {
          const data = res.timeData || {};

          // 🔥 sum all site times
          const sum = Object.values(data).reduce((a, b) => a + b, 0);

          setTotal(sum);
        });
      }
    };

    updateTotal(); // initial load

    // 🔥 live update every second
    const interval = setInterval(updateTotal, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.card}>
      <h4 style={styles.heading}>📈 Total Usage</h4>

      <h2 style={styles.time}>{formatTime(total)}</h2>

      {/* 🔥 Progress Bar */}
      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${Math.min(total / 60000, 100)}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    padding: "12px",
    borderRadius: "12px",
    color: "white",
  },
  heading: {
    fontSize: "16px",
    marginBottom: "6px",
  },
  time: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "10px",
  },
  progressContainer: {
    height: "8px",
    background: "#334155",
    borderRadius: "10px",
  },
  progressBar: {
    height: "8px",
    background: "#22c55e",
    borderRadius: "10px",
  },
};
