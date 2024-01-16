'use client'

import { useState } from 'react'
import menuData from '../utilities/menuData';
import useMenuStore from '../store/store';


export default function Menu() {

  const [menuItems, setMenuItems] = useState(menuData);
  const {items, addMeal, removeMeal} = useMenuStore();

  const filterCategory = (category) => {
    setMenuItems (
      menuData.filter((item) => {
        return item.category === category;
      })
    )
  }

  return ( 
    <>
    <div className='w-full bg-hl1 flex flex-col'>
      <div className=' flex flex-col mx-auto'>
        <h1 
          className=" text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
          Check out  <span className='text-prim1'>Our Menu</span> most popular food categories
        </h1>
        
        {/* Buttons */}
        <div className='flex flex-row m-1 p-1 max-w-7xl'>
          <button
          onClick={() => setMenuItems(menuData)}
          className='mx-auto my-auto w-20 p-2 rounded-xl text-md font-bold border-2 border-prim1
           text-prim1 bg-prim2 hover:text-prim1 hover:bg-hl1 hover:scale-110 duration-500'>
            All
          </button>
          <button
          onClick={() => filterCategory("salad")}
          className='mx-auto my-auto w-20 p-2 rounded-xl text-md font-bold border-2 border-prim1
           text-prim1 bg-prim2 hover:text-prim1 hover:bg-hl1 hover:scale-110 duration-500'>
            Salad
          </button>
          <button
          onClick={() => filterCategory("gyros")}
          className='mx-auto my-auto w-20 p-2 rounded-xl text-md font-bold border-2 border-prim1
           text-prim1 bg-prim2 hover:text-prim1 hover:bg-hl1 hover:scale-110 duration-500'>
            Gyros
          </button>
          <button
          onClick={() => filterCategory('meat')}
          className='mx-auto my-auto w-20 p-2 rounded-xl text-md font-bold border-2 border-prim1
           text-prim1 bg-prim2 hover:text-prim1 hover:bg-hl1 hover:scale-110 duration-500'>
            Meat
          </button>
          <button
          onClick={() => filterCategory("pizza")}
          className='mx-auto my-auto w-20 p-2 rounded-xl text-md font-bold border-2 border-prim1
           text-prim1 bg-prim2 hover:text-prim1 hover:bg-hl1 hover:scale-110 duration-500'>
            Pizza
          </button>
          
        </div>
        {/* Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
          {/* Menu Card */}

          {menuItems.map((item) => 
          
          <div className='mt-6' key={item.name}>
            <div className='relative flex flex-col my-2 rounded-b-3xl'>
              {/* Overlay */}
              <div className='absolute w-full h-full bg-prim1/50 hover:bg-prim1/70 rounded-3xl'>
                <p className='ml-3 mt-3 text-3xl md:text-2xl lg:text-3xl font-semibold text-prim2/90'>{item.name}</p>
                <p className='ml-3 mt-3 text-xl font-semibold text-hl1/90'>{item.description}</p>
              </div>

              <img className='w-full h-full max-h-[300px] rounded-3xl object-cover' 
              src={item.img} alt={item.name} />


            </div>
              <div className='flex flex-row justify-between m-2 p-2 border-'>
                <p className='ml-1 text-lg font-extrabold text-prim1'>{item.price}</p>
                <button
                onClick={() => addMeal(item)} 
                className='border-2 rounded-xl w-20 p-1 font-bold hover:bg-prim2 hover:scale-105 duration-500'
                >Add</button>
              

              </div>
          </div>
          
          )}
         

        </div>


      </div>
      

      



    </div>
    </>
        
  )
}

