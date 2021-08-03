import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Book from './features/book/book'
import Cart from './features/cart/cart'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Book}/>
        <Route exact path="/cart" component={Cart}/>

        <Route path="*">
          <Redirect to={{pathname: "/"}} />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App