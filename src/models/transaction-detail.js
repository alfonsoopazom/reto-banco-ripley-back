import mongoose from "mongoose";
const {Schema} = mongoose;

const transactionDetailSchema = new Schema({
    originClientRut : {type: String},
    createdAt: {type: Date, default: Date.now()},
})

const TransactionDetailInfo = mongoose.model('transaction-detail', transactionDetailSchema);

export default TransactionDetailInfo;
