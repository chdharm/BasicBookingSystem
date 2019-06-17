let helpers=require('../helpers/helper')
class GETMYPARKINGAPIS{
    async signup(ctx){
        console.log("Request for signup:",ctx.request);
        let resp = await helpers.signup({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for signup:",ctx.body);
        }
    }
    async login(ctx){
        console.log("Request for login:",ctx.request);
        let resp = await helpers.login({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for login:",ctx.body);
        }
    }
    async isValidLogIn(ctx){
        console.log("Request for isValidLogIn:",ctx.request);
        let resp = await helpers.isValidLogIn({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for isValidLogIn:",ctx.body);
        }
    }
    async isAdmin(ctx){
        console.log("Request for isAdmin:",ctx.request);
        let resp = await helpers.isAdmin({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for isAdmin:",ctx.body);
        }
    }
    async logout(ctx){
        console.log("Request for logout:",ctx.request);
        let resp = await helpers.logout({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for logout:",ctx.body);
        }
    }
    async addProduct(ctx){
        console.log("Request for addProduct:",ctx.request);
        let resp = await helpers.addProduct({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for addProduct:",ctx.body);
        }
    }
    async updateProduct(ctx){
        console.log("Request for updateProduct:",ctx.request);
        let resp = await helpers.updateProduct({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for updateProduct:",ctx.body);
        }
    }
    async deleteProduct(ctx){
        console.log("Request for deleteProduct:",ctx.request);
        let resp = await helpers.deleteProduct({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for deleteProduct:",ctx.body);
        }
    }
    async browseProduct(ctx){
        console.log("Request for browseProduct:",ctx.request);
        let resp = await helpers.browseProduct({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for browseProduct:",ctx.body);
        }
    }
    async addProductToTheCart(ctx){
        console.log("Request for addProductToTheCart:",ctx.request);
        let resp = await helpers.addProductToTheCart({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for addProductToTheCart:",ctx.body);
        }
    }
    async getCartTotalAmount(ctx){
        console.log("Request for getCartTotalAmount:",ctx.request);
        let resp = await helpers.getCartTotalAmount({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for getCartTotalAmount:",ctx.body);
        }
    }
    async checkout(ctx){
        console.log("Request for checkout:",ctx.request);
        let resp = await helpers.checkout({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for checkout:",ctx.body);
        }
    }

    
}

module.exports = new GETMYPARKINGAPIS();