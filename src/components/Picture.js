import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
      <p>
        Download Image:{" "}
        <a target="_blank" href={data.src.large}>
          Click
        </a>
      </p>
    </div>
  );
};

export default Picture;
