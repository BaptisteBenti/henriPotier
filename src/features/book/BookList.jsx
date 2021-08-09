import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { cartUpdated } from '../cart/cartSlice'
import {
  selectCartAll,
  selectBookIds,
  selectBookStatus
} from '../../app/selectors'
import BookListItem from './BookListItem'

const BookList = () => {

  const bookIds = useSelector(selectBookIds)
  const bookStatus = useSelector(selectBookStatus)
  const globalCart = useSelector(selectCartAll)
  const [cart, setCart] = useState(globalCart)
  const dispatch = useDispatch()
  const history = useHistory()

  const checkout = () => {
    dispatch(cartUpdated(cart))
    history.push('/checkout')
  }

  const handleCart = (id, quantity) => {
    quantity === 0
      ? setCart(cart.filter( book => book.id !== id )) // Remove the book from the cart
      : cart.filter( book => book.id === id ).length
        ? setCart(cart.map(book => book.id === id ? {...book, quantity} : book )) // Update the quantity
        : setCart( [...cart, {id, quantity}]) // Add the book to the cart
  }

  switch (bookStatus) {

    case 'loading': return (<div><p>Loading...</p></div>) // replace with a Spinner Component
    case 'failed': return (<div><p>Error</p></div>)

    default:
      const bookList = bookIds.map((bookId, index) => {
        return <BookListItem key={index} id={bookId} updateCart={handleCart}/>
      })
      return (
        <div>
          {bookList}
          <button onClick={checkout}>Checkout</button>
        </div>
      )
  }
}

export default BookList
