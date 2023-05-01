import React from "react";
import bgImage from "../../assets/images/10816_background_1984x900.jpg";
import caroselImg1 from '../../assets/images/Hsu-Changing.webp'
import caroselImg2 from '../../assets/images/l-intro-1643997465.jpg'
import caroselImg3 from '../../assets/images/Chilli-Garlic-Noodles-Veg.jpg'
import caroselImg4 from '../../assets/images/best-chinese-restaurants-lagos.webp'

const Home = () => {
  return (
    <div
      className="hero min-h-screen items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content gap-32">
        <div className="mx-10">
          <h1 className="mb-8 text-5xl font-bold">tasty chinese dishes</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn rounded-full bg-amber-500 border-0">
            BOOK A TABLE
          </button>
        </div>
        <div>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full mt-20">
              <img
                src={caroselImg1}
                className="w-96 h-72"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src={caroselImg2}
                className="w-96 h-72"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src={caroselImg3}
                className="w-96 h-72"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src={caroselImg4}
                className="w-96 h-72"
              />
            </div>
          </div>
          <div className="flex justify-center w-96 mt-8 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
