import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../config";
import DetailsBanner from "./DetailsBanner";

const WatchDetails = () => {
  const { handel } = useParams();
  const [content, setContent] = useState();
  const [genre, setGenre] = useState([]);
  const [key, setKey] = useState();
  const [crew, setCrew] = useState([]);
  // const location = useLocation();
  // const { id } = location.state;
  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${handel}?api_key=${API_KEY}&language=en-US`;
  const MOVIE_VIDEO_URL = `https://api.themoviedb.org/3/movie/${handel}/videos?api_key=${API_KEY}&language=en-US`;
  const MOVIE_CREW = `https://api.themoviedb.org/3/movie/${handel}/credits?api_key=${API_KEY}&language=en-US`;
  // ------------------------fetching Single Details-----------------
  const fetchDataWithId = async () => {
    const { data } = await axios.get(MOVIE_DETAILS_URL);
    setGenre(data.genres);
    setContent(data);
    console.log(data);
  };
  // -------------------------fetching movie video key----------------------
  const fetchVideoKey = async () => {
    const { data } = await axios.get(MOVIE_VIDEO_URL);
    setKey(data.results[0]?.key);
  };

  // ----------------------fetching credits crew------------------
  const fetchCrew = async () => {
    const { data } = await axios.get(MOVIE_CREW);
    // console.log(data.cast);
    setCrew(data.cast);
  };

  useEffect(() => {
    fetchDataWithId();
    fetchVideoKey();
    fetchCrew();
  }, [handel]);
  return (
    <>
      {content && (
        <DetailsBanner
          backdrop_path={content.backdrop_path}
          title={content.title || content.name}
          vote_average={content.vote_average}
          vote_count={content.vote_count}
          tagline={content.tagline}
          release_date={
            content.release_date || content.first_air_date
          }
          poster_path={content.poster_path}
          genres={genre}
          overView={content.overview}
          runtime={content.runtime}
          status={content.status}
          budget={content.budget}
          popularity={content.popularity}
          crew={crew}
          yKey={key}
          id={handel}
        />
      )}
    </>
  );
};

export default WatchDetails;
