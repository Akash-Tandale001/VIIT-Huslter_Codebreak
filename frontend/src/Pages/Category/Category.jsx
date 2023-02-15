import React from "react";
import Card from "../../Components/CategoriesCard/Card";
import CategoryData from "../../utils/CategoryData";
const Category = () => {
  return (
    <div>
      <p className="italic drop-shadow-2xl font-bold pt-2" style={{fontSize:"2em",textAlign:"center"}}>Select Categories</p>
      <div>
        <div className="grid grid-cols-5 gap-2 p-8 gap-y-8">
          {CategoryData.map((item, index) => {
            return <Card key={index} image={item.image} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
