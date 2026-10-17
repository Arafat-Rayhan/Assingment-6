
import { PlainData } from "@/type/type";
import LbordModel from '../layout/LbordModel';

export const SetDataToToday = ({ plans }: { plans: PlainData[] }) => {
    return (
        <div className="grid gap-4">
            {plans.length > 0
                ? plans.map((item) => <LbordModel key={item.id} card={item} />)
                : <p className="text-gray-400">No activities for today yet.</p>}
        </div>
    );
};

// go ListBored

export const SetDataToSeved = ({ plans }: { plans: PlainData[] }) => {
    return (
    <div className="grid gap-4">
        {plans.length > 0
            ? plans.map((item) => <LbordModel key={item.id} card={item} />)
            : <p className="text-gray-400">No saved plans yet.</p>}
    </div>
    );
};

// go ListBored