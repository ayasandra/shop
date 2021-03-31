import React from "react";
import ProductList from "./Products/ProductList"
import { Route } from "react-router-dom"
import CartPage from "./CartPage/CartPage"
import AboutUs from './AboutUs/AboutUs'
import Contacts from './Contacts/Contacts'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import './Main.css'


const Main = () => {
   return (
      <>
         <main class="main">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3">
                     Some text
                  </div>
                  <div class="col-lg-9">
                     <Route path="/shop/" exact component={ProductList} />
                     <Route path="/cart" component={CartPage} />
                     <Route path="/aboutus" component={AboutUs} />
                     <Route path="/contacts" component={Contacts} />
                     <Route path="/checkout" component={CheckoutPage}/>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}

export default Main
