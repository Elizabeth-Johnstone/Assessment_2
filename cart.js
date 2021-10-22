///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to calculate order totals. You'll also be creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects inside. 
    Write a callback below that uses the reduce array method to calculate the sum of all the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that can take in `cartTotal`,`couponValue`, and `tax` arguments. 
    Inside the function, calculate the tax on the cartTotal and add it in. Subtract the value of the coupon. Return the final number. 
    Note: the numbers passed in for `tax` will be decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal * (1 + tax) - couponValue

console.log(calcFinalPrice(23, 6, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for a customer object as well as an example object. 
    Plan out a customer object for the cart page. Think about the information that a restaurant would need about its customers.
    In the TEXT ANSWER area below, describe the properties that your customer object will have and why you chose those properties.
    Explain what data types each property should be and why you chose those data types. 
    Your object should have at least 4 properties. 
*/

/*
My customer object will have the following properties: firstName, lastName, address, phoneNumber, and isPickingUp. We want the customer's phone number in case there are any issues or questions about the order. We need the customer's address in order to deliver the order, and we need to know if the customer is picking up the order or if it is being delivered.

The name and address properties will be strings because they cannot be booleans or numbers. The phone number property will be a number because we don't want anything other than numbers in that section. Finally, the "isPickingUp" property will be a boolean because there are only two possibilities: The customer is picking up the order, or is not.

*/

/*
    Now, create a customer object following your own guidelines.
*/
let customer = {
    firstName: 'Bob',
    lastName: 'Smith',
    address: '137 Marigold Street, Detroit, MI, 48127',
    phoneNumber: 33354545543,
    isPickingUp: false
}
