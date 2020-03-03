import React, { useState, useEffect } from "react";
import Image from "./img/def.jpg";
import axios from "axios";
import "./style/home.css";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const MOVIE_API_URL = "http://localhost:3001/movie/";
  const idToken = localStorage.getItem("id_token");
  const config = {
    headers: {
      Authorization: "Bearer " + idToken
    }
  };

  const getAllMovie = async() => {
    const BASE_URL = 'http://localhost:3001/movie/';
    try {
      const response = await axios.get(BASE_URL);
      setMovie(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllMovie();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(MOVIE_API_URL, config)
  //     .then(res => {
  //       let data = res.data.data;
  //       setMovie(data);
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  
  return (
    <div className="body">
      {movie.map(mov => {
        return (
          <div className="cards" key={mov._id}>
            <figure className="snip1584">
              <img
                src={
                  mov.poster
                    ? mov.poster || mov.poster === null || mov.poster === "N/A"
                    : require("./img/def.jpg")
                }
                onError={e => {
                  e.target.src = Image; // some replacement image
                }}
              />
              <figcaption>
                <h3>{mov.title}</h3>
                <h5>{mov.year}</h5>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
