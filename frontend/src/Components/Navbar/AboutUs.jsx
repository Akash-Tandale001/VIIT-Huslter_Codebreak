import React from "react";

function AboutUs() {
  return (
    <>
      <div className="bg-gray-100 h-screen flex justify-center items-center">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            About Us
          </h1>
          <p className="text-ggimray-800 text-lg leading-relaxed mb-4">
            An Indian automaker called Ashok Leyland is focused on producing
            trucks, buses, and other commercial and military vehicles. Chennai,
            India is home to the company's headquarters, which was
            established in 1948.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Ashok Leyland is one of the largest manufacturers of commercial
            vehicles in India and has a significant global presence in countries
            such as the United Kingdom, Sri Lanka, and the Middle East. The
            company has a wide range of products that cater to various segments,
            including long-haul transportation, construction, mining, and
            public transportation.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Apart from commercial vehicles, Ashok Leyland also offers related
            products and services such as aftermarket support, fleet management
            solutions, and customized vehicle modifications. The company is
            known for its focus on innovation, technology, and sustainability,
            with a strong emphasis on research and development.Overall, Ashok
            Leyland is a leading player in the Indian commercial vehicle
            industry and is recognized for its high-quality products and
            services, innovative solutions, and commitment to sustainability.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
