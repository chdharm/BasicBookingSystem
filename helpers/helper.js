let utils = require('./Utils');
const fs = require('fs');
const cart=require("../model/Cart");
const products=require("../model/Products");
const users=require("../model/Users");
const session=require("../model/UserSession");
const history=require("../model/History");
class Helpers {
    async signup (context) {
        //Check if the same user with password and userid combination available else wirte one in Users.js/Users.txt
    }
    async login (context) {
        //Validate the user by calling isValidLogIn function for normal users and isAdminLogin for admin and get the token.
        //On open of each new page also, it should be called for validating the authenticated user
    }
    async isValidLogIn (context) {
        //Valiodate the user from Users.js/Users.txt
    }
    async isAdminLogin (context) {
         //Valiodate the user from Users.js/Users.txt
    }
    async logout (context) {
        //Remove the cookie or token stored in local storage and refresh
    }
    async addProduct (context) {
        //add product to product.js/product.txt
    }
    async updateProduct (context) {
        //update product to product.js/product.txt based on product id
    }
    async deleteProduct (context) {
         //delete product to product.js/product.txt based on product id
    }
    async browseProduct (context) {
        //get all productrs from products.js/product.txt
    }
    async addProductToTheCart (context) {
         //add product to cart.js/cart.txt 
    }
    async getCartTotalAmount (context) {
        //get all cart products for a user and get the sum
    }
    async checkout (context) {
        //add the order to history
    }
}
module.exports = new Helpers();