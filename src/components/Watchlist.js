// import React from "react";

// function Watchlist() {
//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-900 shadow-md m-5 ">
//       <table className="w-full border-collapse bg-white text-left text-5m text-gray-700">
//         <thead className="bg-gray-100">
//           <tr>
//             <th scope="col" className="px-6 py-4 font-medium text-gray-900">
//               Name
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Rating</div>
//               </div>
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Popularity</div>
//               </div>
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Genre</div>
//               </div>
//             </th>
//             <th>
//               <div className="flex">
//                 <div>Delete</div>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//           <tr className="hover:bg-gray-50 ">
//             <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
//               <img className="h-[6rem] w-[10rem] object-fill" src="" alt="" />
//               <div className="font-medium text-gray-700 text-sm">Sci-fi</div>
//             </td>
//             <td className="pl-6 py-4 ">9.5</td>
//             <td className="pl-6 py-4">9.3</td>
//             <td className="pl-6 py-4">Action</td>
//             <td className="pl-6 py-4">
//               <button className="text-red-600 ">Delete Me</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Watchlist;

import React, { useState, useEffect, useMemo } from "react";

function WatchList() {
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [rating, setRating] = useState(0);
  const [searchStr, setSearchStr] = useState("");

  let genreids = useMemo(
    () => ({
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    }),
    []
  );

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("imdb");

    moviesFromLocalStorage = JSON.parse(moviesFromLocalStorage);

    setFavourites(moviesFromLocalStorage);
  }, []);

  useEffect(() => {
    let temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    temp = new Set(temp); // imp
    setGenres(["All Genres", ...temp]);
  }, [favourites, genreids]);

  let filteredArray = [];

  // genre Filter

  filteredArray =
    currGenre === "All Genres"
      ? favourites
      : favourites.filter(
          (movie) => genreids[movie.genre_ids[0]] === currGenre
        );

  // Sorting with Respect to ratings
  if (rating === -1) {
    filteredArray = filteredArray.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
  }

  if (rating === 1) {
    filteredArray = filteredArray.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
  }

  if (filteredArray !== null) {
    filteredArray = filteredArray.filter((movie) => {
      return movie.title.toLowerCase().includes(searchStr.toLowerCase());
    });
  }

  // filteredArray = filteredArray.filter((movie) => {
  //   return movie.title.toLowerCase().includes(searchStr.toLowerCase());
  // });

  // Sorting with respect to popularity

  const del = (movie) => {
    let newArray = favourites.filter((m) => m.id !== movie.id);
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre) => {
          return (
            <button
              className={
                currGenre === genre
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
              }
              onClick={() => {
                setCurrGenre(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <input
          type="text"
          className=" bg-gray-200 border-4 text-center p-1 m-2"
          placeholder="Search for Movies"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class='w-full border-collapse bg-white text-left text-sm text-gray-500"'>
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-4 font-medium text-gray-900">Name</th>

              <th>
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    className="mr-1"
                    onClick={() => {
                      setRating(1);
                    }}
                    alt=""
                  />
                  <div>Ratings</div>
                  <img
                    alt=""
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-1"
                    onClick={() => {
                      setRating(-1);
                    }}
                  />
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>

              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {filteredArray &&
              filteredArray.map((movie) => {
                return (
                  <tr class="hover:bg-gray-50">
                    <td class="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                      <img
                        alt="Movie Poster"
                        class="h-[6rem]  w-[10rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                      />

                      <div class="font-medium text-gray-700  text-sm">
                        {movie.title}
                      </div>
                    </td>

                    <td className=" pl-6 py-4">{movie.vote_average}</td>

                    <td className="pl-6 py-4">{movie.popularity}</td>

                    <td className="py-4">{genreids[movie.genre_ids[0]]}</td>

                    <td>
                      <button
                        className="text-red-600"
                        onClick={() => del(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
