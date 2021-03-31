import React, { Component } from "react";
import "./ProductListItem.css";
import PropTypes from 'prop-types';
import Quantity from "../../../Components/Quantity/Quantity";
import { connect } from 'react-redux'




class ProductListItem extends Component {
   state = {
      productCount: 1,
   }

   //   constructor () {
   //      super();
   //      this.onIncrementClick = this.onIncrementClick.bind(this);
   //   }

   onIncrementClick = () => {
      this.setState((prevState) => ({
         productCount: prevState.productCount + 1,
      }))
   }

   onDecrementClick = () => {
      this.setState((prevState) => ({
         productCount: prevState.productCount - 1,
      }))
   }

   render() {

      const {
         id,
         name,
         type,
         price,
         image,
         addProductToCart,
         isLiked = false,
         removeLike,
         addLike,
      } = this.props;

      return (
         <div className="product-list-item">
            <div className="product-img">
               <img src={image} alt={name}/>
            </div>
            <button onClick={() => (
               isLiked ? removeLike(id) : addLike(id)
            )}>
               {isLiked ? <span>&#128420;</span> : <span>&#9825;</span>}
            </button>
            <div className="product-title">
               {name}
            </div>
            <div className="product-features">Type: {type}</div>
            <Quantity
               onDecrementClick={this.onDecrementClick}
               onIncrementClick={this.onIncrementClick}
               productCount={this.state.productCount}
               minCount={1}
            />
            <div className="product-price">${price}</div>
            <button
               className="btn-add-to-cart"
               onClick={() => addProductToCart(id, this.state.productCount)}
            >Add to cart</button>
         </div>
      )
   }
}

ProductListItem.propTypes = {
   name: PropTypes.string.isRequired,
   description: PropTypes.string,
   type: PropTypes.string.isRequired,
   capacity: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   image: PropTypes.string,
}

ProductListItem.defaultProps = {
   description: "No description.",
   image: "images/noimage.png"
}

const mapStateToProps = (state, {id} ) => ({
   isLiked:state.productsLikeState[id],
})

const mapDispatchToProps = dispatch => ({
   addLike:(id) => dispatch ({
      type:"LIKE",
      id
   }),
   removeLike:(id) => dispatch ({
      type:"DISLIKE",
      id
   }),
   addProductToCart : ( id,count ) => dispatch ({
      type:"ADD_PRODUCT_TO_CART",
      id,
      count
   })
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
) (ProductListItem)