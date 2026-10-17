"use client"
import {createContext,useState,useContext, ReactNode} from 'react'
import  {PlainData} from '@/type/type'

type Plancontext = {
  addMunite: number;
  addKcal: number;
  todayP: PlainData[];
  seved: PlainData[];
  cardNo: number;
  todayPP: (card: PlainData, min: number, kcal: number) => void;
  seveP: (card: PlainData, min: number, kcal: number) => void;
};

export const PlanContext = createContext<Plancontext | null>(null);

export const PlainProvider = ({ children }: { children: ReactNode }) => {
  const [seved, setSeved] = useState<PlainData[]>([]);
  const [todayP, setTodayP] = useState<PlainData[]>([]);
  const [addKcal, setAddKcal] = useState(0);
  const [addMunite, setAddMunit] = useState(0);
  const [cardNo, setCardNo] = useState(0);

  const seveP = (card: PlainData, min: number, kcal: number) => {
    if (seved.some((item) => item.id === card.id)) return;

    setSeved((previous) => [...previous, card]);
    setAddMunit((previous) => previous + min);
    setAddKcal((previous) => previous + kcal);
    setCardNo((previous) => previous + 1);
  };

  const todayPP = (card: PlainData, min: number, kcal: number) => {
    if (todayP.some((item) => item.id === card.id)) return;

    setTodayP((previous) => [...previous, card]);
    setAddMunit((previous) => previous + min);
    setAddKcal((previous) => previous + kcal);
    setCardNo((previous) => previous + 1);
  };

  const shareState: Plancontext = {
    addMunite,
    addKcal,
    todayP,
    seved,
    cardNo,
    todayPP,
    seveP,
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
