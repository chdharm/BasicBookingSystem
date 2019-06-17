const Koa = require('koa');
var Router = require('koa-router');
const serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var controller = require('./src/controllers');
var app = new Koa();
var router = new Router();

app.use(serve('static'));
app.use(bodyParser());

router.get('/signup', controller.signup);//We are expecting a user id , password, name dob, address and isAdmin flag
router.get('/login', controller.login); //We are expecting a user id , password ,isAdmin flag and we will give login token to the 
                                        //user and he will store it in cookie

router.get('/isValidLogIn', controller.isValidLogIn);//Validate login  , will return the created token from usersession if it is valid else create new

router.get('/isAdminLogin', controller.isAdminLogin);//Validate login for admin, will return the created token from usersession if it is valid else create new

router.get('/logout', controller.logout); //logout to delete the token stored in  browser cookie

router.get('/addProduct', controller.addProduct); //Adding product to the file product .js

router.get('/updateProduct', controller.updateProduct); //updating product details to product.js 

router.get('/deleteProduct', controller.deleteProduct); //removing the product from product.js 

router.get('/browseProduct', controller.browseProduct); //getting all the products from product.js file

router.get('/addProductToTheCart', controller.addProductToTheCart); //Adding product to the file which we have as Cart under the users field

router.get('/getCartTotalAmount', controller.getCartTotalAmount); //Take out cart details for the partricular passenger based on user id and
                                                                  //show total sum
router.get('/checkout', controller.checkout); //Adding product to the file which we have as History

app.use(router.routes());
app.listen(process.env.PORT || 3000, ()=>{
  console.log("started checkin");
  console.log("Listening to local port ",3000);
})