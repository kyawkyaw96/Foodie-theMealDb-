import { data } from 'autoprefixer';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './Loader/Loading';

const Details = () => {
  const {id}=useParams();
  const [isLoader,setIsLoader] =useState(true);
  const [meal,setMeals]=useState({});
  console.log(id);
  const getSingleMeal= async ()=>{
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    // console.log(data.meals[0]);
    setMeals(data.meals[0]);
    setIsLoader(false)
  };
  useEffect(() =>{
    getSingleMeal();
  },[])
  return (
   <>
   {isLoader ? <Loading/> :(
     <div className='flex flex-col gap-5 my-8'>
     <img src={meal.strMealThumb} width={"400px"} className="shadow-lg rounded-lg" alt="" />
     <h1 className=' text-sm text-white bg-pink-500 w-20 text-center rounded-lg '> {meal.strCategory}</h1>
     <h1 className=' text-2xl'> Name : {meal.strMeal}</h1>
     <h1 className=' text-2xl'>National : {meal.strArea}</h1>
     <div className=''><span className=' text-2xl'>Instruction</span> : <span className=' text-gray-500 tracking-wider leading-6'>{meal.strInstructions}</span></div>
     <div className=' flex items-center gap-3'>
       <a href={meal.strYoutube} target='__blank' className='text-red-500 text-4xl'><AiFillYoutube/></a>
       <p className=' text-sm text-gray-500'>watch on youtube </p>
     </div>
   </div>
   )}
   </>
  )
}

export default Details