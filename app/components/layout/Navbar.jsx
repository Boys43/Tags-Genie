import Link from 'next/link';
import React from 'react'
import { ChevronDown, List, Tag, Text, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
                <div className="group relative">
                    <button className="flex items-center hover:bg-gray-50/10 p-2 rounded transition-all duration-300 ease-in-out cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </button>

                    <ul className="absolute top-12 right-0 bg-[var(--bg-secondary)] opacity-0 invisible translate-y-3 
                                   shadow-xl min-w-max w-64
                                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-2
                                   transition-all duration-300 ease-out flex flex-col gap-2 py-4 px-4 rounded-2xl z-50">
                        <li className="hover:bg-gray-50/10 p-3 transition-all duration-300 ease-in-out rounded-md">
                            <Link className='flex items-center gap-3' href="/generate-tags">
                                <Tag className="w-5 h-5 text-[var(--btn-primary)]" />
                                <span className='text-[var(--text-primary)] font-medium'>Generate Tags</span>
                            </Link>
                        </li>
                        <li className="hover:bg-gray-50/10 p-3 transition-all duration-300 ease-in-out rounded-md">
                            <Link className='flex items-center gap-3' href="/generate-title">
                                <Text className="w-5 h-5 text-[var(--btn-primary)]" />
                                <span className='text-[var(--text-primary)] font-medium'>Generate Title</span>
                            </Link>
                        </li>
                        <li className="hover:bg-gray-50/10 p-3 transition-all duration-300 ease-in-out rounded-md">
                            <Link className='flex items-center gap-3' href="/generate-description">
                                <List className="w-5 h-5 text-[var(--btn-primary)]" />
                                <span className='text-[var(--text-primary)] font-medium'>Generate Description</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-5 items-center'>
                <li className="group relative">
                    <button className="flex items-center hover:bg-gray-50/10 px-4 py-1 rounded transition-all duration-300 ease-in-out gap-2 cursor-pointer">
                        Products
                        <ChevronDown className="group-hover:rotate-180 transition-transform duration-300 ease-in-out w-5 h-5" />
                    </button>

                    <ul className="absolute top-8 left-0 bg-[var(--bg-secondary)] opacity-0 invisible translate-y-3 
                                   shadow-xl min-w-max
                                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-2
                                   transition-all duration-300 ease-out flex items-center gap-4 py-3 px-4 rounded-2xl z-10">
                        <li className="flex flex-col gap-2 w-50 hover:bg-gray-50/10 p-2 transition-all duration-300 ease-in-out rounded-md">
                            <Link className='flex flex-col gap-2' href="/generate-tags">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'>
                                    <Tag /> Tags
                                </span>
                                <p className='text-sm'>Generate tags for your YouTube videos</p>
                            </Link>
                        </li>
                        <li className="flex flex-col gap-2 w-50 p-2 transition-all duration-300 ease-in-out rounded-md hover:bg-gray-50/10">
                            <Link className='flex flex-col gap-2' href="/generate-title">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'>
                                    <Text /> Title
                                </span>
                                <p className='text-sm'>Generate titles for your YouTube videos</p>
                            </Link>
                        </li>
                        <li className="flex flex-col gap-2 w-50 p-2 transition-all duration-300 ease-in-out rounded-md hover:bg-gray-50/10">
                            <Link className='flex flex-col gap-2' href="/generate-description">
                                <span className='text-[var(--text-secondary)] font-semibold text-lg flex items-center gap-2'>
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