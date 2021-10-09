const express = require('express')
const prod_controller = require('./../controllers/prod_controller');
const router = express.Router()
console.log('inside route');
module.exports = router =>{
router.post('/api/v1/books',prod_controller.register_product);
router.get('/api/v1/books',prod_controller.get_products);
router.get('/api/v1/books/:id',prod_controller.destroy);
router.post('/api/v1/books/:id',prod_controller.update);
};
//export default router;
