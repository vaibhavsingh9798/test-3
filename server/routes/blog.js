const express = require('express');
const { getPosts, postPosts } = require('../controllers/blogs');
const router = express.Router();

router.get('/',getPosts)

router.post('/',postPosts)


module.exports = router;