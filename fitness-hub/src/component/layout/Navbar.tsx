import Image from 'next/image'
import Navigation from '@/component/btn/Navigation'
import NavCountBtn from '@/component/btn/NavCountBtn'



const Navbar = () => {
    return (
        <nav className='flex justify-between items-center max-w-[1280px] mx-auto h-[70px]'>
            <div className='flex w-[100px] h-[30px]'>
                 <Image
            src="/logo.png" 
            width={25}
            height={25}
            alt="logo"
            ></Image>

            <h2 className='font-bolt text-[22px]'>
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