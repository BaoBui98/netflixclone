import React, { useState, useEffect, Fragment, useContext } from "react";
import "../Style/TrendStyle.css";
import axios from "axios";
import NoImg from "../assets/noimage.jpg";
import { Container } from "./Navbar";
import YouTube from "react-youtube";
const Trend = () => {
  const [trendData, setTrendData] = useState([]);
  const [selectTrend, setSelectTrend] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const { toggle, inputValue } = useContext(Container);
  const background = "https://image.tmdb.org/t/p/original";
  const shown = inputValue ? "search" : "discover";
  const API_URL = "https://api.themoviedb.org/3";
  const Api = ` https://api.themoviedb.org/3/${shown}/tv`;
  const Imgpath = "https://image.tmdb.org/t/p/w500";
  const getDataTrends = async () => {
    const response = await axios.get(Api, {
      params: {
        api_key: "516a2c26472f6e733afe2625212a373f",
        query: inputValue,
      },
    });
    const results = response.data.results;
    setTrendData(results);
    setSelectTrend(results[0]);
  };
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/tv/${id}`, {
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
    setSelectTrend(data);
  };
  useEffect(() => {
    getDataTrends();
  }, []);
  console.log(trendData);
  const renderTrailer = () => {
    const trailer = selectTrend.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );

    const key = trailer ? trailer.key : selectTrend.videos.results.key;
    // return Youtube container params
    console.log(trailer);
    console.log(selectTrend);
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
      <div
        className="background-trend-container"
        style={
          selectTrend && selectTrend.backdrop_path
            ? {
                backgroundImage: `url(${background}${selectTrend.backdrop_path})`,
              }
            : null
        }
      >
        <div className="background-trend-container-title">
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
          {selectTrend.videos && playTrailer ? renderTrailer() : null}
          <h3>{selectTrend.name}</h3>
          <p>{selectTrend.overview}</p>
        </div>
      </div>
      <div className={toggle ? "trend-container" : "trend-container-second "}>
        {trendData.map((trendTv) => {
          return (
            <Fragment key={trendTv.id}>
              <div
                className="trend-container-content"
                onClick={() => selectMovie(trendTv)}
              >
                <img
                  src={
                    trendTv.poster_path
                      ? `${Imgpath}${trendTv.poster_path}`
                      : NoImg
                  }
                  alt=""
                />
                <h3>{trendTv.name}</h3>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Trend;
