const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    name: {type: String, required:true},
    detail: {type: String, required:true},
    discount: {type: Number, required:true},
    from: {type: Date, required:true},
    to: {type: Date, required:true},
    decision: {type: String, required:true},
    photo: {
        type: String
    }
});

const Promotion = mongoose.model('promotions', PromotionSchema);
module.exports = Promotion;