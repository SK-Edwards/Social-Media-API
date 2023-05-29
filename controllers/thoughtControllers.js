const { Thought } =  require('../models')

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
            res.json(newThought);

        } catch (err) {
            res.status(500).json(err);
        }
    }

};