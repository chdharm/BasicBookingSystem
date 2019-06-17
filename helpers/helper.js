let utils = require('./Utils');

class Helpers {
    async signup (context) {
        let repoName=context.name;
        let payload = {
            url: "https://api.github.com/search/repositories?q="+repoName+"+language:javascript&sort=stars+forks&order=desc",
            method: 'get'
        };
        let resp = await utils.apiCall(payload).catch(e => {
            console.log("Error in API call- searchRepoHelper function");
        });
        if (resp && resp.status == 200) {
            return resp.data;
        } else {
            throw new Error("Error in API call- searchRepoHelper function");
        }
    }
    async login (context) {

    }
    async isValidLogIn (context) {

    }
    async isAdmin (context) {

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