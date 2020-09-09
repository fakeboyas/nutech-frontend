import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";
import store from "./redux/store";
import AddProduct from "./pages/AddPRoduct/AddProduct";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Router exact path="/produk">
              <Product />
            </Router>
            <Router exact path="/tambah-barang">
              <AddProduct />
            </Router>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
