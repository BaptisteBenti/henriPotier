import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { selectBookById, selectCartById } from '../../app/selectors'
import './BookListItem.css';

const BookListItem = ({id, updateCart}) => {

  const book = useSelector((state) => selectBookById(state, id))
  const bookState = useSelector((state) => selectCartById(state, id))
  const [isSelected, setSelected] = useState( !!bookState )
  const [quantity, setQuantity] = useState( bookState ? bookState.quantity : 0 )

  const selectBook = () => {
    setSelected(!isSelected)
    quantity === 0 ? setQuantity(1) : setQuantity(0)
  }
  const subQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setSelected(!isSelected)
  }
  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    updateCart(id, quantity)
  }, [quantity])

  return (
    <div className="card">
      <p onClick={selectBook} className={ isSelected ? 'selected' : undefined}>{book.title}</p>
      { isSelected &&
        <span>
          <a href="#" onClick={subQuantity}>-</a>
          <span>{quantity}</span>
          <a href="#" onClick={addQuantity}>+</a>
        </span>
      }
    </div>
  )
}

export default BookListItem