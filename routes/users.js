import express from 'express';
import { v4 as uuidv4 } from 'uuid';

// initialize router
const router = express.Router();

let users = []

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


// delete user with specified id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`);
});

// update user data
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`User with the id ${id} updated in the database`);
});

export default router;