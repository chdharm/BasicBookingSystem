let utils = require('./Utils');
const fs = require('fs');
const cart=require("../model/Cart");
const products=require("../model/Products");
const users=require("../model/Users");
const session=require("../model/UserSession");
const history=require("../model/History");
class Helpers {
    async signup (context) {
        
    }
    async login (context) {
        // fs.readFile("", function(err, buf) {
        //     console.log(buf);   
        // });


    }
    async isValidLogIn (context) {

    }
    async isAdminLogin (context) {

    }
    async logout (context) {

    }
    async addProduct (context) {

    }
    async updateProduct (context) {

    }
    async deleteProduct (context) {

    }
    async browseProduct (context) {

    }
    async addProductToTheCart (context) {
        
    }
    async getCartTotalAmount (context) {

    }
    async checkout (context) {

    }
}
module.exports = new Helpers();