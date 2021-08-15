import Lang from '../lang/Lang'

const Header = () => {
  return (
    <header>
      <div className="p-1 bg-dark text-white border-bottom border-5 border-primary">
        <div className="container-fluid d-flex justify-content-end">
          <Lang />
        </div>
      </div>
  </header>
  )
}

export default Header