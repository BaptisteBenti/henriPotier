import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { selectCartProductJoin } from "../../app/selectors"
import { removeFromCart } from "./cartSlice"
import { store } from "../../app/store"
import QuantitySelector from "../catalog/QuantitySelector"
import { updateStateToggler } from "../ui/uiSlice"

const CartItems = () => {

  const { t } = useTranslation()
  const items = useSelector(selectCartProductJoin)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(removeFromCart(id))
    dispatch(updateStateToggler({id, changes:{state: false}}))
  }

  const item = items.map( (item, index) => (
    <div key={index} className="itemCard d-flex justify-content-between">

      <div className="d-flex">
        <div>
          <img
            src={item.cover}
            alt={item.title}
            width="100%" height="100%"
          />
        </div>

        <div className="px-5">
          <h4>{item.title}</h4>
          <p>{item.price} €</p>
          <div>
            <QuantitySelector id={item.id} quantity={item.quantity}/>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <a className="link-light" onClick={() => handleClick(item.id)}>{t('cart.removeFromCart')}<TrashIcon className="ms-2"/></a>
          <div className="mt-5 fs-4 text-light">{item.price * item.quantity} €</div>
        </div>
      </div>

    </div>
  ))

    return (
      <div>{item}</div>
    )

}

export default CartItems

const TrashIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" {...props}>
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
)