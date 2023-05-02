import React from "react";
import image from "../../assets/images/Honey-Garlic-Asian-Chicken-KabobsIMG_9960.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Kabobs = () => {
  return (
    <div className="card mx-16 mt-10 mb-32 card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={image} alt="Movie" />
      </figure>
      <div className="card-body w-60">
        <h2 className="card-title text-2xl">Chinese Chicken Kabobs</h2>
        <p>
          Mix together all ingredients except for the chicken in a medium bowl
          and transfer the mixture to a gallon-size resealable freezer bag. Add
          the chicken and seal the bag. Shake and manipulate the bag until all
          of the chicken is coated with the marinade mixture. Refrigerate
          overnight. Soak 5 to 6 long wooden skewers in water for at least 45
          minutes. This will prevent them from burning on the grill. Run each
          skewer through pieces of chicken until the skewer is 3/4 full of
          chicken. Discard the marinade. Place the chicken kabobs on a grill
          over medium heat. Cook until chicken is done, turning it once. This
          takes about 10 to 15 minutes. Test chicken by pulling one piece of
          chicken off of a skewer and breaking it apart. Serve immediately.
          Refrigerate leftovers in an airtight container for up to 3 days.
        </p>
        <div className="card-actions justify-end">
          <Link to='/'>
            <button className="btn bg-amber-500 border-0">
              <FaArrowLeft className="me-2" />
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kabobs;
