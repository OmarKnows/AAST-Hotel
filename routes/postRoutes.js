const express = require('express');
const router = express.Router();
const {
    createPost, 
    fetchPosts, 
    everyRoom
} = require('../controllers/postController')

const auth = require('../utils/auth')

router.post('/create_post', auth,  createPost)

router.get('/posts/:id', auth, fetchPosts)
router.get('/rooms/:room', auth, everyRoom)

module.exports = router;