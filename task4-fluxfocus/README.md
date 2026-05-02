# ⚡ FluxFocus - A Productivity Tracking Chrome Extension
---
*Company* : CODTECH IT SOLUTIONS  

*Name* : Yashvardhan Bhawnani  

*Intern ID* : CTIS7454  

*Domain* : REACT.JS WEB DEVELOPMENT  

*Duration* : 6 WEEKS  

*Mentor* : NEELA SANTOSH KUMAR  

---

## FluxFocus: Technical Project Documentation

**FluxFocus** is a modern productivity-focused Chrome extension designed to help users understand and improve their browsing habits. By tracking real-time website usage and combining it with goal-setting features, the application empowers users to take control of their digital time.

In an increasingly distraction-heavy digital environment, FluxFocus provides actionable insights into how time is spent online, enabling users to make smarter decisions and build better focus habits.

---

### Core Objectives & User Experience

The primary goal of FluxFocus is to provide **real-time visibility into user activity** while maintaining a clean and intuitive interface.

*   **Real-Time Tracking:** FluxFocus continuously monitors the active browser tab and records time spent on each website without requiring manual input.
*   **Productivity Awareness:** Users can instantly view total usage time and identify where most of their time is being consumed.
*   **Goal Management:** The extension allows users to set, edit, and delete daily goals, reinforcing intentional usage patterns.
*   **Seamless Experience:** Designed as a lightweight popup interface, FluxFocus integrates directly into the browser without disrupting workflow.

---

### The Technical Foundation

FluxFocus is built using a combination of modern frontend technologies and Chrome Extension APIs.

#### 1. The Tracking Engine (Background Script)
The core tracking logic resides in the **background script**, which runs independently of the UI. It uses the Chrome Tabs API to monitor the currently active tab at fixed intervals.

Every interval cycle:
- The active tab is identified
- Time spent is calculated
- Data is stored using `chrome.storage.local`

This ensures persistent and efficient tracking without affecting browser performance.

---

#### 2. The Interactive Interface (Frontend)
The frontend is built using **React (with Vite)**, providing a fast and responsive user interface.

Key UI components include:
- **Dashboard:** Displays time spent on different websites
- **Stats Panel:** Shows total usage time with live updates
- **Goals Section:** Allows users to manage daily productivity goals

React state and lifecycle methods are used to fetch and display data dynamically from Chrome storage.

---

### System Workflow and Data Lifecycle

FluxFocus operates on a continuous tracking and display cycle:

1.  **Initialization:** Background script starts tracking active tabs.
2.  **Data Collection:** Every fixed interval (e.g., 15 seconds), usage time is recorded.
3.  **Storage:** Data is stored in `chrome.storage.local` in key-value format.
4.  **UI Sync:** React components fetch updated data at intervals.
5.  **User Interaction:** Users can set and manage goals directly from the popup.

---

### Data Handling & Storage

- Uses **Chrome Storage API** (`chrome.storage.local`)
- Stores:
  - Website usage time
  - Total browsing duration
  - User-defined goals
- Data persists across sessions

---

### Performance & Optimization

- Uses interval-based tracking to reduce overhead
- Avoids unnecessary re-renders in React
- Efficient data aggregation using JavaScript methods
- Lightweight UI ensures fast popup loading

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)

### Extension APIs
- Chrome Tabs API
- Chrome Storage API

### Backend
- No traditional backend (fully client-side extension)

---

## Project Structure

```text
FluxFocus/
├── dist/                 # Production build (Vite)
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Stats.jsx
│   │   └── Goals.jsx
│   ├── App.jsx
│   ├── main.jsx
│
├── manifest.json         # Extension configuration
├── background.js         # Time tracking logic