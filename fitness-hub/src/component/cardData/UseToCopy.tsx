import PlanButton from "../btn/PlanBtn";
import { PlainData } from "@/type/type";

const UseToCopy = ({card,min,kcal}:{card:PlainData,min:number,kcal:number}) => {
    return <PlanButton plan={card} min={min} kcal={kcal} />;
};

export default UseToCopy;