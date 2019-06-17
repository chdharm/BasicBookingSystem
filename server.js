const Koa = require('koa');
var Router = require('koa-router');
const serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var controller = require('./src/controllers');
var app = new Koa();
var router = new Router();

app.use(serve('static'));
app.use(bodyParser());

router.get('/signup', controller.signup);//Signup will be done normally only
router.get('/login', controller.login); //login will be done based on the credentials and if the user is a admin then return an extra field in token
router.get('/isValidLogIn', controller.isValidLogIn);//Validate login
router.get('/isAdmin', controller.isAdmin);//Validate login for admin
router.get('/logout', controller.logout); //logout to delete the token 
router.get('/addProduct', controller.addProduct); //Adding product 
router.get('/updateProduct', controller.updateProduct);
router.get('/deleteProduct', controller.deleteProduct);
router.get('/browseProduct', controller.browseProduct);
router.get('/addProductToTheCart', controller.addProductToTheCart);
router.get('/getCartTotalAmount', controller.getCartTotalAmount);
router.get('/checkout', controller.checkout);

app.use(router.routes());
app.listen(process.env.PORT || 3000, ()=>{
  console.log("started checkin");
  console.log("Listening to local port ",3000);
})