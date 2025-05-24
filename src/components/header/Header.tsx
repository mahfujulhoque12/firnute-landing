import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
// import logo1 from '/public/logo/logo1.jpg';npx shadcn@latest add carousel

import logo2 from '/public/logo/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
import { SiShopify } from 'react-icons/si';


const Header = () => {
  return (
    <div className='bg-[#EFE2D5]'>

    <MaxWidthWrapper>

        <div className='flex justify-between gap-3 items-center   h-20'>
            <Link href="#">
                <Image src={logo2} width={100} height={100} alt='logo' className='w-[100px] h-[80px]'/>
            </Link>
            <div className='text-2xl font-semibold  text-[#C49102]'>Your Brand </div>
            <div className='relative'> 
                <button className='text-[#C49102] cursor-pointer'><SiShopify  size={40} /></button>
                <span className='text-xs font-normal bg-[#C49102] text-white p-0.5 rounded-full absolute -top-2 -right-1'>02</span>
            </div>

        </div>
    </MaxWidthWrapper>
    </div>
  )
}

export default Header