const { Schema, model} = require('mongoose');


const reactionSchema = new Schema({
reactionId: {type: Schema.Types.ObjectId },
reactionBody: {type: String, required: true, maxlength: 280},
username: { type: Schema.Types.ObjectId, ref: 'User'},
createdAt: { type: Date, default: Date.now }

});




const thoughtSchema = new Schema({
thoughtText: {type: String, require: true, minlength: 1, maxlength: 280},
createdAt: { type: Date, default: Date.now },
username: {type: String, required: true},
reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;