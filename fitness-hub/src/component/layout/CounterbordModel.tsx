

type Count={
    cardNo:number;
    addMunite:number;
    addkcal:number;
}

 

const CounterbordModel = ({cardNo,addMunite,addkcal}:Count)=> {
     

    return (
        <div className="flex justify-between  w-[1200px] h-[160px] rounded-[20px] px-[100px] gap-4   border border-white/20 bg-[#15171c] p-5 text-white sm:grid-cols-3">
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
            <span className="mt-2 block text-3xl font-bold">{addkcal}</span>
            </div>
        </div>
    );
};

export default CounterbordModel;































