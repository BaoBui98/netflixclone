import React from "react";
import { useState, createContext } from "react";
import { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../Style/NavbarStyle.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import Trend from "./Trend";
import Movie from "./Movie";
export const Container = createContext();
const Navbar = () => {
  const [toggle, SetToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <Fragment>
      <Container.Provider value={{ toggle, inputValue }}>
        <nav>
          <div className="header-title">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movie</NavLink>
            </li>
            <li>
              <NavLink to="trends">Trend</NavLink>
            </li>
          </div>
          <div className="header-search-container">
            <div className="header-search">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <AiOutlineSearch id="search-icon" />
            </div>
            <div className="header-toggle" onClick={() => SetToggle(!toggle)}>
              {toggle ? (
                <div className="change-switcher-moved"></div>
              ) : (
                <div className="change-switcher-mover"></div>
              )}
            </div>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="trends" element={<Trend />}></Route>
          <Route path="movies" element={<Movie />}></Route>
        </Routes>
      </Container.Provider>
    </Fragment>
  );
};

export default Navbar;
