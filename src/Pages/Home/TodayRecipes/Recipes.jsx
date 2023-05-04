import recipesImg1 from '../../../assets/images/best-chinese-restaurants-lagos.webp'
import recipesImg2 from '../../../assets/images/Chilli-Garlic-Noodles-Veg.jpg'
import recipesImg3 from '../../../assets/images/Hsu-Changing.webp'

const Recipes = () => {
  return (
    <div className='lg:flex mx-10 justify-around mt-20 mb-20'>
    <div className="card w-72 lg:w-60 bg-base-100 shadow-xl">
      <figure>
        <img
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
        <img className='h-36'
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
        <img className='h-36 w-full'
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

export default Recipes;
