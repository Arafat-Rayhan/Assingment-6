
import { usePlans } from "@/context/cartContext";
import LbordModel from '../layout/LbordModel';

export const SetDataToToday = () => {
    const { todayP } = usePlans();

    return (
        <div className="grid gap-4">
            {todayP.length > 0
                ? todayP.map((item) => <LbordModel key={item.id} card={item} />)
                : <p className="text-gray-400">No activities for today yet.</p>}
        </div>
    );
};





export const SetDataToSeved = () => {
    const { seved } = usePlans();

   return(
    <div className="grid gap-4">
        {seved.length > 0
            ? seved.map((item) => <LbordModel key={item.id} card={item} />)
            : <p className="text-gray-400">No saved plans yet.</p>}
    </div>
       
   )
}