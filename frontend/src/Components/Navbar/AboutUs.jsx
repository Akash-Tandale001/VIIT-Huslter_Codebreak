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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            maximus auctor velit, eu interdum augue rhoncus vel. Vestibulum
            lobortis euismod ex, a lacinia eros ultricies vel. In eget magna sed
            felis consectetur efficitur id id augue.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Aenean euismod feugiat risus ac volutpat. Fusce aliquet justo eu
            ultrices dignissim. Etiam nec euismod ante. Nulla facilisi. Morbi
            vel magna ut libero vehicula commodo. Integer tincidunt sapien at
            malesuada commodo.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Nulla facilisi. Morbi vel magna ut libero vehicula commodo. Integer
            tincidunt sapien at malesuada commodo. Aenean euismod feugiat risus
            ac volutpat. Fusce aliquet justo eu ultrices dignissim. Etiam nec
            euismod ante.
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
