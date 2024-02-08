'use client'

import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <header className='bg-[#013B94]'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'
            >
                <Link
                    href="/" className='-m-1.5 p-1.5'>
                    <span className='sr-only'>Booking.com</span>
                    <img className='h-12 w-auto' src="" />
                </Link>

            </nav>
        </header>
    )
}

export default Header
