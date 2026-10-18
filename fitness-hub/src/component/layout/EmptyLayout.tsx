import Link from 'next/link'

const EmptyLayout = () => {
    return (
        <div className='w-[1185px] h-[300px] bg-[#111317] rounded-[16px] flex justify-center items-center py-[97px] px[16px]'>
            <div className='flex h-full flex-col items-center justify-evenly '>
                <h2 className='font-bold text-xl'>NOTHING HERE YET</h2>
                <p className='font-normal text-xs text-[#A1A1AA] '>Browse the library and add a lift to get today moving.</p>
                <div className='w-[130px] h-[36px] bg-[#C2F10D] text-black flex justify-center items-center rounded-[9999px]'>
                    <Link
                    href="/"
                    >Go to workouts</Link>
                </div>
            </div>
            
        </div>
    );
};

export default EmptyLayout;