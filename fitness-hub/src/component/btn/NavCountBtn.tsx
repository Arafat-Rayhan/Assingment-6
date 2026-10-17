"use client"
import { PlanContext } from "@/context/cartContext";
import { useContext,} from "react";
import Link from 'next/link'

const NavCountBtn = () => {
    const data =useContext(PlanContext)
    if(!data){
        throw new Error("error");
        
    }
    const { addMunite,addKcal,}=data
    return (
        <div className="flex justify-between"> 
            <span  className="flex justify-between">
            <div className="w-[20px] rounded-[100%] bg-green-500 flex justify-center items-center">{addMunite}</div>
            <Link href='/My-plan'>Plan</Link>
            </span>
            <span  className="flex justify-between">
            <div>{addKcal}</div>
            <Link href='/My-plan'>Seved</Link>
            </span>
           
        </div>
    );
};

export default NavCountBtn;