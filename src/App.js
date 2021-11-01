import "./styles.css";
import Product from "./components/product";
import Cart from "./components/cart";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
export default function App() {
  const { productList } = useSelector((state) => state.cartDetail);
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Products Page</h1>

        <div className="linkDiv">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/cart" className="links">
            Cart
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <div className="products">
            {productList.map((product) => (
              <Product product={product} key={product.id} className="product" />
            ))}
          </div>
        </Route>
        <Route path="/cart">
          <Cart />
          {/* {addedItems && addedItems.length !== 0 && <Cart />} */}
        </Route>
      </Switch>
    </div>
  );
}
