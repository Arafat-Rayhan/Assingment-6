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
      Sort by: {sortBy}
    </button>

    {open && (
      <div className="flex justify-start gap-[8px]">
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