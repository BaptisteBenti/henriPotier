import './Banner.scss'

const Banner = ({headline, subHeading, bgImgUrl, bgPos}) => (
    <div
      id="Banner"
      className="p-3 p-md-3 mb-5 text-center position-relative overflow-hidden bg-darker"
      style={ bgImgUrl && {
        backgroundImage: `
        linear-gradient(0deg, var(--bs-darker) 0%, rgba(0,0,0,.35) 75%),
        url(${bgImgUrl})`,
        backgroundPosition: bgPos ? bgPos : '0 50%'
    }}
    >

      <div className="col-md-5 p-lg-3 mx-auto my-5 text-info">
        <h1 className="display-5 fw-normal mb-0">{ headline || "Banner Headline"}</h1>
        <p className="fw-normal">{subHeading}</p>
      </div>

    </div>
)

export default Banner

// setup the background-image on Banner.scss
// or add more props to personalize the banner component behavior