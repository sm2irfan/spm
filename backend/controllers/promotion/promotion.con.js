const Promotion = require('../model/promotion.model');

const createpromotion = async (req,res) => {
    if(req.body){
        const promotion = new Promotion(req.body);
        await promotion.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

const updatepromotion = async (req,res) => {
    if(req.body){
        await Promotion.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
    
}


const getallpromotion = async (req,res) => {
    await Promotion.find({})
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}


const getpromotion = async (req,res) => {
    await Promotion.findById(req.params.id)
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}


const deletepromotion = async(req,res) => {
    await Promotion.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json('error: '+err));
}

module.exports = {
    createpromotion,
    getallpromotion,
    deletepromotion,
    getpromotion,
    updatepromotion
}