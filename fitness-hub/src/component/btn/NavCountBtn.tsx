"use client"

import { usePlans } from "@/context/cartContext";
import Link from 'next/link'

const NavCountBtn = () => {
    const { todayP,seved}=usePlans()
    const countTodayPalan =todayP.length;
    const countSeved=seved.length

    return (
        <div className="flex justify-between w-[140px]"> 
            <span  className="flex justify-between gap-[5px]">
            <Link href='/My-plan'>Plan</Link>
            <div className="w-[20px] rounded-[100%] bg-green-500 flex justify-center items-center">{countTodayPalan}</div>
            </span>


            <span  className="flex justify-between gap-[5px]">
            <Link href='/My-plan'>Seved</Link>
            <div className="w-[20px] rounded-[100%] border border-solid border-green flex justify-center items-center">{countSeved}</div>
            </span>
           
        </div>
    );
};

export default NavCountBtn;