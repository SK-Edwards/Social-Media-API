const { Schema, model} = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema({
thoughtText: {type: String, require: true, minlength: 1, maxlength: 280},
createdAt: { type: Date, default: Date.now },
username: {type: String, required: true},
reactions: [reactionSchema]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;