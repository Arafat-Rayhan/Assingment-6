"use client"
import {useContext} from 'react'
import {PlanContext} from '@/context/cartContext'

const Counterbord = () => {
    const numOfCotext= useContext(PlanContext)

    if(!numOfCotext){
        throw new Error("error")
    }

    const { addMunite,addKcal,cardNo} = numOfCotext 

    return (
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 rounded-2xl border border-white/20 bg-[#15171c] p-5 text-white sm:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-medium text-gray-400">Exercises</h2>
            <span className="mt-2 block text-3xl font-bold">{cardNo}</span>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-medium text-gray-400">Minutes</h2>
            <span className="mt-2 block text-3xl font-bold">{addMunite}</span>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-medium text-gray-400">Calories</h2>
            <span className="mt-2 block text-3xl font-bold">{addKcal}</span>
            </div>
        </div>
    );
};

export default Counterbord;































