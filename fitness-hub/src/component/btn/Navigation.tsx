"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname=usePathname();

    return (
        <nav className='w-[180px] flex justify-between'>
            <Link
            href="/"
            className={pathname==="/" ? "font-dold text-green-500":"text-white" }
            >Wordout
            </Link>
            <Link
            href="/My-plan"
            className={pathname==="/My-plan" ? "font-dold text-green-500":"text-white" }
            >My plan
            </Link>
        </nav>
    );
};

export default Navigation;