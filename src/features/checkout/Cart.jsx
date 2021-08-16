import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { selectCartTotalNumberOfProducts } from "../../app/selectors"
import CartItems from './CartItems'
import CartFooter from './CartFooter'
import GoToCatalog from './GoToCatalog'
import './Cart.scss'

const Cart = () => {

  const { t } = useTranslation()
  const cartItems = useSelector(selectCartTotalNumberOfProducts)

  return cartItems > 0

  ?
    <div className="container my-5 py-5">
      <h1 className="ff-blackChancery">{t('cart.yourCart')}</h1>
      <hr/>
      <div>
        <CartItems />
      </div>
      <hr/>
      <div className="d-flex justify-content-end">
        <CartFooter />
      </div>
    </div>

  :
    <div className="container my-md-4 py-md-4 my-sm-2 py-sm-2 text-center">
      <h1 className="my-md-3 py-md-3 my-sm-2 py-sm-2">{t('cart.yourCartIsEmpty')}</h1>
      <GoToCatalog />
    </div>
}

export default Cart