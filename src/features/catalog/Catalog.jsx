import ProductList from './ProductList'
import Banner from './Banner'
import bannerImg from '../../assets/images/banner.jpg'
import { useTranslation } from 'react-i18next'

const Catalog = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Banner
        headline="Henri Potier"
        subHeading={t('banner.subHeading')}
        bgImgUrl={bannerImg}
      />
      <div className="d-flex flex-column align-items-center">
        <ProductList />
      </div>
    </div>
  )
}

export default Catalog