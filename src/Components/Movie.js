import React, { Fragment, useEffect, useState, useContext } from "react";
import "../Style/MovieStyle.css";
import axios from "axios";
import NoImg from "../assets/noimage.jpg";
import { Container } from "../Components/Navbar";
import YouTube from "react-youtube";
const Movie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataMovies, setDataMovies] = useState({});
  const { toggle, inputValue } = useContext(Container);
  const [playTrailer, setPlayTrailer] = useState(false);

  const Imgpath = "https://image.tmdb.org/t/p/w500";
  const background = "https://image.tmdb.org/t/p/original";
  const shown = inputValue ? "search" : "discover";
  const ApiMovie = `https://api.themoviedb.org/3/${shown}/movie`;
  const API_URL = "https://api.themoviedb.org/3";
  const getDataMovie = async () => {
    const response = await axios.get(ApiMovie, {
      params: {
        api_key: "516a2c26472f6e733afe2625212a373f",
        query: inputValue,
      },
    });
    const results = response.data.results;

    setDataMovie(results);
    setDataMovies(results[0]);
  };
  // fetch  movie video
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: "516a2c26472f6e733afe2625212a373f",
        append_to_response: "videos",
      },
    });
    return data;
  };
  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    setDataMovies(data);
  };
  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 1000);
  }, [inputValue]);
  const renderTrailer = () => {
    const trailer = dataMovies.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    console.log("trailler", trailer);
    const key = trailer ? trailer.key : dataMovies.videos.results[0].key;
    // return Youtube container params
    return (
      <YouTube
        videoId={key}
        containerClassName={"youtube-container"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        }}
      />
    );
  };

  return (
    <Fragment>
      <div className="movie-container">
        <div
          className="background-movie"
          style={
            dataMovies && dataMovies.backdrop_path
              ? {
                  backgroundImage: `url(${background}${dataMovies.backdrop_path})`,
                }
              : null
          }
        >
          <div className="movie-title">
            <button className={"button"} onClick={() => setPlayTrailer(true)}>
              Play Trailer
            </button>
            {playTrailer ? (
              <button
                className={"button button--close"}
                onClick={() => setPlayTrailer(false)}
              >
                Close
              </button>
            ) : null}
            {dataMovies.videos && playTrailer ? renderTrailer() : null}
            <h3>{dataMovies.title}</h3>
            <p>{dataMovies.overview}</p>
          </div>
        </div>
        <div
          className={
            toggle ? "movie-container-main-second" : "movie-container-main"
          }
        >
          {dataMovie.map((movie) => {
            return (
              <div
                key={movie.id}
                className="movie-container-title"
                onClick={() => selectMovie(movie)}
              >
                {movie.poster_path ? (
                  <img src={`${Imgpath}${movie.poster_path}`} alt="" />
                ) : (
                  NoImg
                )}
                <h3>{movie.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
