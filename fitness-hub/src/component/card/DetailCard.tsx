import Image from 'next/image'
import {PlainData} from '@/type/type';
import Plan from '@/component/btn/PlanBtn';
import Save from '@/component/btn/SaveBtn'




const DetailCard = ({card}:{card:PlainData}) => {
    const num:number =0;
    return (
        <div className='w-[1300px] mx-auto pb-[40px] grid grid-cols-1  ' >


                <div className=' flex gap-[29px]' >
                    <Image
                    src={card.image}
                    width={600}
                    height={100} 
                    alt={card.name}
                    className='w-[500px] h-[850px] rounded-[50px]'
                    >

                    </Image>
                    {/* hading */}
                    <div className='flex flex-col items-center gap-[10px]'>
                                <h2 className='text-6xl font-extrabold'>
                                    {card.name}

                                </h2>
                                <p className='text-2xl font-bolt text-center'>
                                    {card.description}
                                </p>
                 
                                <div className='flex justify-start gap-[20px] text-normal font-extrabold text-black'>
                                    {card.muscleGroups.map((tag)=> <span key={tag}  className='w-[40px] h-[35px] bg-[#AEEFEB] rounded-[100px]'>{tag} </span>)}
                                     
                                </div>
                            {/* table */}

                            <div className='bg-[#524747] rounded-[50px] w-full text-xl font-medium h-auto px-[50px]'>
                                <div className=' grid grid-cols-2  border-b border-[#666161] p-3     ' >
                                <span>EQUPMENT</span>
                                <span>{card.equipment}</span>
                                </div>

                                <div className=' grid grid-cols-2 border-b border-[#666161] p-3    '>
                                <span>DIFFICULTY</span>
                                <span>{card.difficulty}</span>
                                </div>

                                <div className=' grid grid-cols-2 border-b border-[#666161] p-3    ' >
                                <span>SETS</span>
                                <span>{card.sets}</span>
                                </div>

                                <div className=' grid grid-cols-2 border-b border-[#666161] p-3    ' >  
                                <span>REPS</span>
                                <span>{card.reps}</span>
                                </div>

                                <div className=' grid grid-cols-2 border-b border-[#666161] p-3    ' >
                                <span>DURATION</span>
                                <span>{card.duration}</span>
                                        </div>

                                <div className=' grid grid-cols-2 border-b border-[#666161] p-3    ' >
                                <span>CALIRIES</span>
                                <span>{card.caloriesBurned}</span>
                                </div>

                                <div className=' grid grid-cols-2 justify-between  p-3 ' >
                                <span>RATING</span>
                                <span>{card.caloriesBurned}</span>
                                </div>
                            </div>
                                <h1 className='text-3xl font-bold'>INSRUCTION</h1>
                            <div className='text-xl font-bold'>
                             {card.instructions.map((ins,num)=>(<p key={ins}>{num+1}: {ins}</p>))}
                            </div>

                            {/* btn */}

                            <div className='flex gap-[20px] mt-[20px]'>
                            <Plan plan={card} min={card.sets} kcal={card.caloriesBurned} />
                            <Save plan={card} min={card.sets} kcal={card.caloriesBurned} />
                            </div>

                    </div>
                    
                </div>
                 
        
             

        </div>
    );
};

export default DetailCard;