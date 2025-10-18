import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex relative z-2 justify-between items-center py-5 px-5'>
            <div className='flex items-center gap-5'>
                <Link href="/">
                    <Image src="/logo.webp" alt="Logo" width={250} height={100} />
                </Link>
                <Navbar />
            </div>
            <div className='flex items-center gap-8'>
                <h3 className='text-lg font-semibold'>
                    Hey, Buddy
                </h3>
                <button className='primary'>Get Started</button>
            </div>
        </header>
    )
}

export default Header;