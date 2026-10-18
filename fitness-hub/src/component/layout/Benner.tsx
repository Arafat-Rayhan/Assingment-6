import Image from 'next/image'
// mx-auto flex w-full max-w-[1235px] flex-col justify-between gap-8 p-[56px] md:h-[450px] md:flex-row md:items-center md:px-14 bg-[#222630] rounded-[16px] my-[32px]
const Benner = () => {
    return (
        <div className='flex flex-col items-center md:flex-row md:items-center md:justify-between w-[1235px] p-[56px] mx-auto bg-[#222630] rounded-[16px]   '>
            {/* flex flex-col justify-between w-[560px]  sm:grid sm:grid-col-1 sm:items-center */}
            <div className='w-[560px] flex flex-col justify-between h-full gap-[20px] '>
                <h2 className='font-bolt text-sx text-green-500'>
                    WORKOUT LIBRARY
                </h2>
                <h1 className='font-[800px] text-6xl'>
                    TRAIN WITH INTENT. LOG
                    EVERY SET.
                </h1>
                <p className='font-normal text-base text-[#9CA3AF] '>
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.
                </p>
                <div className='w-[180px] h-[40px] bg-[#C2F800] rounded-[6px] text-black flex justify-center items-center'>
                    <a href="#books">BROWSE WORKOUTS</a>
                </div>
            
            </div>


            {/* image */}
            <Image
            src="/banner.png"
            width={335}
            height={335}
            alt='Fitness training banner'
            className='h-auto w-full max-w-[335px] self-center object-cover md:self-auto'
            ></Image>

        </div>
    );
};

export default Benner;