import logo from './logo.svg';
import './App.css';
import React from 'react';
import Topbar from './inc/Navbar';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import product from "./pages/product";
import News from "./pages/News";
import Footer from "./inc/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";



function App() {
  return (
      <Router>
          <div className="App">

              <Topbar />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
              < Route path="/product">
                  <product />
              </Route>
              <Route path="/Contact">
                  <Contact />
              </Route>
                  <Route path="/News">
                      <News />
                  </Route>

            </Switch>
              <Switch>
                  <Route path="/product" component={product}/>
                  <Route path="/products/:productId" component={ProductDetail} />
              </Switch>
            <br/><br/><br/>
            <Footer />


        </div>
      </Router>
  );
}

export default App;
