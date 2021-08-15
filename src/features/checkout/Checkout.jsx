import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchDiscount } from './cartSlice'
import { store } from '../../app/store'
import { useEffect } from 'react'
import {
  selectCartTotalNumberOfProducts,
  selectCartSubTotalPrice,
  selectCartTotalPrice,
  selectCartBestDiscount,
  selectCartIdsFlatted,
  selectCartProductJoin,
} from '../../app/selectors'

const Checkout = () => {

  const products = useSelector(selectCartProductJoin)
  const totalNumber = useSelector(selectCartTotalNumberOfProducts)
  const discount = useSelector(selectCartBestDiscount)
  const idsFlattedForDiscount = useSelector(selectCartIdsFlatted)
  const totalPriceBeforeDiscount = useSelector(selectCartSubTotalPrice)
  const totalPriceAfterDiscount = useSelector(selectCartTotalPrice)

  useEffect(()=> {
    if(idsFlattedForDiscount.length > 0) {
      store.dispatch(fetchDiscount(idsFlattedForDiscount))
    }
  }, [])

  const item = products.map( (product, index) => {
    // extraire un composant CartItem.jsx
    return (
      <div key={index}>
      <p>
        <span> {product.title} </span>
        <span> | prix unitaire : {product.price}</span>
        <span> | quantité : {product.quantity}</span>
      </p>
      </div>
    )
  })

  return (
    <div>

      {/** produits du panier (titre, cover, prix, quantité)*/}
      {/** options: modifier qté (+/-), supprimer un produit */}
      <div>votre panier : { item }</div>

      <p> Vous avez { totalNumber > 1 ? ` ${totalNumber} produits` : ` ${totalNumber | 0 } produit` } dans votre panier</p>

      <p>PRIX : {totalPriceBeforeDiscount | 0} €</p>
      <p> RÉDUCTION : { discount | 0} € </p>
      <p>TOTAL : {totalPriceAfterDiscount | 0} €</p>


      <p><Link to="/">continuer mes achats</Link></p>
      <p><Link to="/">finaliser ma commande</Link></p>
    </div>
  )
}

export default Checkout