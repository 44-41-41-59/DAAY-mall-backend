'use strict';

const express = require('express');
const permissions= require('../../middlewares/auth/authorize');
const bearer = require('../../middlewares/auth/bearer');
const {addProductsHandler, getProducts, updateProducts, deleteProducts, getStoreProducts, getProductsById} = require('./products.js');

const router = express.Router();
// get all products from all stores by USER
router.route('/products').get(getProducts);
// get one product from all stores by USER/OWNER
// bearer('none'),
router.route('/products/:id').get(getProductsById);
// add products for each store by OWNER
// bearer('registered'), permissions('create'),
router.route('/products').post( addProductsHandler);
// update each product by id by OWNER
// bearer('registered'), permissions('update'),
router.route('/products/:id').put( updateProducts);
// delete each product by id by OWNER
// bearer('registered'), permissions('delete'),
router.route('/products/:id').delete( deleteProducts);
// get all products of a specific store
router.route('/products/:store_id').get(getStoreProducts);

module.exports = router;