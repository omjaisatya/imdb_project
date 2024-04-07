import React from "react";
import Logo from "../assests/imdb-logo.png";

function NavBar() {
  return (
    <div className="flex border space-x-8 ">
      <img src={Logo} alt="IMDB Logo" height={80} width={80} />
      <h3 className="text-blue-400 pt-2">Movies</h3>
      <h3 className="text-blue-400 pt-2">Watchlist</h3>
    </div>
  );
}

export default NavBar;
