import React from "react";
import Meals from "./Meals";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div className=' w-36 lg:w-60 relative border-2 border-gray-200 gap-2 rounded-lg flex flex-col p-2 lg:p-5 items-center justify-center h-[250px] lg:h-[350px] shadow-lg hover:shadow-xl hover:scale-105 transition-all hover:duration-300 my-2'>
      <img
        src={meal?.strMealThumb}
        alt=''
        width='200px'
        className='  rounded-lg'
      />
      <h3 className=' p-0'>{(meal?.strMeal).substring(0, 13)}...</h3>
      <div className=' absolute bottom-2'>
        <Link to={`/detail/${meal.idMeal}`}>
          <button className='  text-white rounded-lg bg-pink-500 px-6 py-1'>
            <AiFillEye />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
