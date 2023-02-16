import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Card3 = ({
  image,
  name,
  price,
  brand,
  rank,
}) => {
  return (
    <>
    <div className="shadow-lg rounded-lg">
        <div className="card w-full bg-base-100  image-full cursor-pointer">
          <figure className="flex justify-center">
            <img src={image} alt="#" className="w-18 items-center" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center font-bold pt-4">{name}</h2>
            <h2 className="card-title text-right text-yellow-600 pt-4">
              {rank}
            </h2>
            <h2 className="card-title text-left text-green-600 pt-4">
              {price}
            </h2>
            <h2 className="card-title text-left text-orange-600 pt-4">
              {brand}
            </h2>
            <button className="bg-red-800   text-white  py-2 px-2 rounded "  >
                Remove
              </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default Card3;
