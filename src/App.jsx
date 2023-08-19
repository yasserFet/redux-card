import { useEffect } from "react"
import Navbar from "./components/Navbar"
import { Dispatch } from "react"
import { fetchPokemonByName } from "./features/Cardslice"
import { useDispatch,useSelector } from "react-redux"
import { calculateTotals } from "./features/Cardslice"
import { ItemsContainer } from "./components/itemsContainer"
import Modal from "./components/modal"
export default function App() {
  const data = useSelector(store => store.card)
  const modal = useSelector(store => store.modal)
  console.log(data.cardItems)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchPokemonByName())
  },[])
  useEffect(()=> {
    dispatch(calculateTotals())
  },[data])
  return (
   
   <>
   <Navbar/>
  {modal.isOpen && <Modal/>}
  {data.cardItems.length >0 ? <ItemsContainer/>:<h3>empty</h3>}
  
   </>
  
  )
}