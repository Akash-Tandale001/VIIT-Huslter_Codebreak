import React from "react";

const Card = ({image, name, text}) => {
    let path=name
    path.replace(/\s+/g, '');
  return (
    <div className='shadow-lg rounded-lg '>
    <div className="flex justify-center">
      <div className="card w-32 bg-base-100  image-full cursor-pointer" >
        <figure className="flex justify-center">
          <img 
            src={image}
            alt="#"
            className="w-14 items-center rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center pt-4 text-3xl font-bold text-slate-700 mb-3 ">{name}</h2>
          <h3 className="card-text text-center pt-4  font-normal text-gray-600">{text}</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
