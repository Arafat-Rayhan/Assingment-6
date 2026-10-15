import React from 'react';
import Image from 'next/image'
import {PlainData} from '@/type/type'
import LinkToGo from '../btn/LinkToGo';



 
const Card = ({card}:{card:PlainData}) => {
    


    


  return (
    <>
    <div className="w-[396px] max-w-sm overflow-hidden rounded-[16px] bg-[#15171c] 
    text-white  ">
        

      {/* Image */}
      <Image
        src={card.image}
        alt={card.name}
        width={400}
        height={400}
        className="h-40 w-full object-cover"
      />
        <LinkToGo card={card}>
      {/* Card Content */}
      <div className="p-[24px]">

        {/* Tags */}
        <div className="mb-3 flex gap-2">
          <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
            {card.muscleGroups[0]}
          </span>

          <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
            {card.muscleGroups[1]}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold">
          {card.name}
        </h2>

        {/* Type */}
        <p className="mt-1 text-sm text-gray-500">
           {card.equipment}
        </p>
             ☆ 4.8
        {/* Bottom information */}
        <div className="mt-5 flex gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
          <span>◷ {card.duration} min</span>
          <span>● {card.caloriesBurned} kcal</span>
          <span>☆ {card.rating}</span>
        </div>

      </div>
            
        </LinkToGo>
    </div>
        </>
  )
};


export default Card;