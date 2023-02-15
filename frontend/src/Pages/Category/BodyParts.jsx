import React from 'react'
import Card2 from "../../Components/CategoriesCard/Card2";
import BodyPartsData from "../../utils/BodyPartsData";
const BodyParts = () => {
  return (
    <div>
      <p className="italic drop-shadow-2xl font-bold pt-2 " style={{fontSize:"2em",textAlign:"center"}}>Select Categories</p>
      <div className='shadow-lg rounded-lg'>
        <div className="grid lg:grid-cols-5 gap-3 p-8 gap-y-12">
          {BodyPartsData.map((item, index) => {
            return <Card2 key={index} image={item.image} name={item.name} text={item.text}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyParts;