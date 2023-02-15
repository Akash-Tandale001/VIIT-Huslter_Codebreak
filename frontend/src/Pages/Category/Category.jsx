import React from "react";
import Card from "../../Components/CategoriesCard/Card";
import CategoryData from "../../utils/CategoryData";
const Category = () => {
  return (
    <div>
      <p className="italic drop-shadow-2xl font-bold pt-2 " style={{fontSize:"2em",textAlign:"center"}}>Select Categories</p>
      <div className='shadow-lg rounded-lg'>
        <div className="grid lg:grid-cols-5 gap-3 p-8 gap-y-12">
          {CategoryData.map((item, index) => {
            return <Card key={index} image={item.image} name={item.name} data={item.data} text={item.text}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
