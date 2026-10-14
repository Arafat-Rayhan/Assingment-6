"use client"
import React from 'react';
import {createContext,useState,ReactNode} from 'react'
import  {PlainData} from '@/type/type'

interface Plaincontext {
   addMunite:number,
   setAddMunit:React.Dispatch<React.SetStateAction <number>>
   addKcal:number,
   setAddKcal:React.Dispatch<React.SetStateAction <number>>
   todayP:PlainData[],
   setTodayP:React.Dispatch<React.SetStateAction <PlainData[]>>,
    seved:PlainData[],
    setSeved:React.Dispatch<React.SetStateAction <PlainData[]>>,
}
     export const PlanContext =createContext<Plaincontext|null >(null)

   
    const PlainProvider =({children}:{children:ReactNode})=>{
        const [seved,setSeved] = useState<PlainData[]>([])
        const [todayP,setTodayP]=useState<PlainData[]>([])
        const [addKcal,setAddKcal]= useState(0);
        const [addMunite,setAddMunit] =useState(0);

        const shareState:Plaincontext ={
            addMunite,
            setAddMunit,
            addKcal,
            setAddKcal,
            todayP,
            setTodayP,
            seved,
            setSeved,
        }

         return (
        <div>
            <PlanContext.Provider value={shareState}>{children}</PlanContext.Provider>
        </div>
    );
    }

export default PlainProvider;