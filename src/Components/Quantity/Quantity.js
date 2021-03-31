import React from 'react'

const Quantity = ({
   productCount,
   onIncrementClick,
   onDecrementClick,
   minCount=1,
}) => {


   return (
      <div className="product-quantity">
         <button
            onClick={() => onDecrementClick()}
            disabled={productCount <= minCount}
         >-</button>
         <input type="text" value={productCount} readOnly />
         <button
            onClick={() => onIncrementClick()}
            disabled={productCount >= 10}
         >+</button>
      </div>
   )
}

export default Quantity