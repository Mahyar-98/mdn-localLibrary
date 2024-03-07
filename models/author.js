const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, required: true, maxLength: 100 },
    data_of_birth: { type: Date },
    data_of_death: { type: Date },
});

AuthorSchema.virtual('name').get(function(){
    let fullName = '';
    if (this.first_name && this.last_name) {
        fullName = `${first_name}, ${last_name}`;
    };
    return fullName
})

AuthorSchema.virtual('url').get(function(){
    return `/catalag/author/${this._id}`
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author