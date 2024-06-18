import React, { useState } from "react";
import "./SearchBar.scss";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
const SearchBar = () => {
  const [toggleBar, setToggleBar] = useState(true);
  const handleClick = () => {
    const element = document.getElementById("barInput");
    if (toggleBar === false) {
      element.classList.remove("open");
      element.classList.add("closed");
      setToggleBar(true);
    } else {
      element.classList.remove("closed");
      element.classList.add("open");
      setToggleBar(false);
    }
  };
  return (
    <div className="searchBarbody">
      <div className="barInput" id="barInput">
       { <input
          className="searchText"
          margin="dense"
          id="searchText"
          name="searchText"
          type="text"
          placeholder="start typing..."
        />}
        <div className="barIcon" onClick={() => handleClick()}>
          {toggleBar ? (
            <SearchRoundedIcon fontSize="large"></SearchRoundedIcon>
          ) : (
            <CloseRoundedIcon fontSize="large"></CloseRoundedIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
