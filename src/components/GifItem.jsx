import React from "react";

export const GifItem = ({ title, imgUrl }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={title} />
      <p>{title.length < 2 ? "No hay titulo" : title}</p>
    </div>
  );
};
