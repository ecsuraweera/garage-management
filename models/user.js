import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    customerId : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true

    },
    phone : {
        type : String,
        required : true
    },
    whatsAppNo: {
        type : String,
        required : true
    },
    profilePicture : {
        type : String,
        required : true,
        default : "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
    },
    eidNumber : {
        type : String,
        unique: true,
        minlength: 8,
        maxlength: 20
        
    },
    customerLocation: {
        latitude: {
          type: Number,
          required: false
        },
        longitude: {
          type: Number,
          required: false
        }
    }
    

});

const User = mongoose.model("User",userSchema);

export default User;