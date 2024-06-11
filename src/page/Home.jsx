import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PosterSlider from "../components/PosterSlider";
import Card from "../components/Card";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  // ----- Fetch get data with axios
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=30b1d106fea658fde3449b41d162a830&language=en-US&page=1"
        );
        const data = response.data;
        setMovie(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovie();
  }, []);

  // ----- handle detail to detail pages
  const handleDetail = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="box-main">
      <PosterSlider />

      <div className="box-content-main">
        <h4 className="title-content-main">discover movie</h4>

        <div className="card-container">
          {movie.map((items) => (
            <Card key={items.id} handleDetail={handleDetail} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
