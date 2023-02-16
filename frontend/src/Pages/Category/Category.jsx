import React from "react";
import Card from "../../Components/CategoriesCard/Card";
import CategoryData from "../../utils/CategoryData";
const Category = () => {
  return (
    <div>
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600" style={{fontSize:"2em",textAlign:"center"}}>Select Categories</p>
      </div>
      <div className='shadow-lg rounded-lg '>
        <div className="grid lg:grid-cols-5 gap-3 p-8 gap-y-12 hover:bg-white bg-gray-300">
          {CategoryData.map((item, index) => {
            return <Card key={index} image={item.image} name={item.name} data={item.data} text={item.text}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
