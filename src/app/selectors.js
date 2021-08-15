
import { createSelector } from '@reduxjs/toolkit'
import { cartSelectors as cart } from '../features/checkout/cartSlice'
import { productSelectors as product } from '../features/catalog/productSlice'
import { uiSelectors as ui } from '../features/ui/uiSlice'
import { langSelectors as lang } from '../features/lang/langSlice'

export const {
  selectAll: selectCartAll,
  selectIds: selectCartIds,
  selectById: selectCartById,
} = cart

export const {
  selectAll: selectProductAll,
  selectIds: selectProductIds,
  selectById: selectProductById,
} = product

export const {
  selectIds: selectLangIds,
} = lang

// joins cart quantity with product details but ignores products out of the cart
export const selectCartProductJoin
= createSelector( [selectCartAll, selectProductAll], (cart, products) => { return (
    cart.map( product => {
      let _product = products.filter( _product => _product.isbn === product.id) // [{}]
      let {isbn, ...rest} = _product[0]
      return {...product, ...rest} // { id, quantity, cover, price, synopsis, title }
    })
)})

// joins cart quantity with product details and includes all the products even if not in the cart
export const selectCartProductAll
= createSelector( [selectCartAll, selectProductAll], (cart, products) => { return (
    products.map(product => {
      let _product = cart.filter( _product => _product.id === product.isbn)
      return (
        _product[0]
        ? {...product, quantity: _product[0].quantity} // product is in cart > join qty
        : {...product, quantity: 0} // product isn't in cart, add default qty: 0
      )
  })
)})

// get product by id with details + quantity from cart
export const selectCartProductById
= createSelector( [selectCartProductAll, (_, id) => id], (products, id) => { return (
    products.find( product => product.isbn === id)
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
= createSelector( [selectCartProductJoin], (cart) => { return (
  cart.length
    ? cart.map( product => product.price * product.quantity)
          .reduce( (a,b) => a + b )
    : undefined
)})

export const selectCartTotalPrice // After Discount
= createSelector( [selectCartSubTotalPrice, selectCartBestDiscount], (price, discount) => {
  return price - discount
})

export const selectProductStatus
= createSelector( [state => state.product], (product) => product.status)

export const selectStateTogglerStatusById
= createSelector( [ui.selectAll, (_, id) => id], (ui, id) => {
    let entity = ui.find( ui => ui.id === id)
    return entity ? entity.state : false
})