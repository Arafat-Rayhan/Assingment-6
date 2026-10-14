import {getDataId} from '@/component/cardData/cData';
import { PlainData } from '@/type/type'; 
import DetailCard from '@/component/card/DetailCard';

export const instant = false;
interface ParamsInfo{
    params:Promise<{id:string;}>
}

const Deteail = async ({params}:ParamsInfo) => {
    const {id} = await params;
    const card:PlainData = await getDataId({id:id});
    

    

    return (
        <div>
            <DetailCard card={card}  />
             
        </div>
    );
};
    


export default Deteail;