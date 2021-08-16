import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Catalog from './features/catalog/Catalog'
import Cart from './features/checkout/Cart'
import Header from './features/ui/Header'
import Footer from './features/ui/Footer'

const App = () => {
  return (
    <div className="d-flex flex-column text-white overflow-hidden">
      <Router>
        <Header />
        <main className="flex-shrink-0 text-light">
          <Switch>
            <Route exact path="/" component={Catalog}/>
            <Route exact path="/checkout" component={Cart}/>
            <Route path="*">
              <Redirect to={{pathname: "/"}} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App