import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Book from './features/book/BookList'
import Checkout from './features/cart/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Book}/>
        <Route exact path="/checkout" component={Checkout}/>

        <Route path="*">
          <Redirect to={{pathname: "/"}} />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App