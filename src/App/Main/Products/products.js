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
      image:"images/green.png",
   },

   {
      id:3,
      name:"Blue",
      type:"Pale",
      price:90,
      image:"images/blue.png",
   },

   {
      id:4,
      name:"Violet",
      type:"Bright",
      price:110,
      image:"images/violet.png",
   },

   {
      id:5,
      name:"Yellow",
      type:"Bright",
      price:110,
      image:"images/yellow.png",
   },

   {
      id:6,
      name:"Grey",
      type:"Pale",
      price:70,
      image:"images/grey.png",
   },
   

]
export const getProductsObject = array => {
   return array.reduce((obj, product) => ({
         ...obj,
         [product.id]:product
      }), {})
}

export default products 