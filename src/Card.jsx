import React from 'react'
import Meals from './Meals'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-60 relative border-2 border-pink-500 gap-2 rounded-lg flex flex-col p-5 items-center justify-center h-[350px] shadow-lg hover:shadow-xl hover:scale-105 hover:duration-300 my-2'>
        <img src={meal.strMealThumb} alt="" width="200px" className=' rounded-lg'/>
        <h3>{meal.strMeal}</h3>
        <button className=' absolute bottom-2 text-white rounded-lg bg-blue-500 px-6 py-1'>
          <Link to={`/detail/${meal.idMeal}`}><AiFillEye /></Link>
        </button>
    </div>
  )
}

export default Card