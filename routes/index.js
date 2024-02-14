const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');


// Define routes
router.get('/users', UserController.index);
router.post('/users/store', UserController.store);
router.get('/users/show/:id', UserController.show);
router.post('/users/update/:id', UserController.update);
router.get('/users/delete/:id', UserController.destroy);

module.exports = router;
