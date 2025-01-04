const mongoose = require("mongoose");
// now to create a model
// step 1: require mongoose
// step 2: Create a mongoose schema( structre of a user)
// step 3: Create a model

const Playlist = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    thumbnail : {
        type: String,
        required: true,
    },
    owner : {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    songs : [ 
        {
            type: mongoose.Types.ObjectId,
            ref: "song",
        },
    ],
    collaborators: [ 
        {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    ],

});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;