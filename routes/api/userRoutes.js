const router = require('express').Router();


const {
    getUsers, getSingleUser, createUser, addFriend, killFriend, killUser
} = require('../../controllers/userControllers');


// /api/users

router.route('/').get(getUsers).post(createUser);


// /api/users/:userId

router.route('/:userId').get(getSingleUser).delete(killUser);


// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').post(addFriend).delete(killFriend);

module.exports = router;