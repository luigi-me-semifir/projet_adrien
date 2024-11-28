import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const { data } = await axios.get(
        `http://localhost:5050/api/tutorials/search?q=${e.target.value}`
      );
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (tutorial) => {
    navigate(`/tutorials/${tutorial._id}`); // Redirection vers la page de détails
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Rechercher une formation..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((tutorial) => (
            <li key={tutorial._id} onClick={() => handleSelect(tutorial)}>
              {tutorial.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
