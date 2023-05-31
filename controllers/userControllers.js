const { User } =  require('../models')

module.exports = {
// get a all user.

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

// get a single user.

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId});

            if (!user) {
                return res.status(404).json({message: 'No such user found'})
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create new user

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Updating user
    async updateUser(req, res) {
        try {
            const fixedUser = await User.findOneAndUpdate({_id: req.params.userId}, {username: req.body.username}, {email: req.body.email});
            if (!fixedUser) {
               return res.status(404).json({message: 'No such thought'})
            }
           res.json(fixedUser)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // adding a user to another user's friend list.

    async addFriend(req, res) {
        try {
            const friends = await User.findOneAndUpdate(
                {_id: req.params.userId},    
                {$push: {friends: req.params.friendId}},
                {new: true}
            ) ;
            if (!friends) {
                return res.status(404).json({message:'No such user found'});
            }
            res.json(friends)
           } catch (err) {
            res.status(500).json(err);
           }
    },
// remove friend from friend list.
    async killFriend(req, res) {
        try {
            const friends = await User.findOneAndRemove(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}});
            if (!friends) {
                return res.status(404).json({message:'You have no friends ;-)'})
            }
            res.json(friends)
        } catch (err) {
            res.status(500).json(err);
        }
    }


    
};