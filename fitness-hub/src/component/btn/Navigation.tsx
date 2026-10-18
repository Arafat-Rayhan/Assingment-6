"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname=usePathname();

    return (
        <nav className='w-[180px] flex justify-between'>
            <Link
            href="/"
            className={pathname==="/" ? "font-semibolt text-xs text-green-500":"text-white font-semibolt text-xs" }
            >Workdout
            </Link>
            <Link
            href="/My-plan"
            className={pathname==="/My-plan" ? "font-semibolt text-xs text-green-500":"text-white font-semibolt text-xs" }
            >My plan
            </Link>
        </nav>
    );
};

export default Navigation;