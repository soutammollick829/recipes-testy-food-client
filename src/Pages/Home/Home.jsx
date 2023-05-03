import React from "react";
import bgImage from "../../assets/images/10816_background_1984x900.jpg";
import chefBg from "../../assets/images/vegetables-set-left-black-slate_1220-686.avif";
import caroselImg1 from "../../assets/images/Hsu-Changing.webp";
import caroselImg2 from "../../assets/images/l-intro-1643997465.jpg";
import caroselImg3 from "../../assets/images/Chilli-Garlic-Noodles-Veg.jpg";
import caroselImg4 from "../../assets/images/best-chinese-restaurants-lagos.webp";
import image from "../../assets/images/Honey-Garlic-Asian-Chicken-KabobsIMG_9960.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ChefDetailsCard from "./chefDetailsCard/ChefDetailsCard";
import Recipes from "./TodayRecipes/Recipes";

const Home = () => {
  const chefDetails = useLoaderData();
  return (
    <>
      <div
        className="hero items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content gap-32">
          <div className="mx-10">
            <h1 className="mb-8 text-5xl font-bold font-serif">
              tasty chinese dishes
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn rounded-full bg-amber-500 border-0">
              BOOK A TABLE
            </button>
          </div>
          <div>
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full mt-14">
                <img src={caroselImg1} className="w-96 h-72" />
              </div>
              <div id="item2" className="carousel-item w-full mt-14">
                <img src={caroselImg2} className="w-96 h-72" />
              </div>
              <div id="item3" className="carousel-item w-full mt-14">
                <img src={caroselImg3} className="w-96 h-72" />
              </div>
              <div id="item4" className="carousel-item w-full mt-14">
                <img src={caroselImg4} className="w-96 h-72" />
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
        {/* banner & carosel section close */}
      </div>

      <div className="lg:flex items-center justify-center mt-16 mx-10 gap-20">
        <div className="py-4">
          <img className="w-80 h-72 rounded-full" src={image} alt="" />
        </div>

        <div className="py-12 w-80">
          <h1 className="text-4xl font-bold font-serif">
            chinese chicken kabobs
          </h1>
          <p className="mt-5 font-semibold">
            Here’s an easy Chinese chicken on a stick recipe that’s perfect for
            entertaining. These Chinese chicken skewers are quick, and packed
            full of Asian flavors. The air fryer cooks meats to perfection you
            will love how these turn out in just 15 mins. Let me show you
            exactly how to make these mouth watering air fryer appetizers in
            easy steps.
          </p>
          <Link to="/kabobs">
            <button className="btn rounded-full bg-amber-500 border-0 mt-10">
              LEARN MORE <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="min-h-screen text-center mt-5"
        style={{ backgroundImage: `url(${chefBg})` }}
      >
        <div className="mt-10">
          <p className="text-white">Expert & professional</p>
          <h1 className="text-white text-4xl font-bold">Top chef's recipes</h1>
        </div>

        <div className="grid lg:grid-cols-3 mt-10">
          {chefDetails.map((chefDetail) => (
            <ChefDetailsCard
              key={chefDetail.id}
              chefDetail={chefDetail}
            ></ChefDetailsCard>
          ))}
        </div>
        <div>
          <h2 className="text-warning font-bold">
            Waiting for your call: (542) 548 6254
          </h2>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-10 text-4xl font-bold">Today recipes</h1>
        {<Recipes />}
      </div>
      <div className="w-96 mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-5">
          Special Offers <span className="text-amber-500">For Subscribers</span>
        </h2>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="enter email"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
