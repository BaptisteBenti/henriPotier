import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

import StatusBar from './StatusBar'
import Banner from './Banner'

import defaultBanner from '../../assets/images/banner.jpg'
import checkoutBanner from '../../assets/images/banner5.jpg'
import checkoutBannerEmpty from '../../assets/images/banner7.jpg'
import { useSelector } from 'react-redux'
import { selectCartTotalNumberOfProducts } from '../../app/selectors'

const Header = () => {

  const location = useLocation()
  const cartItems = useSelector(selectCartTotalNumberOfProducts)


  // À ce stade il conviendrait d'inclure une Banner sur chaque page...
  let banner = {}
  switch (location.pathname) {
    case '/checkout':
      cartItems > 0
      ? (function() {
        banner.img = checkoutBanner
        banner.pos = '0 85%'
      }())
      : (function() {
        banner.img = checkoutBannerEmpty
        banner.pos = '0 86%' // le cadrage est volontaire ;-)
      }())
      break;

    default:
      banner.img = defaultBanner
      banner.pos = '0 61%'
      break;
  }

  const { t } = useTranslation();
  return (
    <header>
      <StatusBar />
      <Banner
        headline="Henri Potier"
        subHeading={t('banner.subHeading')}
        bgImgUrl={banner.img}
        bgPos={banner.pos}
      />
    </header>
  )
}

export default Header