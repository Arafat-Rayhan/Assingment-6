"use client";
import {PlanContext} from '@/context/cartContext';
import React from 'react';
import {PlainData} from '@/type/type'
import {useContext} from 'react'
const PlanBtn = ({plan,min,kcal} :{plan:PlainData}) => {
    const context =useContext(PlanContext);

    if (!context) {
  throw new Error("error");
}
    
   const { seved,setSeved} = context;
    const { addMunite,setAddMunit} =context;
    const { addKcal,setAddKcal} =context;


const hendelS =()=>{
    setSeved(prevent=> [...prevent,plan]);
    setAddMunit(pre => pre+min);
    setAddKcal(pre => pre+kcal);
}

    return (
         <button type='button' onClick={()=>hendelS()}></button>
    );
};

export default PlanBtn;