import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { selectCartBestDiscount, selectCartSubTotalPrice, selectCartTotalNumberOfProducts, selectCartTotalPrice } from "../../app/selectors"
import GoToCatalog from './GoToCatalog'

const CartFooter = () => {

  const { t } = useTranslation()

  const count     = useSelector(selectCartTotalNumberOfProducts)
  const subTotal  = useSelector(selectCartSubTotalPrice)
  const discount  = useSelector(selectCartBestDiscount)
  const total     = useSelector(selectCartTotalPrice)
  const history   = useHistory()

  // NOT IMPLEMENTED YET
  // go to next step checkout...
  const checkout = () => {
    history.push('/')
  }

  return (
    <div className="flex-grow-0 w-50">
    <div className="mt-3 d-flex w-100 justify-content-between">
      <p>{t('cart.itemSubTotal', {count})}</p>
        {/** Should use Trans component here and style {count} */}
        {/** https://react.i18next.com/latest/trans-component */}
      <p>{subTotal | 0} €</p>
    </div>
    <hr className="my-1" />
    <div className="d-flex w-100 justify-content-between text-primary fs-5">
      <p className="ff-blackChancery">{t('cart.discount')}</p>
      <p>{discount | 0} €</p>
    </div>
    <hr className="my-1" />
    <div className="d-flex w-100 justify-content-between">
      <p>{t('cart.total')}</p>
      <p className="fs-3">{total | 0} €</p>
    </div>
    <div className="mt-3 d-flex w-100 justify-content-between">
      <span className="pe-5"><GoToCatalog /></span>
      <button type="button" className="btn btn-primary btn-lg" onClick={checkout}>{t('cart.checkout')}</button>
    </div>
    </div>
  )
}

export default CartFooter
