const mongoose = require("mongoose");
// now to create a model
// step 1: require mongoose
// step 2: Create a mongoose schema( structre of a user)
// step 3: Create a model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    likedSongs: {
        // we will change this to array later
        type: String,
        default: "",
    },
    likedPlaylists: {
        // we will change this to array later
        type: String,
        default: "",
    },
    subscribedArtists: {
        // we will change this to array later
        type: String,
        default: "",
    }

});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;