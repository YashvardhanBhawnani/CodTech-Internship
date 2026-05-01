import { AiOutlineSearch } from "react-icons/ai";
import "./MovieRecco.css";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieRecco = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const BASE_URL = "https://www.omdbapi.com/";
  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: query, // 's' is the parameter for search
          type: type,
        },
      });

      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data from OMDb", error);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchMovies(searchQuery);
  }, [type]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    fetchMovies(searchQuery);
  };

  return (
    <div>
      <h1>BingeVault</h1>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-btn">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="filter">
        <label htmlFor="type">Content Type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      <div className="movie-wrapper">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.title} />
            <h2>{movie.Title}</h2>
            <p className="year">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecco;
