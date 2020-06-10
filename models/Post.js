const mongoose = require('mongoose');
const format = require('date-format');

let time = format.asString('hh:mm', new Date());
let date = format.asString('dd:MM:yy', new Date());



const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: 'Added: '+time+" "+date
    },

});

module.exports = mongoose.model('Posts',PostSchema);