import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "./img/def.jpg";
import axios from "axios";
import "./style/home.css";
// import Auth from '../Auth';

const Home = () => {
  // const auth = new Auth();
  const [movieLatest, setMovieLatest] = useState([]);
  const [movieOldest, setMovieOldest] = useState([]);
  // const [loading, setLoading] = useState("false");

  // const [test, setTest] = useState({tests : []});
  const [test, setTest] = useState([]);

  const test123 = async () => {
    await axios({
      method: "GET",
      url: "https://animenewsnetwork.p.rapidapi.com/api.xml",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "animenewsnetwork.p.rapidapi.com",
        "x-rapidapi-key": "f274088a6fmsh9df76e7850c966fp1366fcjsn8aacdf39b976"
      },
      params: {
        anime: "1"
      }
    })
      .then(res => test123(res.data))
      .catch(err => console.log(err));
  };

  // const test123 = async() => {
  //   // const URL = "https://api.jikan.moe/v3/anime/1";
  //   const URL = "https://hummingbirdv1.p.rapidapi.com/anime/steins-gate";
  //   // const URL = "https://ghibliapi.herokuapp.com/films";
  //   const config = {
  //     headers: { 
  //       // "Access-Control-Allow-Origin": "*",
  //       // "content-type":"application/octet-stream",
  //       // "x-rapidapi-host":"hummingbirdv1.p.rapidapi.com",
  //       // "x-rapidapi-key":"f274088a6fmsh9df76e7850c966fp1366fcjsn8aacdf39b976"
  //       // "Accept": "application/vnd.api+json",
  //       // "Content-Type": "application/vnd.api+json"
  //     }
  //   };

  //   try {
  //     const response = await axios.get(URL, config);
  //     console.log(response.data);
  //     setTest(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  // const getAllLatest = async() => {
  //   const LATEST_URL = "http://localhost:3001/movie/sort/latest/";
  //   // const OLD__URL = "http://localhost:3001/movie/sort/oldest/";
  //   try {
  //     setLoading("true");
  //     const response = await axios.get(LATEST_URL);
  //     // const response1 = await axios.get(OLD__URL);
  //     setMovieLatest(response.data.data);
  //     // setMovieOldest(response1.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const getAllOldest = async() => {
  //   const OLD__URL = "http://localhost:3001/movie/sort/oldest/";
  //   try {
  //     setLoading("true");
  //     const response1 = await axios.get(OLD__URL);
  //     setMovieOldest(response1.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    // getAllLatest();
    // getAllOldest();
    test123();
  }, []);


  // useEffect(() => {
  //   axios
  //     .get(MOVIE_API_URL)
  //     .then(res => {
  //       let data = res.data.data;
  //       setMovieLatest(data);
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
// const { tests } = test;
  return (

      <div className="body">
         {/* <div className="wrapper">
          <div className="callout">
          </div>
        </div> */}
        

        <div>
          {
            test && test.map(t => {
              return(
                <div key={t.id}>
                  <p>{t.title}</p>
                  <small>{t.director}</small>
                </div>
              )
            })
          }
        </div>


{/*         
        {
         movieLatest &&  movieLatest.map(latest => {
            return (
              <div className="" key={latest._id}>
                <figure className="snip1584">
                  <img
                    src={
                      latest.poster
                        ? latest.poster || latest.poster === null || latest.poster === "N/A"
                        : require("./img/def.jpg")
                    }
                    onError={e => {
                      e.target.src = Image; // some replacement image
                    }}
                  />
                  <figcaption>
                    <h3>{latest.title}</h3>
                    <h5>{latest.year}</h5>
                  </figcaption>
                </figure>              
              </div>
            )
          })
        }

        {
         movieOldest &&  movieOldest.map(oldest => {
            return (
              <div className="" key={oldest._id}>
                <figure className="snip1584">
                  <img
                    src={
                      oldest.poster
                        ? oldest.poster || oldest.poster === null || oldest.poster === "N/A"
                        : require("./img/def.jpg")
                    }
                    onError={e => {
                      e.target.src = Image; // some replacement image
                    }}
                  />
                  <figcaption>
                    <h3>{oldest.title}</h3>
                    <h5>{oldest.year}</h5>
                  </figcaption>
                </figure>              
              </div>
            )
          })
        } */}
      </div>
  );
};

export default Home;