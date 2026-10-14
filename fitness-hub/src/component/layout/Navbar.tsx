import Image from 'next/image'
import Link from 'next/link'



const Navbar = () => {
    return (
        <nav className='flex justify-between max-w-[1280px]'>
            <div>
                 <Image
            src="/B14-A6-Fit-Log/assets/logo.png" 
            width={500}
            height={500}
            alt="logo"
            ></Image>

            <h2>
                FITLOG
            </h2>
               
            </div>

                {/* link */}
            <div>
                    <Link href='/'>Workout</Link>
                    <Link href='/My-plan'>My plan</Link>
            </div>

            {/* 2 btn */}

            <div>

                <div>
                    <button></button>
                    <h2>2</h2>
                </div>
                <div>
                    <button></button>
                    <h2>2</h2>
                </div>
            </div>
           
        </nav>
    );
};

export default Navbar;