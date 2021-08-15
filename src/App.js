import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Catalog from './features/catalog/Catalog'
import Checkout from './features/checkout/Checkout'
import Header from './features/ui/Header'
import Footer from './features/ui/Footer'

const App = () => {
  return (
    <div className=" text-white overflow-hidden">
      <Router>
        <Header />
        <main className=" text-light">
          <Switch>
            <Route exact path="/" component={Catalog}/>
            <Route exact path="/checkout" component={Checkout}/>

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