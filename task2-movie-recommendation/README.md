# BINGEVAULT - MOVIE RECOMMENDATION APP

---

_Company_ : CODTECH IT SOLUTIONS

_Name_ : Yashvardhan Bhawnani

_Intern ID_ : CTIS7454

_Domain_ : REACT.JS WEB DEVLOPMENT

_Duration_ : 6 WEEKS

_Mentor_ : NEELA SANTOSH KUMAR

---

## ☁️ Project Overview: 🎬 BingeVault

📖 Project Description
BingeVault is a feature-rich, full-stack movie recommendation and discovery web application built with React and powered by the Open Movie Database (OMDB) API. It is designed to solve a universal problem faced by every movie enthusiast — the paradox of choice. With thousands of movies available across streaming platforms, deciding what to watch next can feel more exhausting than enjoyable. BingeVault eliminates that friction by giving users a clean, intuitive, and intelligent interface to search, explore, filter, and save movies they love.
At its core, BingeVault connects to the OMDB API to fetch rich, real-time movie data — including titles, genres, release years, IMDb ratings, directors, cast details, plot summaries, and poster artwork. Every search query returns live data pulled directly from one of the most comprehensive movie databases on the internet, ensuring accuracy and up-to-date information at all times.

🎯 Why BingeVault?
The idea for BingeVault was born from a simple frustration: spending more time scrolling Netflix than actually watching something. Most recommendation systems are black boxes — they push content based on opaque algorithms and platform interests, not genuine user preferences. BingeVault puts the control back in the user's hands. You search what you're curious about, explore what catches your eye, and build your own personalized watchlist — no algorithm deciding what you "should" watch next.
BingeVault is also built as a learning-oriented full-stack project, demonstrating real-world application of React concepts like component architecture, state management with hooks, API integration, conditional rendering, and responsive UI design. It is an ideal showcase project for developers entering the industry — particularly those preparing for roles at product-based companies and tech firms where practical project experience matters.

🌟 Core Features

🔍 Smart Movie Search
Users can search any movie by title using the OMDB API's search endpoint. The application handles debounced input to minimize unnecessary API calls, presenting clean and paginated results in real time. Each result card displays the movie poster, title, year, and type (movie/series/episode), giving users an instant visual preview before diving into details.

📋 Detailed Movie View
Clicking on any movie opens a detailed modal or dedicated page populated with rich metadata: full plot synopsis, director and writer credits, starring cast, IMDb rating, Rotten Tomatoes score, runtime, language, country of origin, box office earnings (where available), and awards history. This deep-dive view transforms BingeVault from a simple search tool into a genuine movie companion.

🎭 Genre & Year Filtering
Users can filter search results by genre or release year to narrow down recommendations based on mood or preference. Whether you're in the mood for a 90s action blockbuster or a recent indie drama, BingeVault's filtering system lets you slice through results efficiently.

💾 Personal Watchlist
BingeVault includes a persistent watchlist feature where users can save movies they want to watch later. The watchlist is stored in the browser's local storage, so it survives page refreshes and browser sessions without requiring a backend database or user authentication.

⭐ Ratings at a Glance
Every movie card prominently displays its IMDb rating, allowing users to make quick quality judgments at a glance. The detailed view aggregates multiple rating sources (IMDb, Rotten Tomatoes, Metacritic) when available, giving a well-rounded picture of critical reception.

📱 Fully Responsive Design
BingeVault is built mobile-first, ensuring an equally smooth experience on phones, tablets, and desktops. The layout adapts gracefully across screen sizes using CSS Flexbox and Grid, with touch-friendly UI components throughout.

🏗️ Technical Architecture
BingeVault is structured as a clean single-page application (SPA) built with React. The component tree is organized into reusable, self-contained units: a SearchBar component handles user input and debouncing, MovieCard renders individual movie thumbnails in the grid, MovieModal or MovieDetail renders the expanded view, Watchlist manages saved movies, and a central App component orchestrates global state via useState and useEffect hooks.
API communication is handled through a dedicated service module (api/omdb.js) that abstracts all OMDB API calls, manages the API key securely via environment variables, and handles error states and loading indicators gracefully. This separation of concerns keeps the codebase maintainable and easy to extend.

---

## Output

<img width="2138" height="1205" alt="Image" src="https://github.com/user-attachments/assets/c1553f72-bfbd-4099-9161-cb12d5161f78" />
