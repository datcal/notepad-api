const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const NoteSchema = new Schema({
	content : String,
    created_at : {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('note', NoteSchema);