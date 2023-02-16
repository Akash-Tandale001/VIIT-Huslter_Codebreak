import React from 'react'
import Card2 from "../../Components/CategoriesCard/Card2";
import CategoryData from "../../utils/CategoryData";

const CategoryView = () => {
  const data = [
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Side%20View%20Mirror%20Cover.png",
        name: "Side View Mirror Cover",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Inner%20Rear%20View%20Mirror.png",
      name: "Inner Rear View Mirror",
      rank: "Rank: 4.1☆",
      price: "Cost: Rs 340",
      brand: "Brand: TATA",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Mirror%20Trim.png",
      name: "Mirror Trim",
      rank: "Rank: 4.9☆",
      price: "Cost: Rs 500",
      brand: "Brand: HONDA",
    },
    {
      image:
        "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Side%20View%20Mirror.png",
      name: "Side View Mirror",
      rank: "Rank: 4.4☆",
      price: "Cost: Rs 344",
      brand: "Brand: BUGATI",
    },
  ]
  const data2 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Front%20Bumper.png",
      name: "Front Bumper",
      rank: "Rank: 4.7☆",
      price: "Cost: Rs 870",
      brand: "Brand: JAGUAR",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Rear%20Bumper.png",
      name: "Rear Bumper",
      rank: "Rank: 3.0☆",
      price: "Cost: Rs 650",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bumper%20Bracket.png",
      name: "Bumper Bracket",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 980",
      brand: "Brand: TATA",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Grille.png",
      name: "Grille",
      rank: "Rank: 5.0☆",
      price: "Cost: Rs 5000000",
      brand: "Brand: MARUTI",
    },
  ]
  const data3 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bumper%20Trim.png",
      name: "Bumper Trim",
      rank: "Rank: 4.7☆",
      price: "Cost: Rs 477",
      brand: "Brand: Rolls Royels",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Impact%20Absorber.png",
      name: "Impact Absorber",
      rank: "Rank: 3.8☆",
      price: "Cost: Rs 670",
      brand: "Brand: Wolkswagon",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock%20Knob.png",
      name: "Door Lock Knob",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Lock.png",
      name: "Bonnet Lock",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data4 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender%20Trim.png",
      name: "Fender Trim",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender%20Bracket.png",
      name: "Fender Bracket",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Fender.png",
      name: "Fender",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Trim.png",
      name: "Bonnet Trim",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data5 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Hinge.png",
      name: "Bonnet Hinge",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Stay%20Rod%20Holder.png",
      name: "Bonnet Stay Rod Holder",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Release%20Lever.png",
      name: "Bonnet Release Lever",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Release%20Cable.png",
      name: "Bonnet Release Cable",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data6 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Heat%20Shield.png",
      name: "Bonnet Heat Shield",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet%20Support%20Bracket.png",
      name: "Bonnet Support Bracket",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Bonnet.png",
      name: "Bonnet",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door.png",
      name: "Door",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data7 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Trim.png",
      name: "Door Trim",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Handle.png",
      name: "Door Handle",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock.png",
      name: "Door Lock",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Hinge.png",
      name: "Door Hinge",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data8 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Hinge%20Cover.png",
      name: "Door Hinge Cover",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Latch.png",
      name: "Door Latch",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Catch.png",
      name: "Door Catch",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Handle%20Bracket.png",
      name: "Door Handle Bracket",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  const data9 = [
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Glass.png",
      name: "Door Glass",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/DOOR%20TRIM%20CAP.png",
      name: "Door Trim Cap",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Membrane.png",
      name: "Door Membrane",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
    {
      image: "https://storage.googleapis.com/spares/new_images/Sub%20Categories%20Icons%20Jan4/Door%20Lock%20Link.png",
      name: "Door Lock Link",
      rank: "Rank: 4.5☆",
      price: "Cost: Rs 50",
      brand: "Brand: MGP",
    },
  ]
  return (
    <div>
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-purple-600 " style={{fontSize:"2em",textAlign:"center"}}>Spare Parts</p>
      </div>
      <div className='shadow-lg rounded-lg'></div>
    <div className="grid lg:grid-cols-5 gap-3 p-8 gap-y-12 hover:bg-white bg-gray-300">
    <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
    <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Mirrors
    </p><p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">Car Mirrors serve as a driving aid by providing side, rear and front views.</p>
    </div>
      {data.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
        />
      ))}
    <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
<p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Bumpers</p>
<p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">Parts at the front and back of a vehicle which are meant to absorb the impact of a collision</p>
</div>
{data2.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
<div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
<p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Locks</p>
<p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">A fastening (as for a door) operated by a key or a combination.</p>
</div>
{data3.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Fenders</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">A low metal guard to confine falling coals to a hearth</p>
      </div>
{data4.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Bonnets</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">The metal cover over the engine at the front.</p>
      </div>
{data5.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Doors</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">A type of door opening, typically hinged on its front edge</p>
      </div>
{data6.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Door Locks</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">A fastener fitted to a door or drawer to keep it firmly closed.</p>
      </div>
{data7.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Door Latch</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">Any of various devices in which mating mechanical parts engage to fasten but usually not to lock something</p>
      </div>
{data8.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
      <div className="border-4 border-gray-500 rounded-md p-4 hover:bg-black">
      <p className="italic drop-shadow-2xl font-bold pt-2 text-green-600 " style={{fontSize:"2em",textAlign:"left"}}>Door Glass</p>
      <p className="italic drop-shadow-2xl font-bold pt-2 text-orange-600 ">Vehicle glass includes windscreens, side and rear windows, and glass panel roofs on a vehicle.</p>
      </div>
{data9.map((item, index) => (
        <Card2
          key={1}
          image={item.image}
          rank={item.rank}
          name={item.name}
          // data={item.data}
          title={item.title}
          des=""
          parts=""
          price={item.price}
          brand={item.brand}
          
          
        />
      ))}
    </div>
    </div>
  );
};

export default CategoryView;