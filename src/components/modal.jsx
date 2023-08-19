import React from 'react'
import { useDispatch } from 'react-redux'
import { clear } from '../features/Cardslice'
import { close } from '../features/modulSlice'
export default function Modal() {
    const dispatch = useDispatch()
  return (
    
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 " id="modalBackdrop">
  <div className="bg-white p-8 rounded shadow-md max-w-sm mx-auto">
    <p className="text-gray-800 mb-4">Are you sure you want to proceed?</p>
    <div className="flex justify-end">
     
      <button onClick={()=>dispatch(close())} className="px-4 py-2 mr-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded" id="cancelButton">Cancel</button>
      <button onClick={()=>{
          
          dispatch(close())
          dispatch(clear())
      }} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded" id="confirmButton">Confirm</button>
    </div>
  </div>
</div>

  )
}
