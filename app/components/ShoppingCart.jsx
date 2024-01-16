import {React, useState} from 'react'
import { BsBasket } from "react-icons/bs";
import menuData from '../utilities/menuData';
import useMenuStore from '../store/store';
import Link from 'next/link';


const ShoppingCart = () => {
    const [cart, setCart] = useState(true);
    const {items, addMeal, removeMeal, totalPrice} = useMenuStore();
    const cartHandler = () => {
        setCart(!cart)
    }



  return (
    <div>
        <BsBasket 
        onClick={cartHandler}
        size={50} 
        className='text-prim1 font-bold my-auto mr-8'/>
        
        <div className={`relative z-10 ${cart ? 'hidden' : 'block'}`}>
            <div className='absolute top-2 right-8 w-[340px]   bg-prim1/80 rounded-3xl '>
                    
                {items.map((item) => (
                <div key={item.name} className='grid grid-cols-6 gap-1 m-1 p-1 '>

                    <div className='col-span-4 flex flex-row mx-2 px-2 justify-between' >
                        <div className='text-md font-medium text-prim2/90'>{item.name}</div>
                        <div className='text-md font-semibold text-prim2/90'>{item.price} $</div>
                    </div>  
                    
                    <div className='col-span-2 flex flex-row justify-around'>
                        <div 
                        className='text-lg font-bold text-hl1'
                        onClick={() => removeMeal(item)}>-</div>
                        <div className='text-lg font-bold text-sec1'>{item.count}</div>
                        <div 
                        className='text-lg font-bold text-hl1'
                        onClick={() => addMeal(item)}>+</div>
                    </div>


                
                </div>
                ))}

                <div className='flex justify-around bg-sec2 m-2 p-2 rounded-3xl text-prim1 font-bold text-lg'>
                    <div>{totalPrice === 0 ? 'Basket is empty' : 'Total:'}</div>
                    <div className={`${totalPrice === 0 ? 'hidden' : 'block'}`}>{totalPrice} $</div>
                </div>

                <Link href="/checkout"
                className={`m-2 p-2 flex justify-center rounded-3xl text-md font-semibold text-hl2
                 bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-105 duration-500 ${totalPrice === 0 ? 'hidden' : 'block'}`}>
                 Proceed to checkout
                </Link>


                        

                
            </div>
        </div>
    </div>
    
  )
}

export default ShoppingCart;