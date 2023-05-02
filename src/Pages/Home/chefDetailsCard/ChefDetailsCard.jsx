/* eslint-disable react/prop-types */
import React from "react";
import { FaHandPointRight, FaRegThumbsUp } from "react-icons/fa";

const ChefDetailsCard = ({ chefDetail }) => {
  const { name, chef_bio, chef_image, likes, experience, recipes } = chefDetail;
  return (
    <>
    <div className="mb-10">
      <div className="card w-72 mx-auto text-left bg-base-100 shadow-xl">
        <figure>
          <img className="w-72 h-56"
            src={chef_image}
            alt="chefImg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{chef_bio.slice(0,100)}...</p>
          <p>{experience}</p>
          <p className="flex ml-2 gap-2"><FaRegThumbsUp/>{likes}</p>
          <button className="btn btn-warning">View Recipes <FaHandPointRight className="text-xl ml-2"/></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChefDetailsCard;
