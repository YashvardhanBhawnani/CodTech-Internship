# FluxChat - A RealTime Group Chat Application
---
*Company* : CODTECH IT SOLUTIONS

*Name* : Yashvardhan Bhawnani

*Intern ID* : CTIS7454

*Domain* : REACT.JS WEB DEVLOPMENT

*Duration* : 6 WEEKS

*Mentor* : NEELA SANTOSH KUMAR

---

## FluxChat: Technical Project Documentation

**FluxChat** is a sophisticated real-time communication platform designed to facilitate instantaneous group interactions. Built using a modern full-stack approach, the application leverages the **MERN** ecosystem (specifically Node.js, Express, and React) to handle persistent, bi-directional data flow. In an era where digital collaboration is paramount, FluxChat serves as a robust example of how WebSocket technology can be harnessed to create a low-latency, responsive user environment.

---

### Core Objectives & User Experience

The primary mission of FluxChat is to eliminate the "refresh lag" inherent in traditional HTTP-based applications. By establishing a persistent handshake between the client and the server, the application ensures that information is pushed to the user the moment it is generated.

*   **Identity Management:** Upon launching the application, users are prompted to establish a unique username. This ensures accountability and personalizes the chat experience, allowing participants to distinguish between different contributors in a crowded room.
*   **Dynamic Group Interaction:** Unlike fragmented 1-to-1 chats, FluxChat focuses on a "Global Room" concept where all connected users participate in a unified stream of consciousness, ideal for team synchronization or community building.
*   **Contextual Awareness:** The inclusion of **typing indicators** mimics the psychological "presence" found in top-tier messaging apps, informing users when a response is being drafted and reducing the frequency of overlapping messages.

---

### The Technical Foundation

FluxChat’s architecture is split into two distinct yet highly synchronized environments:

#### 1. The Real-Time Engine (Backend)
The backend is powered by **Node.js** and **Express 5**. The choice of Node.js is strategic; its event-driven, non-blocking I/O model is perfectly suited for the "many-to-many" communication required by a group chat. The heavy lifting of real-time synchronization is handled by **Socket.IO**. 

Unlike standard WebSockets, Socket.IO provides an abstraction layer that handles automatic reconnection, packet buffering, and fallback to long-polling if the network environment is restrictive. The server acts as a central "Relay Station," receiving incoming events like `chatMessage` or `typing` and broadcasting them to all other connected sockets in the room.

#### 2. The Reactive Interface (Frontend)
The frontend is built with **React 19** and scaffolded using **Vite** for optimized build times and Hot Module Replacement (HMR). The UI is styled using **Tailwind CSS 4**, ensuring a modern, mobile-responsive aesthetic with minimal CSS overhead. 

React’s state management is utilized to handle the "Message Stack." As new messages arrive via the socket, they are appended to an immutable state array, triggering a surgical re-render of only the message list. This ensures that even in high-traffic scenarios, the UI remains fluid and responsive.

---

### System Workflow and Event Lifecycle

The application operates on an event-driven lifecycle that begins the moment a user connects:

1.  **Handshake:** The `socket.io-client` initiates a connection to the Node.js server (running on port `4600`).
2.  **Room Entry:** The client emits a `joinRoom` event. The server acknowledges this and may broadcast a `roomNotice` to existing members, announcing the new arrival.
3.  **The Message Loop:** When a user clicks "Send," the client emits a `chatMessage` payload containing the text, sender name, and a timestamp. The server receives this and immediately "emits" it back out to everyone else.
4.  **Presence Signaling:** While a user is actively interacting with the input field, `typing` events are throttled and sent to the server. Once the user stops or sends the message, a `stopTyping` event clears the indicator on peer screens.

### Security and Portability

During development, FluxChat utilizes a permissive **CORS** (Cross-Origin Resource Sharing) policy to allow the frontend (on port `5173`) to communicate freely with the backend. This architecture is designed for easy containerization; by decoupling the client and server, each can be scaled independently in a production cloud environment, such as AWS or Heroku. 

FluxChat represents a comprehensive integration of modern web technologies, providing a scalable blueprint for real-time collaborative tools.

## Tech Stack
### Frontend
- React 19
- Vite
- Tailwind CSS 4
- socket.io-client

### Backend
- Node.js (ES modules)
- Express 5
- Socket.IO

## Project Structure
```text
task3-FluxChat/
├── backend/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    └── src/
        ├── App.jsx
        ├── App.css
        ├── main.jsx
        └── ws.js
```

## Prerequisites
- Node.js 18+ (recommended latest LTS)
- npm

## Installation
Install dependencies for both apps:
```bash
cd backend
npm install
cd ../frontend
npm install
```

## Running the App
Start backend and frontend in separate terminals.

### 1) Start backend (port `4600`)
```bash
cd backend
node server.js
```
Backend URL: `http://localhost:4600`

### 2) Start frontend (Vite dev server)
```bash
cd frontend
npm run dev
```
Open the URL shown by Vite (usually `http://localhost:5173`).

## How It Works
1. User enters a name and joins the shared room.
2. Messages are emitted as `chatMessage` events.
3. Other clients receive and render messages instantly.
4. Typing status is shared using `typing` and `stopTyping` events.

## Socket Events
- `joinRoom` (client → server)
- `roomNotice` (server → clients in room)
- `chatMessage` (both directions via server relay)
- `typing` (client → server → other clients)
- `stopTyping` (client → server → other clients)

## Available Scripts
### Frontend (`frontend/package.json`)
- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run preview` – preview production build
- `npm run lint` – run ESLint

### Backend (`backend/package.json`)
No start script is currently defined. Run server with:
```bash
node server.js
```

## Notes
- The frontend socket connection URL is hardcoded to `http://localhost:4600` in `frontend/src/ws.js`.
- CORS is currently open (`origin: '*'`) for development convenience.

---
## Output

