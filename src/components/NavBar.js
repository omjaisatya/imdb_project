import React from "react";
import Logo from "../assests/imdb-logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex border space-x-8 ">
      <img src={Logo} alt="IMDB Logo" height={80} width={80} />
      <Link to="/" className="text-blue-400 pt-2">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400 pt-2">
        Watchlist
      </Link>
    </div>
  );
}

export default NavBar;
