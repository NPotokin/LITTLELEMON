import {BsInstagram, BsFacebook, BsReddit, BsTwitter } from "react-icons/bs"


export default function Footer(){
    return(

    <div className='max-w-5xl mx-auto pt-12'>
    <div className='flex flex-col md:flex-row mx-auto'>
      <div className='flex flex-row mx-auto'>
        <p className=' text-1xl md:text-2xl lg:text-3xl text-prim1 font-extrabold m-auto px-3'>
          Copiright Little Lemon 2023.
        </p>
      </div>
      <div className='flex flex-row m-auto'>
        <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer">
        <BsFacebook size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer">
        <BsInstagram size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.reddit.com/" target="_blank"  rel="noopener noreferrer">
        <BsReddit size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.twitter.com/" target="_blank"  rel="noopener noreferrer">
        <BsTwitter size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
      </div>


    </div>

   </div>
    )
}