import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ image, name ,data, text}) => {
  const navigate = useNavigate();
  const onClick = () => {
    if(text==="Available at Closest stores"){
      navigate(`view/${name.replace(/\s+/g, "")}`);
    }
  };
  return (
    <div className='shadow-lg rounded-lg '>
      <Link
        to={{
          pathname: text==="Available at Closest stores" ? `view/${name.replace(/\s+/g, "")}`:``          
        }}
        state={{title:name}}
      >
        <div className="card w-full bg-base-100  image-full cursor-pointer">
          <figure className="flex justify-center">
            <img src={image} alt="#" className="w-14 items-center" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center pt-4">{name}</h2>
            <h3 className="card-text text-center pt-4 text-green-600  font-normal text-gray-600">{text}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
