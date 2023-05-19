const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const paymentSchema = mongoose.Schema({
 email:{
    type:String
 },
 phone:{
    type:String
 },
 subject:{
    type:String
 },
 message:{
    type:String
 },
});

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;
