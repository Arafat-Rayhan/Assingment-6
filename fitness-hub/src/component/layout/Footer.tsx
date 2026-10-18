import Image from 'next/image'

const Footer = () => {
    return (
        <div id="books" className='h-[100px] flex justify-between w-[1280px] py-[40px] mx-auto mt-[64px] border-t border-solid border-green-500' >
        
            <div className='w-[73px] h-[20px] flex justify-between'>
                <Image
                    src="/logo.png"
                    width={20}
                    height={20}
                    alt='Fitness training banner'
                >

                </Image>
                <h2 className='flex justify-between font-bold text-sm'>
                    FITLOG
                </h2>
            </div>
            <h2 className='text-[#6B7280] font-normal text-[14px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</h2>
        </div>
    );
};

export default Footer;