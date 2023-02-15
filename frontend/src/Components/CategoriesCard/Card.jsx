import React from "react";

const Card = ({image, name}) => {
    let path=name
    path.replace(/\s+/g, '');
  return (
    <div className="flex justify-center">
      <div className="card w-32 bg-base-100  image-full cursor-pointer" >
        <figure className="flex justify-center">
          <img
            src={image}
            alt="#"
            className="w-14 items-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center pt-4">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
