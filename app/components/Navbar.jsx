'use client'

import logo1 from '../assets/logo1.png'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';


export default function Navbar() {

  const [navbar, setNavbar] = useState(true);


    return(
    <div className='max-w-5xl mx-auto mt-4  z-10 top-0'>
      <div className=' flex flex-col justify-between '>
          <div className='flex flex-row justify-between items-center'>

           <Image src={logo1} alt="logo" 
           className='ml-8 cursor-pointer max-w-3/4' 
           onClick={()=> setNavbar(!navbar)}/>
           <ShoppingCart className='mx-auto' />
          </div>

          <nav className={ navbar ? 'w-full  flex flex-col md:flex-row mx-auto my-auto py-4 ' : 'hidden'}>
            <Link href="/" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Home</Link>
            <Link href="/about" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">About</Link>
            <Link href="/menu" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Menu</Link>
            <Link href="/booking" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Book a table</Link>
            
          </nav>
        </div>
      </div>
    )
}