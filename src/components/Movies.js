import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [MyMovies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState("");

  // Watchlist handlers
  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
  };

  //removeMovie from watchlist
  const removeFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((m) => {
      return m.id !== movie.id;
    });
    setWatchList(filteredWatchList);
  };

  // hovering on movie cart
  const showButton = (id) => {
    setHovered(id);
  };

  const hideButton = () => {
    setHovered();
  };

  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  useEffect(() => {
    (function () {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=1c027109a0bf512115ee0df1962ab543&page=${pageNum}`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results);
        });
    })();
  }, [pageNum]);
  // console.log(MyMovies);
  console.log(watchList);

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap">
        {MyMovies.map((movie) => {
          return (
            <div
              onMouseOver={() => showButton(movie.id)}
              onMouseLeave={() => hideButton(movie.id)}
              key={movie.id}
              className="w-[160px] h-[38vh] bg-center bg-cover rounded=xl m-4 md-h[40vh]"
              style={{
                backgroundImage: `URL(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div
                className="text-2xl p-2  rounded-2xl right-2 bottom-2 "
                style={{ display: hovered === movie.id ? "block" : "none" }}
              >
                {watchList.includes(movie) === false ? (
                  <div onClick={() => addToWatchList(movie)}>✅</div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )}
              </div>
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Pagination
          pageNumProp={pageNum}
          onNextProp={onNext}
          onPrevProp={onPrev}
        />
      </div>
    </div>
  );
}

export default Movies;
