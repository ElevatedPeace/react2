import React from "react";
import { useState } from "react";

const SearchSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [updated, setUpdated] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      setUpdated(searchInput);
    }
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        onKeyDown={handleKeyDown}
        style={{
          width: "500px",
          height: "40px",
          borderBottomRightRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderTopLeftRadius: "50px",
          border: "1px solid grey",
        }}
      />
      <h2> {searchInput}</h2>

      <h2>Updated: {updated}</h2>
    </div>
  );
};

export default SearchSection;
