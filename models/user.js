const { Schema, model } = require('mongoose');




const userSchema = new Schema({
    username: {type: String, unique: true, required: true, trim: true},
    emai: {type: String, unique: true, required: true,  validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        }
       }
    },
    thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const User = model('User', userSchema);


module.exports = User;