import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 1000000,
  });

  const switchType = (val) => {
    console.log("clicked");
    setQuery({ ...query, type: val });
  };
  return (
    <div className="SearchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min. Price"
          min={0}
          max={1000000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max. Price"
          min={0}
          max={1000000}
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
