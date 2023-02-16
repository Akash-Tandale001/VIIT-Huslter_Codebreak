import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Card2 = ({
  image,
  name,
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  title,
  des,
  parts,
  price,
  brand,
  rank,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`view/${name.replace(/\s+/g, "")}`);
  };
  const handaleClick=()=>{
    
  }
  return (
    <div className="shadow-lg rounded-lg">
      <Link
        to={{
          pathname: `view/${name.replace(/\s+/g, "")}`,
          state: { data: data },
        }}
      >
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
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded " onClick={handaleClick}>
                Add To Cart
              </button>
            </div>
            <h2 className="card-title text-left text-orange-600 pt-4">
              {brand}
            </h2>

            <h3 className="card-text text-center pt-4  font-normal text-gray-600">
              {des}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card2;
