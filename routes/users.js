import express from 'express';
import { v4 as uuidv4 } from 'uuid';

// initialize router
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

// all routes are starting w/ /users
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database`);
});

router.post('/', (req, res) => {
    
})

export default router;