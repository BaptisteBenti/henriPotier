import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next";
import { selectCartTotalNumberOfProducts, selectProductIds, selectProductStatus } from "../../app/selectors"
import ProductCard from "./ProductCard"
import GoToCheckout from "./GoToCheckout"
import Spinner from "../ui/Spinner"
import './Product.scss'

const ProductList = () => {

  const { t } = useTranslation();

  const productStatus = useSelector(selectProductStatus) // loading, failed, succeeded
  const productIds    = useSelector(selectProductIds)
  const count   = useSelector(selectCartTotalNumberOfProducts)

  switch (productStatus) {
    case 'loading': return <Spinner />
    case 'failed': return <Error />
    default:
      const productCard = productIds && productIds.map( (productId, index) => {
        return <ProductCard key={index} id={productId}/>
      })
      return (
      <>
        <div id="ProductList">{productCard}</div>
        <div className="d-flex align-items-center my-5">
          {
            count > 0
              ? <div className="px-3">t('productList.total', {count})</div>
              : undefined
          }
          <GoToCheckout />
          </div>
      </>
    )
  }
}

export default ProductList

const Error = () => <div>Error</div> // [todo]: create component Error
