import ProductList from './ProductList'
import { useTranslation } from 'react-i18next'

const Catalog = () => {

  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center">
      <ProductList />
    </div>
  )
}

export default Catalog