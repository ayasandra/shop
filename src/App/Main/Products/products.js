const products = [
   {
      id:1,
      name:"Rose",
      type:"Pale",
      price: 125,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/rose.png?raw=true",
   },
      
   {
      id:2,
      name:"Green",
      type:"Bright",
      price:75,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/green.png?raw=true",
   },

   {
      id:3,
      name:"Blue",
      type:"Pale",
      price:90,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/blue.png?raw=true",
   },

   {
      id:4,
      name:"Violet",
      type:"Bright",
      price:110,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/violet.png?raw=true",
   },

   {
      id:5,
      name:"Yellow",
      type:"Bright",
      price:110,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/yellow.png?raw=true",
   },

   {
      id:6,
      name:"Grey",
      type:"Pale",
      price:70,
      image:"https://github.com/ayasandra/shop/blob/master/public/images/grey.png?raw=true",
   },
   

]
export const getProductsObject = array => {
   return array.reduce((obj, product) => ({
         ...obj,
         [product.id]:product
      }), {})
}

export default products 