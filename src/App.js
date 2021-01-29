import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import products from "./pages/products";
import cart from "./pages/cart";
//import "./App.css";
import Navbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={products} />
            {/* Here "component" is a prop that indicates which page to render for the specified path */}
            <Route exact path="/cart" component={cart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
