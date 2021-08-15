import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateStateToggler } from '../ui/uiSlice'
import { upsertToCart, removeFromCart } from '../checkout/cartSlice'

const QuantitySelector = ({id, quantity}) => {

  const { increase, decrease, value } = UseQuantitySelector(quantity)

  const dispatch = useDispatch()
  useEffect( () => {
    value === 0
      ? (function(){
        dispatch(removeFromCart(id))
        dispatch(updateStateToggler({id, changes:{state: false}}))
      }())
      : dispatch( upsertToCart({id, quantity: value}))
  }, [value])

  return (
    <>
      <button className="btn p-0 bg-transparent" onClick={decrease}><MinusIcon color="var(--bs-primary)" width="32" height="32" /></button>
      <span className="px-3">{value}</span>
      <button className="btn p-0 bg-transparent" onClick={increase}><PlusIcon color="var(--bs-primary)" width="32" height="32" /></button>
    </>
  )
}

const UseQuantitySelector = (quantity) => {

  const [value, setValue] = useState(quantity | 1)

  const increase = () => setValue(value + 1)
  const decrease = () => value > 1 ? setValue(value - 1) : setValue(0)

  return { increase, decrease, value}
}

export default QuantitySelector

const MinusIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-minus-fill" viewBox="0 0 16 16" {...props}>
      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
    </svg>
  )
}
const PlusIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus-fill" viewBox="0 0 16 16" {...props}>
      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
    </svg>
  )
}