import express from 'express';

// initialize router
const router = express.Router();

// all routes are starting w/ /users
router.get('/', (req, res) => {
    res.send('Hello from users route.');
});

export default router;