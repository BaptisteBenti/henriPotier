import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const GoToCheckout = () => {

  const { t } = useTranslation()

  const history  = useHistory()
  const checkout = () => { history.push('/checkout') }

  return <button type="button" className="btn btn-primary btn-lg" onClick={checkout}>{t('goToCheckout.checkout')}</button>
}

export default GoToCheckout