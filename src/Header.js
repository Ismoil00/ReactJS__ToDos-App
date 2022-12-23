import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ search, setSearch, setFilter }) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const menu = document.getElementById("dropDownMenu");
  const filterText = document.getElementById("filterText");
  const filterSec = document.getElementById("filterBtn");
  const pageUrl = window.location.hash;

  useEffect(() => {
    const filterDisplay = () => {
      if (pageUrl === "#/") {
        filterSec.style.display = "block";
      } else {
        filterSec.style.display = "none";
      }
    };

    setTimeout(filterDisplay, 100);
  }, [pageUrl]);

  const showMenu = () => {
    if (!dropDownMenu) {
      menu.style.display = "block";
      setDropDownMenu(true);
    } else {
      menu.style.display = "none";
      setDropDownMenu(false);
    }
  };

  const setFilterValue = (value) => {
    menu.style.display = "none";
    setDropDownMenu(false);
    setFilter(value);
    filterText.textContent = `Filter: ${value}`;
  };

  return (
    <main className="header">
      <div className="headerTopDiv">
        <h1 className="logo">To Do List</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search to do"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="searchInput"
            autoComplete="off"
          />
        </form>
      </div>
      <div className="headerBtns">
        <div id="filterBtn">
          <p onClick={showMenu} id="filterText">
            Filter
          </p>
          <div id="dropDownMenu">
            <button value="All" onClick={(e) => setFilterValue(e.target.value)}>
              All
            </button>
            <button
              value="Active"
              onClick={(e) => setFilterValue(e.target.value)}
            >
              Active
            </button>
            <button
              value="Favorites"
              onClick={(e) => setFilterValue(e.target.value)}
            >
              Favorites
            </button>
            <button
              value="Accomplished"
              onClick={(e) => setFilterValue(e.target.value)}
            >
              Accomplished
            </button>
          </div>
        </div>
        <Link to="/todo">
          <button>
            Create Task <span>&#43;</span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Header;
