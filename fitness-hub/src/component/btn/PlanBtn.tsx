"use client";
import {PlanContext} from '@/context/cartContext';
import React from 'react';
import {PlainData} from '@/type/type'
import {useContext} from 'react'
import Link from 'next/link'
const PlanBtn = ({plan,min,kcal} :{plan:PlainData,min:number,kcal:number}) => {
    const context =useContext(PlanContext);

    if (!context) {
  throw new Error("error");}
    
   const { setSeved} = context;
    const { setAddMunit} =context;
    const { setAddKcal} =context;


const hendelS =()=>{
    setSeved(prevent=> [...prevent,plan]);
    setAddMunit(pre => pre+min);
    setAddKcal(pre => pre+kcal);
}

    return (
        <div className='w-[300px] h-[50px] bg-red-500 text-center text-4xl text-extrabold rounded-[40px]'>
            <Link href="/My-plan" onClick={()=>hendelS()} >plan</Link>
        </div>
    );
}

export default PlanBtn;