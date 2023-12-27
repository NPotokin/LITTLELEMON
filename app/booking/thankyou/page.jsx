

export default function ThankYou(){


    return(

        <div className="max-w-full flex flex-col h-screen">
            <h1 
             className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            Thank you for contacting us regarding   
            <span className='text-prim1'> table reservation </span> 
            </h1>
            <h1 
             className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            We will check out     
            <span className='text-prim1'> availability</span> for that date 
            </h1>
            <h1 
             className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            And get back to you in a    
            <span className='text-prim1'> timely fashion </span> 
            </h1>
        </div>
    )
}