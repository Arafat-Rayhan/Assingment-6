"use client"
import React, { useState,useEffect } from 'react';
import { PlainData } from '@/type/type';
import { getDataALL } from "../cardData/cData";
const SortMenu = () => {
    
    const [open,setOpen]=useState(false)
    
    const [sortBy,setSortBy]=useState<"Duration"|"Calories"|"Rating">("Rating")
    
    const[data,setData]=useState<PlainData[]>([])

    useEffect(()=>{
        const fetchData =async()=>{
            const plans= await getDataALL()
            setData(plans)
        };
        fetchData()
    },[])


    if(!data){
        throw new Error("error");
        
    }

    const sortedPlan= [...data].sort((a,b)=>{
        if(sortBy==="Duration"){
            return a.duration-b.duration
        }
        if(sortBy==="Calories"){
            return a.caloriesBurned-b.caloriesBurned
        }
            return Number(a.rating)- Number(b.rating)
        
    })

    return (
        <div>
            <button onClick={()=>setOpen(!open)}>Sort by</button>

            {
                open &&(
                    <div>
                        <button onClick={()=>{setSortBy("Calories"); setOpen(false)}}>Calories</button>
                        <button onClick={()=>{setSortBy("Duration"); setOpen(false)}}>Duration</button>
                        <button onClick={()=>{setSortBy("Rating"); setOpen(false)}}>Rating</button>
                    </div>
                )
            }
            
        </div>
    );
};

export default SortMenu;