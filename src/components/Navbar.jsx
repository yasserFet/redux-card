import React from 'react'
import { ShoppingCard } from '../icons'
import "../app.css"
import { useSelector } from 'react-redux'
import { fetchPokemonByName } from '../features/Cardslice'

export default function Navbar() {
    const cardData = useSelector(store=> store.card)
    
      return (
    <nav className='bg-blue-500 p-4 '>
       <div className="container  flex justify-around items-center">
            <h2 className='text-3xl bold text-white'> redux-toolkit</h2>
        <div className='relative '>
                <ShoppingCard/>
                <span className='text-center w-6 h-6 absolute top-0 right-0 bg-gray-300 text-white rounded-full'>{cardData.amount}</span>
          
        </div>
       </div>

    </nav>
  )
}
