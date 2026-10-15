"use client";
import {PlanContext} from '@/context/cartContext';
import Link from 'next/link'
import {PlainData} from '@/type/type'
import {useContext} from 'react'
const SaveBtn = ({plan,min,kcal} :{plan:PlainData,min:number,kcal:number}) => {
    const context =useContext(PlanContext);

    if (!context) {
  throw new Error("error");
}
    
   const {  setTodayP} = context;
    const { setAddMunit} =context;
    const { setAddKcal} =context;


const hendelP =()=>{
    setTodayP(prevent=> [...prevent,plan]);
    setAddMunit(pre => pre+min);
    setAddKcal(pre => pre+kcal);
}

    return (
        <div className='w-[300px] h-[50px] bg-green-500 text-center text-4xl text-extrabold rounded-[40px]'>

            <Link href="/My-plan" onClick={()=>hendelP()}>Save</Link>
        </div>
    );
};

export default SaveBtn;