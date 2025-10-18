import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'
import assets from '@/app/assets/assets'

const Header = () => {
    return (
        <header className='flex relative z-2 justify-between items-center py-7 w-[93%] max-w-full mx-auto px-4'>
            <div className='flex items-center gap-5'>
                <Link href="/">
                    <Image src={assets.seo} alt="Logo" width={80} height={80} />
                </Link>
                <Navbar />
            </div>
            <div className='flex items-center gap-8'>
                <h3 className='hidden md:block text-lg font-semibold'>
                    Hey, Buddy
                </h3>
                <button className='primary'>Get Started</button>
            </div>
        </header>
    )
}

export default Header;