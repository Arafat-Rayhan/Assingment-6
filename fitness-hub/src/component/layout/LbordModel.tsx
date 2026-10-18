import Image from 'next/image';
import { PlainData } from '@/type/type';
import Link from 'next/link'
import DeleteBtn from '@/component/btn/DeleteBtn'

type Props={
    remove:(id:number)=>void;
    card:PlainData
}
const LbordModel = ({card,remove}:Props) => {

    return (
        <div className='w-[1200px] h-[150px] rounded-[20px] p-[16px] gap-[12px] flex justify-between  bg-[#232732]'>
            <div className='flex justify-between'>
                {/*left */}
                <Image
                src={card.image}
                width={145}
                height={80}
                alt={card.name}
                className='rounded-[15px]'
                >
                </Image>

                <div className='h-full grid grid-cols-1 gap-[12px]'>
                    <h2>{card.name}</h2>
                    <h4>{card.equipment}</h4>
                    <div className='flex justify-between'>
                        <span>{card.duration}</span>
                        <span>{card.caloriesBurned}</span>
                        <span>{card.duration}</span>
                    </div>
                </div>

            </div>
            <div className='w-[115px] h-[35px] border border-solid border-green rounded-[9999px] flex justify-center items-center'>
                {/* right btn  link with id */}
                 <Link href={`/${card.id}`}>View Deteails</Link>
                 <DeleteBtn removeThis={()=>remove(card.id)} />
                 {/* delete btn */}
            </div>
        </div>
    );
};

export default LbordModel;