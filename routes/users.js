import express from 'express';
import { v4 as uuidv4 } from 'uuid';

// initialize router
const router = express.Router();

const users = []

// all routes are starting w/ /users
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database`);
});

// id is from req params
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    console.log(foundUser);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
});

export default router;