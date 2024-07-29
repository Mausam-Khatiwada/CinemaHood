import React, { useState, useEffect } from "react";
import "./banner.css";
import bgImg from '../assets/movies/bg-transformer.jpg';
import titleImg from '../assets/movies/transformer-title.png'
const Banner = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src={bgImg} alt="" className="bg-image active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content active">
                <img src={titleImg} alt="Movie Title" className="movie-title" />
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, porro cupiditate eveniet optio ipsa earum ab quae sint
                  ex saepe velit alias blanditiis tempora reiciendis repellat,
                  voluptates architecto! Architecto porro rerum quod explicabo
                  doloribus molestiae amet accusamus nam veniam magnam, officia
                  neque natus dolore qui tempore et nisi tenetur quidem.
                </p>
                <div className="button">Button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="date active">
                <h2>On 15th August</h2>
              </div>
              <div className="trailer active">
                <a href="#" className="playBtn">
                <ion-icon name="play-circle-outline"></ion-icon>
                </a>
                <p>Watch Trailer</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
