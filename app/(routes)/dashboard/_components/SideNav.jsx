'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: <LayoutGrid size={24} />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: <PiggyBank size={24} />,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: <ReceiptText size={24} />,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: <ShieldCheck size={24} />,
            path: '/dashboard/upgrade'
        }
    ];

    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);
    return (
        <div className='h-screen p-5 '>
            <Image src={'/logo.svg'} alt='logo' width={90} height={90} />
            <div className='mt-5'>
    {menuList.map((menu) => (
        <Link href={menu.path}>
        <div
            className={`flex gap-2 items-center text-gray-900 
            font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 
            ${pathname === menu.path ? 'text-primary bg-blue-100 ' : ''}`}
            key={menu.id}
        >
            {menu.icon}
            <span>{menu.name}</span>
        </div>
        </Link>
    ))}
</div>

             <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
                <UserButton/>
                profile
             </div>
             
        </div>
       
    );
}

export default SideNav;
