import { PlainData } from "@/type/type";

export type SortBy = "Duration" | "Calories" | "Rating";

export const sortPlans = (plans: PlainData[], sortBy: SortBy): PlainData[] => {
  return [...plans].sort((a, b) => {
   if(sortBy==="Duration"){
                return a.duration-b.duration
            }
            if(sortBy==="Calories"){
                return a.caloriesBurned-b.caloriesBurned
            }
             
                return Number(a.rating)- Number(b.rating)
            
        })
         
        
    };

    // go ListBrod
  

