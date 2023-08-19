import React from 'react'
import { Up,Down } from '../icons'
import { increase,decrease,removeItem } from '../features/Cardslice'

import { useDispatch } from 'react-redux'
export const ItemCard = ({img,price,title,amount,id}) => {
    const dispatch = useDispatch()
  return (
    <div className=''>
        <div className='flex justify-around mb-8 basis-2/3 items-center  '>
        <div className='flex justify-around items-center'>
            <img src={img} alt="" className='w-20'/>
            <div>
                <h4>{title}</h4>
                <p>{price}</p>
                <button  onClick={()=>dispatch(removeItem(id))}> remove</button>
            </div>
        </div>
        <div>
           <div className='flex flex-col items-center justify-center'>
               <button onClick={()=> dispatch(increase(id))}> <Up/></button>
            <span>{amount}</span>
            <button  onClick={()=> dispatch(decrease(id))}><Down/></button>
           </div>
        </div>
    </div>
    </div>
  )
}
