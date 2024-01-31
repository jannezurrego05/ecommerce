/**
 * this function calculates total prices of a new order
 * @param {Array} products  cardProduct :array of Objects
 * @returns  {number} total price
 */

export const totalPrice =(products)=>{
    let sum=0;
    products.forEach(product => sum += product.price )
        return sum;
    
}