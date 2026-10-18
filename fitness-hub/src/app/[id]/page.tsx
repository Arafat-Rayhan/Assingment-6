import {getDataId} from '@/component/cardData/cData';
import { PlainData } from '@/type/type'; 
import DetailCard from '@/component/card/DetailCard';
import  {notFound}  from 'next/navigation';


export const instant = false;
interface ParamsInfo{
    params:Promise<{id:string;}>
}

const Deteail = async ({params}:ParamsInfo) => {
    const {id} = await params;
    const card:PlainData | null = await getDataId({id:id});
    
    if(!card){
        notFound()
    }
    

    return (
        <div>
            <DetailCard card={card}  />
             
        </div>
    );
};
    


export default Deteail;