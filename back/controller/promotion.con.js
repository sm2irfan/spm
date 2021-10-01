const Promotion = require('../model/promotion.model');
const PDFDocument = require("pdfkit");

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

const pdfpromotion = async function (req, res, next) {
    const customerID = req.params.id;
    const customer = await Promotion.findById(customerID);
  
    var myDoc = new PDFDocument({ bufferPages: true });
  
    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
      let pdfData = Buffer.concat(buffers);
      res
        .writeHead(200, {
          "Content-Length": Buffer.byteLength(pdfData),
          "Content-Type": "application/pdf",
          "Content-disposition": "attachment;filename=customer.pdf",
        })
        .end(pdfData);
    });
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`------------------${customer.name} Promotional product--------------------`);
  
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`-----------------------------------------------------------`);
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`-----------------------------------------------------------`);
  
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`Product Name : ${customer.name}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`Detail : ${customer.detail}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`Discount : ${customer.discount}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`From : ${customer.from}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`To : ${customer.to}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`decision : ${customer.decision}`);
    myDoc
      .font("Times-Roman")
      .fontSize(15)
      .text(`Photo : ${customer.photo}`);
  
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`-----------------------------------   ------------------------`);
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`-------------                                      -------------`);
    myDoc
      .font("Times-Roman")
      .fontSize(20)
      .text(`Date                                                Signature`);
    myDoc.end();
  };

module.exports = {
    createpromotion,
    getallpromotion,
    deletepromotion,
    getpromotion,
    updatepromotion,
    pdfpromotion
}