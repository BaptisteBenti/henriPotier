import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartIdsFlatted } from '../../app/selectors'
import { fetchDiscount } from '../checkout/cartSlice'

const GoToCheckout = () => {

  const history  = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const idsFlattedForDiscount = useSelector(selectCartIdsFlatted)

  const checkout = () => { history.push('/checkout') }

  useEffect(()=> {
    if ( idsFlattedForDiscount.length > 0 ) {
      dispatch( fetchDiscount(idsFlattedForDiscount) )
    }
  }, [checkout])


  return <button type="button" className="btn btn-primary btn-lg" onClick={checkout}>{t('goToCheckout.checkout')}</button>
}

export default GoToCheckout