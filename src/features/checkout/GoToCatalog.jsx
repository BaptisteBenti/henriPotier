import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'

const GoToCatalog = () => {
  const { t } = useTranslation()
  return (
  <Link to="/">{t('cart.continueShopping')}</Link>
)}

export default GoToCatalog