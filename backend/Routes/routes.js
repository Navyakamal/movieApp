const express = require('express');
const { register, login } = require('../Controller/userControl');
const { addMovie } = require('../Controller/movieController');
const upload = require('../middleware/multermiddleware');
const { admin } = require('../middleware/admin');

// Create an object for router
const router = express.Router();

// Register
router.post('/user/register', register);

// Login
router.post('/user/login', login);

// Add movies
 router.post('/admin/add-movie', admin, upload.fields([{ name: 'coverImg' }]), addMovie);

module.exports = router;
