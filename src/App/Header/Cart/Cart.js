import React from "react";
import { connect } from 'react-redux'
import "./cart.css";
import {Link} from "react-router-dom"
import CartTotal from "../../../Components/Cart/CartTotal";
import CartProductList from "../../../Components/Cart/CartProductList";

const Cart = ({
   productsInCart,
}) => {
   return (
      <>
         <div className="cart text-center">
            <CartProductList
               productsInCart={productsInCart}
            />
            <CartTotal 
            productsInCart={productsInCart}
            />
            <Link to="/cart">Show cart</Link>
         </div>
      </>
   ) 
}

const mapStateToProps = (state) => ({
   productsInCart: state.productsInCart
})

export default connect(mapStateToProps)(Cart)