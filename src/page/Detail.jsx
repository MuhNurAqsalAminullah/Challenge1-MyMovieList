import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [genre, setGenre] = useState([]);

  // ----- Fetch get one data according to id using axios
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=30b1d106fea658fde3449b41d162a830&language=en-US`
        );
        const data = response.data;
        setDetail(data);
        setGenre(data.genres);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDetail();
  });

  return (
    <div className="box-detail">
      <img
        className="bg-content-detail"
        src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`}
        alt=""
      />
      <div className="box-layout-detail">
        <div className="box-image-detail">
          <img
            className="content-image-detail"
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt=""
          />
        </div>

        <div className="box-content-detail">
          <p className="content-date-leng-detail">
            {detail.original_language} | {detail.release_date}
          </p>
          <h3 className="content-title-detail">{detail.title}</h3>
          <div className="box-content-genre-detail">
            {genre.map((item) => (
              <p key={item.id} className="content-genre-item-detail">
                {item.name}
              </p>
            ))}
          </div>
          <p className="content-desc-detail">{detail.overview}</p>
          <p className="contnt-rating-detail">{detail.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
