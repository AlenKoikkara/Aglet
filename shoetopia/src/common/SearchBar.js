import React, { useState } from "react";
import "./SearchBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { InputAdornment, OutlinedInput, TextField } from "@mui/material";
import utils from "../utils";
const SearchBar = () => {
  const [toggleBar, setToggleBar] = useState(true);
  const handleClick = () => {
    const barInput = document.getElementById("barInput");
    const searchBarbody = document.getElementById("searchBarbody");
    if (toggleBar === false) {
      barInput.classList.remove("open");
      barInput.classList.add("closed");
      searchBarbody.classList.remove("open");
      searchBarbody.classList.add("closed");
      setToggleBar(true);
    } else {
      barInput.classList.remove("closed");
      barInput.classList.add("open");
      searchBarbody.classList.remove("closed");
      searchBarbody.classList.add("open");
      setToggleBar(false);
    }
  };
  return (
    <div className="searchBarbody" id="searchBarbody">
      <div className="barInput" id="barInput">
        {
          <input
            className="searchText"
            margin="dense"
            id="searchText"
            name="searchText"
            type="text"
            placeholder="start typing..."
          />
        }
        <div className="barIcon" onClick={() => handleClick()}>
          {toggleBar ? (
            <SearchRoundedIcon
              fontSize={utils.isMobile() ? "medium" : "large"}
            ></SearchRoundedIcon>
          ) : (
            <CloseRoundedIcon
              fontSize={utils.isMobile() ? "medium" : "large"}
            ></CloseRoundedIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
