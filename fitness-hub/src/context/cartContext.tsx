"use client"
import {createContext,useState,useContext, ReactNode} from 'react'
import  {PlainData} from '@/type/type'
import{toast} from 'sonner'

type Plancontext = {
  
  todayP: PlainData[];
  seved: PlainData[];
  todayPP: (card: PlainData) => void;
  seveP: (card: PlainData) => void;
  removeTodayPlan: (id: number) => void;
  removeSavedPlan: (id: number) => void;
};

export const PlanContext = createContext<Plancontext | null>(null);

export const PlainProvider = ({ children }: { children: ReactNode }) => {
  const [seved, setSeved] = useState<PlainData[]>([]);
  const [todayP, setTodayP] = useState<PlainData[]>([]);
  
  const seveP = (card: PlainData,) => {
    if (seved.some((item) => item.id === card.id)){
         toast("already seved")
    }
      else{
    setSeved((previous) => [...previous, card]);
    toast.success("Added for later")
    }

    
  };

  const todayPP = (card: PlainData,) => {
    if (todayP.some((item) => item.id === card.id)){
      toast("already seved")
    }else{
// alrady ok
      setTodayP((previous) => [...previous, card]);
      toast.success("Added to today's plan")
    }
    
    
  };

  const removeTodayPlan = (id: number) => {
    setTodayP((previous) => previous.filter((card) => card.id !== id));
    
  };

  const removeSavedPlan = (id: number) => {
    setSeved((previous) => previous.filter((card) => card.id !== id));
  };

  const shareState: Plancontext = {
    
  
    todayP,
    seved,

    todayPP,
    seveP,
    removeTodayPlan,
    removeSavedPlan,
  };

  return (
    <PlanContext.Provider value={shareState}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlans = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlans must be used within PlainProvider");
  }
  return context;
};
