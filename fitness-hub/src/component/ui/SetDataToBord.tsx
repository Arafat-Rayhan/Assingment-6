
import { PlainData } from "@/type/type";
import LbordModel from '../layout/LbordModel';
import EmptyLayout from '@/component/layout/EmptyLayout'
 

type PlanListProps = {
    plans: PlainData[];
    onRemove: (id: number) => void;
};

export const SetDataToToday = ({ plans, onRemove }: PlanListProps) => {
    return (
        <div className="grid gap-4">
            {plans.length > 0
                ? plans.map((item) => <LbordModel key={item.id} card={item} remove={onRemove} />)
                : <EmptyLayout />}
        </div>
    );
};

// go ListBored

export const SetDataToSeved = ({ plans, onRemove }: PlanListProps) => {
    return (
    <div className="grid gap-4">
        {plans.length > 0
            ? plans.map((item) => <LbordModel key={item.id} card={item} remove={onRemove} />)
            // here a contaner
            : <EmptyLayout /> }
    </div>
    );
};

// go ListBored