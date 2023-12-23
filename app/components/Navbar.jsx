

import logo1 from '../assets/logo1.png'
import Image from 'next/image'
import { BsBasket } from "react-icons/bs";
import Link from 'next/link';


export default function Navbar() {


    return(
    <div className='max-w-5xl mx-auto mt-4  z-10 top-0'>
      <div className=' flex flex-col justify-between mx-auto'>
          <div className='flex flex-row justify-between items-center'>

           <Image src={logo1} alt="logo" className='ml-8' />
           <BsBasket size={75} className='text-prim1 font-bold my-auto mr-8'/>
          </div>

          <nav className='w-full flex flex-col md:flex-row mx-auto my-auto py-4  '>
            <Link href="/" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Home</Link>
            <Link href="/about" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">About</Link>
            <Link href="/menu" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Menu</Link>
            <Link href="/booking" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Book a table</Link>
            
          </nav>
        </div>
      </div>
    )
}