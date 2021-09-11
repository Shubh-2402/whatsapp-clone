import mongoose from "mongoose";

const Messages = mongoose.model('Message',
 { name: String,
    message:String,
    timestamp:String,
    received:Boolean
});

export default Messages;