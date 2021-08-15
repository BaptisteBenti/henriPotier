import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

import StatusBar from './StatusBar'
import Banner from './Banner'

import defaultBanner from '../../assets/images/banner.jpg'
import checkoutBanner from '../../assets/images/banner7.jpg'

const Header = () => {

  const location = useLocation()

  let banner = {}
  switch (location.pathname) {
    case '/checkout':
      banner.img = checkoutBanner
      banner.pos = '0 86%' // le cadrage est volontaire ;-)
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