import React, { useState, useEffect } from "react";

export default function Goals() {
  const [goal, setGoal] = useState("");
  const [savedGoal, setSavedGoal] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Load saved goal
  useEffect(() => {
    if (window.chrome && chrome.storage) {
      chrome.storage.local.get(["goal"], (res) => {
        if (res.goal) {
          setSavedGoal(res.goal);
        }
      });
    }
  }, []);

  // Save goal
  const saveGoal = () => {
    if (!goal.trim()) return;

    if (window.chrome && chrome.storage) {
      chrome.storage.local.set({ goal }, () => {
        setSavedGoal(goal);
        setGoal("");
        setIsEditing(false);
      });
    }
  };

  // Delete goal
  const deleteGoal = () => {
    if (window.chrome && chrome.storage) {
      chrome.storage.local.remove(["goal"], () => {
        setSavedGoal("");
        setGoal("");
        setIsEditing(false);
      });
    }
  };

  // Edit goal
  const editGoal = () => {
    setGoal(savedGoal);
    setIsEditing(true);
  };

  return (
    <div style={styles.card}>
      <h4 style={{fontSize : "20px"}}>🎯 Current Goal</h4>

      {/* SHOW SAVED GOAL */}
      {savedGoal && !isEditing && (
        <div style={styles.goalBox}>
          <p style={styles.goalText}>{savedGoal}</p>

          <div style={styles.buttonGroup}>
            <button style={styles.editBtn} onClick={editGoal}>
              Edit
            </button>
            <button style={styles.deleteBtn} onClick={deleteGoal}>
              Delete
            </button>
          </div>
        </div>
      )}

      {/* INPUT (only when no goal OR editing) */}
      {(isEditing || !savedGoal) && (
        <>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your current goal..."
            style={styles.input}
          />

          <button style={styles.saveBtn} onClick={saveGoal}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "12px",
    color: "white",
  },
  goalBox: {
    background: "#0f172a",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "8px",
  },
  goalText: {
    fontSize: "14px",
  },
  input: {
    width: "90%",
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    marginTop: "4px",
  },
  saveBtn: {
    width: "100%",
    padding: "8px",
    marginTop: "8px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  buttonGroup: {
    display: "flex",
    gap: "6px",
  },
  editBtn: {
    flex: 1,
    padding: "6px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop : "10px",
  },
  deleteBtn: {
    flex: 1,
    padding: "6px",
    background: "#ef4444",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop : "10px",
  },
};
