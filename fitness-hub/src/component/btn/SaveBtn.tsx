"use client";
import {PlanContext} from '@/context/cartContext';
import React from 'react';
import {PlainData} from '@/type/type'
import {useContext} from 'react'
const SaveBtn = ({plan,min,kcal} :{plan:PlainData}) => {
    const context =useContext(PlanContext);

    if (!context) {
  throw new Error("error");
}
    
   const {  todayP,setTodayP} = context;
    const { addMunite,setAddMunit} =context;
    const { addKcal,setAddKcal} =context;


const hendelP =()=>{
    setTodayP(prevent=> [...prevent,plan]);
    setAddMunit(pre => pre+min);
    setAddKcal(pre => pre+kcal);
}

    return (
         <button type='button' onClick={()=>hendelP()}></button>
    );
};

export default SaveBtn;