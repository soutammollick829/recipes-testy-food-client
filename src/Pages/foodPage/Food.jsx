import React from 'react';
import recipesImg1 from '../../assets/images/Honey-Garlic-Asian-Chicken-KabobsIMG_9960.jpg'
import recipesImg2 from '../../assets/images/Hsu-Changing.webp'
import recipesImg3 from '../../assets/images/l-intro-1643997465.jpg'


const Food = () => {
    return (
        <div className='lg:flex mx-10 justify-around mt-20 mb-20'>
    <div className="card w-72 lg:w-60 bg-base-100 shadow-xl">
      <figure>
        <img className='h-60 w-full'
          src={recipesImg1}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        Mapo Tofu
          <div className="badge badge-secondary">Order</div>
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, natus.</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    <div className="card w-72 lg:w-60 bg-base-100 shadow-xl">
      <figure>
        <img className='h-60 w-full'
          src={recipesImg2}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         Chawmin lodus
          <div className="badge badge-secondary">Order</div>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, beatae!</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    <div className="card w-72 lg:w-60 bg-base-100 shadow-xl">
      <figure>
        <img className='h-60 w-full'
          src={recipesImg3}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        Duck meet
          <div className="badge badge-secondary">Order</div>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
    </div>
    );
};

export default Food;