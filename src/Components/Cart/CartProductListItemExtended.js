import React from 'react'
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'
import {connect} from 'react-redux'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => (

    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span>
                </p>
                <p className="cart-extended-price">
                    Price for one item: <span className="bold">$ {product.price} </span>
                </p>
                <p className="cart-extended-count">
                    Selected quantity: <span className="bold"> {productCount} </span>

                </p>
                <p className="cart-extended-sum">
                    Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span>
                </p>
                <Quantity
                    onDecrementClick={() => (
                        productCount === 1
                            ? removeProductFromCart(product.id)
                            : changeProductQuantity(product.id, productCount - 1))
                    }

                    onIncrementClick={() => changeProductQuantity(product.id, productCount + 1)}
                    productCount={productCount}
                    minCount={0}
                />
                <button className='delete-btn' onClick={() => removeProductFromCart(product.id)}>Delete product</button>

            </div>
        </div>
    </div>

)

const mapStateToProps = (state,props) => ({
    isLiked:state[props.product.id],
})

const mapDispatchToProps = dispatch => ({
    removeProductFromCart:(id) => dispatch ({
        type:"REMOVE_PRODUCT_FROM_CART",
        id
    }),
    changeProductQuantity:(id, count) => dispatch ({
        type: "CHANGE_PRODUCT_QUANTITY",
        id,
        count
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CartProductListItemExtended)


