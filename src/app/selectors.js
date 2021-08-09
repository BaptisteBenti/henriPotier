
import { createSelector } from '@reduxjs/toolkit'
import { cartSelectors as cart } from '../features/cart/cartSlice'
import { bookSelectors as book } from '../features/book/bookSlice'

export const {
  selectAll: selectCartAll,
  selectIds: selectCartIds,
  selectById: selectCartById,
} = cart

export const {
  selectAll: selectBookAll,
  selectIds: selectBookIds,
  selectById: selectBookById,
} = book

export const selectCartBookAll // joins cart quantity with book details
= createSelector( [selectCartAll, selectBookAll], (cart, books) => { return (
    cart.map( product => {
      let book = books.filter( book => book.isbn === product.id) // [{}]
      let {isbn, ...rest} = book[0]
      return {...product, ...rest} // { id, quantity, cover, price, synopsis, title }
    })
)})

export const selectCartTotalNumberOfProducts
= createSelector( [selectCartAll], (cart) => {
  let total = null
  cart.map( product => total += product.quantity)
  return total
})

export const selectCartIdsFlatted // For Discount Calculation
= createSelector ( [selectCartAll], (cart) => { return (
  cart.map( (product) => Array(product.quantity).fill(product.id))
      .flat()
)})

export const selectCartBestDiscount
= createSelector( [state => state.cart.discount], (discount) => { return (
  discount
    ? discount.offers
        .map (offer => offer.value)
        .sort( (a,b) => a - b )
        .pop()
    : undefined
)})

export const selectCartSubTotalPrice // Before Discount
= createSelector( [selectCartBookAll], (cart) => { return (
  cart.length
    ? cart.map( product => product.price * product.quantity)
          .reduce( (a,b) => a + b )
    : undefined
)})

export const selectCartTotalPrice // After Discount
= createSelector( [selectCartSubTotalPrice, selectCartBestDiscount], (price, discount) => {
  return price - discount
})

export const selectBookStatus
= createSelector( [state => state.book], (book) => book.status)
