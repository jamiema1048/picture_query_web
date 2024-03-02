import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value); // change state to input  as click
  };
  const handleKeyPress = (e) => {
    // listen keypress
    if (e.key === `Enter`) {
      search(); //按下Enter時執行Search
    }
  };
  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="&#x1F50E;"
      />
      <button className="myBtn" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default Search;
