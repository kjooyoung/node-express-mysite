var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment')
//db connection

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/webdb', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// schema
var user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    joinDate: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

autoIncrement.initialize(mongoose.connection);
user.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', user);