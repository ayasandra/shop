import React from "react"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended"



const CartPage = ({
   productsInCart,
   removeProductFromCart,
   changeProductQuantity,
}) => {
   return (
      <>
         <h1 className="page-title">Cart </h1>
         <div>
            <CartProductList
               CartItem={CartProductListItemExtended}
               productsInCart={productsInCart}
               removeProductFromCart={removeProductFromCart}
               changeProductQuantity={changeProductQuantity}
            />
            <CartTotal 
            productsInCart={productsInCart}
            />
            <Link to='/checkout'><button className='checkout-btn'>Checkout</button></Link>

         </div>
      </>
   )
}

const mapStateToProps = (state) => ({
   productsInCart: state.productsInCart
})

export default connect(mapStateToProps)(CartPage)