import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Book from './features/catalog/Catalog'
import Checkout from './features/checkout/Checkout'
import Header from './features/ui/Header'
import Footer from './features/ui/Footer'

const App = () => {
  return (
    <div className=" text-white overflow-hidden">
    <Header />
      <main className=" text-light">
        <Router>
          <Switch>
            <Route exact path="/" component={Book}/>
            <Route exact path="/checkout" component={Checkout}/>

            <Route path="*">
              <Redirect to={{pathname: "/"}} />
            </Route>

          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App