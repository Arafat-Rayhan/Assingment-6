"use client"
import { useState } from "react";

type SortBy="Duration"|"Calories"|"Rating"
type props={
    sortBy:SortBy;
    setSortBy:(value:SortBy)=> void
}
 
const SortMenu = ({sortBy,setSortBy}:props) => {
    
    const [open,setOpen]=useState(false)

       return (
  <div>
    <button onClick={() => setOpen(!open)}>
      <span className="w-[150px] h-[35px] rounded-[20px] border border-solid border-red-500 ">
      Sort by: {sortBy}
      </span>
    </button>

    {open && (
      <div className="flex w-[300px] flex justify-between  gap-5">
        <button onClick={() => { setOpen(false); setSortBy("Calories"); }}>
          Calories
        </button>

        <button onClick={() => { setOpen(false); setSortBy("Duration"); }}>
          Duration
        </button>

        <button onClick={() => { setOpen(false); setSortBy("Rating"); }}>
          Rating
        </button>
      </div>
    )}
  </div>

    );
};
// go ListBord
export default SortMenu;