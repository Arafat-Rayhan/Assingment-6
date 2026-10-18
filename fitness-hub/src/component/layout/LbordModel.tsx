import Image from 'next/image';
import { PlainData } from '@/type/type';
import Link from 'next/link'
import DeleteBtn from '@/component/btn/DeleteBtn'
import { toast } from 'sonner';

type Props={
    remove:(id:number)=>void;
    card:PlainData
}
const LbordModel = ({card,remove}:Props) => {
    const totoster=()=>{
         toast.success(" marks the workout done")
    }
    return (
        <div className='w-[1200px] h-[160px] rounded-[20px] p-[16px] flex justify-between items-center  bg-[#232732] '>
            <div className='flex justify-between gap-[12px]'>
                {/*left */}
                <Image
                src={card.image}
                width={145}
                height={80}
                alt={card.name}
                className='rounded-[15px]'
                >
                </Image>

                <div className='flex flex-col justify-between '>
                    <h2 className='font-bold text-base'>{card.name}</h2>
                    <h4 className='font-normal text-xs text-[#8A92A0]   '>{card.equipment}</h4>
                    <div className='flex justify-between  text-[#8A92A0] '>
                        <span>◷{card.duration}</span>
                        <span>●{card.caloriesBurned}</span>
                        <span>☆{card.duration}</span>
                    </div>
                </div>

            </div>
            <div className='w-[290px] h-[35px]  flex justify-center items-center gap-[12px]'>
                {/* right btn  link with id */}
                 <Link href={`/${card.id}`} className='border border-solid border-green rounded-[9999px] W-[108px] h-[35px] flex justify-center items-center'>View Deteails</Link> 
                 <div className='w-[130px] h-[32px] bg-[#CCFF00] text-black border border-solid border-green rounded-[9999px] flex justify-center items-center'>
                        <span>✓</span>
                    
                    <button onClick={totoster}>Mark as Done</button>
                 </div>
                 <DeleteBtn removeThis={()=>remove(card.id)} />
                 {/* delete btn */}
            </div>
        </div>
    );
};

export default LbordModel;