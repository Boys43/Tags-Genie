import Link from 'next/link';
import React from 'react'
import { ChevronDown, List, Tag, Text } from 'lucide-react';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-5 items-center'>
                <li className="group relative">
                    <button className="flex items-center hover:bg-gray-50/10 px-4 py-1 rounded transition-all duration-300 ease-in-out gap-2" href="products">
                        Products
                        <ChevronDown className="group-hover:rotate-180 transition-transform duration-300 ease-in-out w-5 h-5" />
                    </button>

                    <ul
                        className="absolute top-8 -left-4 bg-[var(--bg-secondary)] opacity-0 invisible translate-y-3 
                        shadow-xl
               group-hover:opacity-100 group-hover:visible group-hover:translate-y-2
               transition-all duration-300 ease-out flex items-center gap-4 py-3 px-8 rounded-2xl z-10"
                    >
                        <li className="flex flex-col gap-2 w-50">
                            <Link className='flex flex-col gap-2 ' href="/generate-tags">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'>
                                    <Tag /> Tags
                                </span>
                                <p className='text-sm'>Generate tags for your YouTube videos</p>
                            </Link>
                        </li>
                        <li className="flex flex-col gap-2 w-50">
                            <Link className='flex flex-col gap-2 ' href="/generate-title">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'><Text /> Title</span>
                                <p className='text-sm'>Generate titles for your YouTube videos</p>
                            </Link>
                        </li>
                        <li className="flex flex-col gap-2 w-50">
                            <Link className='flex flex-col gap-2 ' href="/generate-description">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'   >
                                    <List /> Description
                                </span>
                                <p className='text-sm'>Generate descriptions for your YouTube videos</p>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;