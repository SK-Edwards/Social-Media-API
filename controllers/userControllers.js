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
            const newUser = User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};