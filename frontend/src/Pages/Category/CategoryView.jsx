import React from 'react'
import Card2 from "../../Components/CategoriesCard/Card2";
import CategoryData from "../../utils/CategoryData";

const CategoryView = () => {
  const data = [
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Side%20View%20Mirror%20Cover.png",
      name: "Side View Mirror Cover",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Inner%20Rear%20View%20Mirror.png",
      name: "Inner Rear View Mirror",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Mirror%20Trim.png",
      name: "Mirror Trim",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Side%20View%20Mirror.png",
      name: "Side View Mirror",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Mirror%20Actuator.png",
      name: "Mirror Actuator",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Front%20Bumper.png",
      name: "Front Bumper"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Rear%20Bumper.png",
      name: "Rear Bumper"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bumper%20Bracket.png",
      name: "Bumper Bracket"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Grille.png",
      name: "Grille"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bumper%20Trim.png",
      name: "Bumper Trim"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Impact%20Absorber.png",
      name: "Impact Absorber"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock%20Knob.png",
      name: "Door Lock Knob"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Lock.png",
      name: "Bonnet Lock"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender%20Trim.png",
      name: "Fender Trim"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender%20Bracket.png",
      name: "Fender Bracket"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender.png",
      name: "Fender"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Trim.png",
      name: "Bonnet Trim"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Hinge.png",
      name: "Bonnet Hinge"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Stay%20Rod%20Holder.png",
      name: "Bonnet Stay Rod Holder"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Release%20Lever.png",
      name: "Bonnet Release Lever"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Release%20Cable.png",
      name: "Bonnet Release Cable"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Heat%20Shield.png",
      name: "Bonnet Heat Shield"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Support%20Bracket.png",
      name: "Bonnet Support Bracket"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet.png",
      name: "Bonnet"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door.png",
      name: "Door"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Trim.png",
      name: "Door Trim"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Handle.png",
      name: "Door Handle"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock.png",
      name: "Door Lock"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Hinge.png",
      name: "Door Hinge"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Hinge%20Cover.png",
      name: "Door Hinge Cover"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Latch.png",
      name: "Door Latch"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Catch.png",
      name: "Door Catch"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Handle%20Bracket.png",
      name: "Door Handle Bracket"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Glass.png",
      name: "Door Glass"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/DOOR%20TRIM%20CAP.png",
      name: "Door Trim Cap"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Membrane.png",
      name: "Door Membrane"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock%20Link.png",
      name: "Door Lock Link"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Check%20Arm.png",
      name: "Door Check Arm"
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock%20Cylinder.png",
      name: "Door Lock Cylinder"
    },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
      {data.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          name={item.name}
          // data={item.data}
          title=""
          des=""
          parts=""
        />
      ))}
    </div>
  );
};

export default CategoryView