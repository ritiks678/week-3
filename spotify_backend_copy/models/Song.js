const mongoose = require("mongoose");
// now to create a model
// step 1: require mongoose
// step 2: Create a mongoose schema( structre of a user)
// step 3: Create a model

const Song = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    thumbnail : {
        type: String,
        required: true,
    },
    track : {
        type: String,
        required: true,
    },
    artist : {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    

});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;