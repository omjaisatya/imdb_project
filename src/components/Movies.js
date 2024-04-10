import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [MyMovies, setMovies] = useState([]);
  useEffect(() => {
    (function () {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=1c027109a0bf512115ee0df1962ab543`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results);
        });
    })();
  }, []);
  console.log(MyMovies);

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap">
        {MyMovies.map((movie) => {
          return (
            <div
              className="w-[160px] h-[38vh] bg-center bg-cover rounded=xl m-4 md-h[40vh]"
              style={{
                backgroundImage: `URL(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
