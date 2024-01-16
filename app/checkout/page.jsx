'use client'

import React from 'react'
import useMenuStore from '../store/store'

const Checkout = () => {

    const {items, totalPrice, addMeal, removeMeal} = useMenuStore();

  return (
    <div className='flex flex-col mx-auto p-1 m-1'>
        <h1 className='mb-6 text-4xl md:text-5xl lg:text-6xl text-prim1 font-extrabold mx-auto'>
            Check out your order:
        </h1>
        {items.map((item)=>
            <div className='grid grid-cols-10' key={item.name}>

                <div className='col-span-3 m-2 p-2'>
                    <img src={item.img} alt={item.name} className='rounded-3xl'/>
                </div>

                <div className='col-span-3 flex flex-col content-center my-auto'>
                    <div className='text-lg md:text-xl lg:text-2xl text-prim1 font-bold'>
                        {item.name}
                    </div> 
                    <div className='text-md md:text-lg lg:text-xl text-prim1/80 font-bold'>
                        {item.description}
                    </div>
                    </div>
                <div 
                className='mx-auto col-span-2 content-center my-auto text-lg md:text-xl lg:text-2xl text-prim1 font-bold'>
                    {item.price} $
                </div>
                <div className='col-span-2 flex m-2 p-2 content-center my-auto justify-around'>
                    <div 
                    onClick={() => removeMeal(item)}
                    className='text-lg md:text-xl lg:text-2xl text-prim1 font-bold'>-</div>
                    <div className='text-lg md:text-xl lg:text-2xl text-prim1 font-bold'>{item.count}</div>
                    <div 
                    onClick={() => addMeal(item)}
                    className='text-lg md:text-xl lg:text-2xl text-prim1 font-bold'>+</div>
                </div>
            </div>
        )}
        <div className='flex justify-end m-2 p-2 rounded-3xl text-prim1 font-bold text-lg'>
            <div className='text-prim1 text-xl pr-8'>Total Price:</div>
            <div className='text-prim1 text-xl'>{totalPrice} $</div>
        </div>




    </div>
  )
}

export default Checkout