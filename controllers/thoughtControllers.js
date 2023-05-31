const { Thought, User } =  require('../models')

module.exports = {
    // get all thoughts 
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

// get a single thought
async getSingleThought(req,res) {
    try {
        const thought = await Thought.findOne({_id: req.params.thoughtId});

        if (!thought) {
            return res.status(404).json({message: 'No such thought found.'})
        }
        res.json(thought)
    } catch (err) {
        res.status(500).json(err);
    }
},

// create a new thought.

async createThought(req, res) {
    try {
        const newThought = await Thought.create( req.body);
const userThought = await User.findOneAndUpdate(
    { username: req.body.username},
    { $push: { thoughts: newThought._id } },
    { new: true }
  );
if (!userThought) {
    return res.status(404).json({ message: 'Thought created but no user with this id!' });
  }
        res.json(userThought);

    } catch (err) {
        res.status(500).json(err);
    }
},
    // update thought

    async updateThought(req, res) {
        try {
            const fixedThought = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {thoughtText: req.body.thoughtText});
            if (!fixedThought) {
               return res.status(404).json({message: 'No such thought'})
            }
           res.json(fixedThought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    

};