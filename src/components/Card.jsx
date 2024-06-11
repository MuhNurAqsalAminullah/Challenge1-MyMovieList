/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ data, handleDetail }) => {
  return (
    <div className="box-card" onClick={() => handleDetail(data.id)}>
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          className="image-content"
          alt=""
        />
      </div>

      <div className="card-text">
        <p>{data.original_title}</p>
        <p className="card-text-date">{data.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
