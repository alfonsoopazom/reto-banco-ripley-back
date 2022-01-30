import mongoose from "mongoose";
const {Schema} = mongoose;

const transactionInfoSchema = new Schema({
    originClientRut: { type: String},
    value: {type: Number, min: 1},
    createdAt: {type: Date, default: Date.now()},
    DestinationObject: {type: Object}
})

const TransactionInfo = mongoose.model('transaction-info', transactionInfoSchema)

export default TransactionInfo;
