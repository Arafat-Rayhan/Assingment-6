import Image from 'next/image'
import Navigation from '@/component/btn/Navigation'
import NavCountBtn from '@/component/btn/NavCountBtn'



const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-[1235px] mx-auto h-[70px] px[24px] sticky top-0 z-50 bg-black mb-[40px]'>
            <div className='flex justify-between w-[95px]  gap-[10px'>
                 <Image
            src="/logo.png" 
            width={28}
            height={28}
            alt="logo"
            ></Image>

            <h2 className='font-[900px] text-[22px]'>
                FITLOG
            </h2 >
               
            </div>

                {/* link */}
            <div className=''>
                   <Navigation />
            </div>

            {/* 2 btn */}

            <div>

               <NavCountBtn />
            </div>
           
        </nav>
    );
};

export default Navbar;