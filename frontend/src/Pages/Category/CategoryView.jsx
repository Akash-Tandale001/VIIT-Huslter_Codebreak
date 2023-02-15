import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card2 from "../../Components/CategoriesCard/Card2";

const CategoryViews = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch data from API based on the category in the URL
    const category = location.pathname.replace("/categories/", "");
    fetch(`/api/items?category=${category}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [location]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card2
          key={item.id}
          image={item.image}
          name={item.name}
          data={item.data}
          title={item.title}
          des={item.des}
          parts={item.parts}
        />
      ))}
    </div>
  );
};

export default CategoryViews;