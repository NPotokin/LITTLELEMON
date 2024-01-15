'use client'

import reservationToDB from "../actions/reservationToDB"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Bookings(){

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [date, setDate] = useState();
    const [guests, setGuests] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    const router = useRouter();

  const handleSubmit = () =>{
    setLoading(true);
    router.push('/booking/thankyou')
  }


    return(
        <div className="max-w-full flex flex-col">

            <h1 
             className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            Secure your spot for a   
            <span className='text-prim1'> delightful </span> dining experience at 
            <span className='text-prim1'> Little Lemon</span>
            </h1>

            <form
            action={reservationToDB}
            className="my-4 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] text-cyan-700 rounded-3xl" 
            >

            <h1 className='py-6 px-4 my-2 text-center text-3xl lg:text-6xl font-bold text-cyan-700 rounded-3xl'>
            Reserve your table : 
            </h1>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="name" className='w-full md:w-1/3 text-prim1 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Name:</label>
                <input  onChange={e => setName(e.target.value)} type="text" id="name" name="name" 
                required placeholder="How would you like to be addressed?"
                className='placeholder-prim1/60 w-full md:w-2/3 p-2 flex text-center items-center justify-center border-4 border-prim1 text-prim1 rounded-xl focus:outline-none focus:border-prim2' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="phone" className='text-prim1 w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Phone Number:</label>
                <input  onChange={e => setPhone(e.target.value)} type="tel" id="phone" name="phone" 
                required placeholder="What number you could be reached by?"
                className='placeholder-prim1/60 w-full md:w-2/3 p-2 flex text-center items-center justify-center border-4 text-prim1 border-prim1 rounded-xl focus:outline-none focus:border-prim2' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="email" className='text-prim1 w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Email:</label>
                <input  onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" 
                required placeholder="Your email address" 
                className='placeholder-prim1/60 w-full md:w-2/3 flex p-2  text-prim1 text-center items-center justify-center border-4 border-prim1 rounded-xl focus:outline-none focus:border-prim2' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="date" className='text-prim1 w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Date:</label>
                <input  onChange={e => setDate(e.target.value)} type="date" id="date" name="date" 
                required 
                className='placeholder-prim1/60 w-full md:w-2/3 flex p-2  text-prim1 text-center items-center justify-center border-4 border-prim1 rounded-xl focus:outline-none focus:border-prim2' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="people" className='text-prim1 w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Guests:</label>
                <input  onChange={e => setGuests(e.target.value)} type="number" id="people" name="people" 
                required min={1} max={12}
                className='placeholder-prim1/60 w-full md:w-2/3 flex p-2  text-prim1 text-center items-center justify-center border-4 border-prim1 rounded-xl focus:outline-none focus:border-prim2' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="message" className='text-prim1 w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Message:</label>
                <textarea  onChange={e => setMessage(e.target.value)} id="message" name="message" 
                required placeholder="Any additional accomodations or anything else you wanted to mention!"
                className='placeholder-prim1/60 w-full md:w-2/3 p-2 flex text-prim1 text-center items-center justify-center border-4 border-prim1 rounded-xl focus:outline-none focus:border-prim2' 
                ></textarea>
            </div>

            
            <button 
            disabled={!name || !email || !phone || !message || !date || !guests}
            onClick={handleSubmit}
            className="mx-auto p-4 px-6 my-8 border-4 border-prim1 rounded-3xl
             font-semibold text-2xl text-prim1 hover:bg-prim2 duration-700
              disabled:text-hl1 disabled:hover:bg-hl1 disabled:hover:border-hl1 disabled:border-hl1 " 
            type="submit" >{loading ? "Sending data..." : 'Submit!'}
            </button>
               

          </form>


        </div>
    )
}