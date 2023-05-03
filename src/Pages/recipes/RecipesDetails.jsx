/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaArrowLeft,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import Rating from "react-rating";
import { Toaster, toast } from "react-hot-toast";

const notify = () => toast('Thanks for love!', {
  icon: '👏',
});

const RecipesDetails = ({ chefDetail }) => {
  const recipesInfo = useLoaderData();
  console.log(recipesInfo);
  const { id, name, chef_bio, chef_image, likes, experience, recipes } =
    recipesInfo;
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-10 mb-20 mt-10">
      <figure>
        <img className="lg:h-full" src={chef_image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{chef_bio}</p>
        <p>{experience}</p>
        <p className="flex gap-4 text-amber-500">
          <FaThumbsUp />
          {likes}k
        </p>
        <div>
          <h2 className="text-xl font-serif">Top 3 recipes</h2>
          {recipes.map((recipe) => (
            <div key={id}>
              <div>
                <h2 className="font-bold">{recipe.name1}</h2>
                <p>{recipe.cooking_method1}</p>
              </div>
              <h2 className="font-bold">{recipe.name2}</h2>
              <p>{recipe.cooking_method2}</p>
              <h2 className="font-bold">{recipe.name3}</h2>
              <p>{recipe.cooking_method3}</p>
              <Rating
                placeholderRating={recipe.rating1}
                readonly
                emptySymbol={<FaRegStar className="text-warning" />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar className="text-warning" />}
              />
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <div>
          <button onClick={notify}><FaRegHeart className="text-4xl me-10 text-red-400"/></button>
          <Toaster/>
          </div>
          <Link to="/">
            <button className="btn bg-amber-500 border-0 hover:bg-amber-600">
              <FaArrowLeft />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
