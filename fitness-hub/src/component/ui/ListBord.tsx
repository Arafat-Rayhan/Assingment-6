"use client";

import { useState } from "react";

import { usePlans } from "@/context/cartContext";
import { SetDataToSeved, SetDataToToday } from "./SetDataToBord";
import CounterbordModel from '@/component/layout/CounterbordModel' 
import SortMenu from "./SortMenu";
// sortPanal is sorting function
import { SortBy, sortPlans } from "./sortingData";
// all file here
const ListBord = () => {
    const {
      todayP,
      seved,
      removeTodayPlan,
      removeSavedPlan,
    } = usePlans()
    


  const [active, setActive] = useState<"Today" | "Saved">("Today");

//   sortBy state
  const [sortBy, setSortBy] = useState<SortBy>("Duration");

//   sorting data
  const sortedTodayPlans = sortPlans(todayP, sortBy);
  const sortedSavedPlans = sortPlans(seved, sortBy);

  const todayCount = todayP.length;
  const todayDuration = todayP.reduce((sum, plan) => sum + plan.duration, 0);
  const todayCalories = todayP.reduce((sum, plan) => sum + plan.caloriesBurned, 0);

  const savedCount = seved.length;
  const savedDuration = seved.reduce((sum, plan) => sum + plan.duration, 0);
  const savedCalories = seved.reduce((sum, plan) => sum + plan.caloriesBurned, 0);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      {active === "Today"
      ? <CounterbordModel cardNo={todayCount} addMunite={todayDuration} addkcal={todayCalories}/> 
      :<CounterbordModel cardNo={savedCount} addMunite={savedDuration} addkcal={savedCalories}/>  
 

}
      <SortMenu sortBy={sortBy} setSortBy={setSortBy} />
      <div className="mb-6 flex gap-3" role="tablist" aria-label="Plan lists">
        <button
          type="button"
          role="tab"
          aria-selected={active === "Today"}
          onClick={() => setActive("Today")}
          className={`rounded-full px-5 py-2 font-semibold ${
            active === "Today" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Today's plan
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "Saved"}
          onClick={() => setActive("Saved")}
          className={`rounded-full px-5 py-2 font-semibold ${
            active === "Saved" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Saved 
        </button>
      </div>

      {active === "Today"
        ? <SetDataToToday plans={sortedTodayPlans} onRemove={removeTodayPlan} />
        : <SetDataToSeved plans={sortedSavedPlans} onRemove={removeSavedPlan} />
      }
    </section>
  );
};

export default ListBord;