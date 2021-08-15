import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectCartProductById, selectStateTogglerStatusById } from "../../app/selectors"
import { removeFromCart } from '../checkout/cartSlice'
import { addStateToggler, updateStateToggler } from "../ui/uiSlice"
import QuantitySelector from "./QuantitySelector"
import './Product.scss'

const ProductCard = ({id}) => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(addStateToggler({id, state: false}))
  }, [])

  const product = useSelector( (state) => selectCartProductById(state, id)) // { cover, isbn, price, quantity, [synopsis], title }
  const isSelected = useSelector((state) => selectStateTogglerStatusById(state, id))

  // const [isSelected, setSelected] = useState(false)

  return (
    <div className={ `
      ${isSelected ? 'selected' : ''}
      ProductCard
      border border-3 rounded border-info
    `}>
      <>
        { !isSelected
          ? <Recto product={product}/>
          : <Verso product={product}/>
        }

      </>
    </div>
  )
}
export default ProductCard

const Recto = ({product}) => {

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(updateStateToggler({id: product.isbn, changes: {state: true}}))
  }

  return (
    <div
      className="recto bg-dark m-0 w-100 h-100 overflow-hidden"
      onClick={handleClick}>
      <img
        /**
         * add placeholder while loading:
         * https://itnext.io/stable-image-component-with-placeholder-in-react-7c837b1ebee
         * https://medium.com/front-end-weekly/how-to-optimize-image-loading-on-your-website-855020fb41ae
         * https://www.npmjs.com/package/react-img-placeholder
         * https://getbootstrap.com/docs/5.1/components/placeholders/
         *
         * how to cache imgs fetched from server?
         */
        src={product.cover}
        alt={product.title}
        width="100%" height="100%"
      />
    </div>
  )
}

const Verso = ({product}) => {
  return (
    <div className="verso bg-dark m-0 w-100 h-100 d-flex flex-column">
      <div className="card-header fs-5 fw-bold text-break text-darker bg-warning">
        <p>{product.title}</p>
      </div>

      <div className="card-body text-break flex-shrink-0">
        <p>{product.price} €</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <p className="mt-2"><QuantitySelector id={product.isbn} quantity={product.quantity}/></p>
        <span><CloseButton id={product.isbn}/></span>
      </div>
    </div>
  )
}

const CloseButton = ({id}) => {

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(updateStateToggler({id, changes: {state: false}}))
    dispatch(removeFromCart(id))
  }

  return (
    <button
      className="btn btn-transparent"
      type="button"
      onClick={handleClick}
      >
      <XIcon color="var(--bs-warning)" width="24" height="24" />
    </button>
  )
}

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" {...props}>
    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
  </svg>
);
// https://reactsvgicons.com/react-svg-icons-guide
// https://icons.getbootstrap.com/