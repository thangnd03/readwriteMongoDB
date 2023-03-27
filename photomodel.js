const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nguyenthang070103:thanglodc123@cp17303_db.8hgo261.mongodb.net/?retryWrites=true&w=majority");
const PhotoSchema = new mongoose.Schema({
    id: String,
    albumId: String,
    title: String,
    url: String,
    thumbnailUrl: String
},{
    timestamps:true,
});
const PhotoModel = mongoose.model('baitap', PhotoSchema);
module.exports = PhotoModel;