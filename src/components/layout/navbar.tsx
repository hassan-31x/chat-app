import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from '../ui/modeToggle'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-end px-10 gap-5 items-center'>
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Navbar