import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { ItemCard } from './itemCard'
import { open,close } from '../features/modulSlice'
export const ItemsContainer = () => {
     const {cardItems,totalPrice} = useSelector(store=> store.card)
  const modal = useSelector(store => store.modal.isOped)

    const dispatch = useDispatch()
  return (
    <>
    <main className=''>
      <div className="container py-8">
      <h2 className='text-center font-bold text-4xl mb-8'>Your bag</h2>
      <div>
        {cardItems.map(item => {
          return <ItemCard key = {item.id} {...item}/>
        })}
      </div>
      </div>
      <hr className="" />
      <footer className='text-center'>
        <div className='flex justify-around'>
          <p>total:</p>
          <p>{totalPrice.toFixed(2)}</p>
        </div>
       <button onClick={()=>dispatch(open())} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  clear
</button>

      </footer>
    </main>
    </>
  )
}
