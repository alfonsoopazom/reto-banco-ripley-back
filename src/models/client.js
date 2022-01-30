import mongoose from "mongoose";
const { Schema } = mongoose;

const destinatarioInfoSchema = new Schema({
    name: {type: String, unique: true, required: true},
    rut: {type: String, unique: true, required: true},
    email: {type: String, max: 50, unique: true, required: true},
    phoneNumber: String,
    targetBank: {type: String, unique: true, required: true},
    accountType: {type: String, unique: true, required: true},
    accountNumber: {type: String, unique: true, required: true},
    createdAt: { type: Date, default: Date.now()},
});

const DestinatarioInfo = mongoose.model('destinatario-info', destinatarioInfoSchema);

export default DestinatarioInfo;
