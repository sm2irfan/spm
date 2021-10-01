const Customer = require("../../model/customer/customer");
const fs = require("fs");
const path = require("path");

const PDFDocument = require("pdfkit");

const signupcustomer = async (req, res) => {
  const { firstname, lastname, address, city, phone, email, password } =
    req.body;

  const exisitingAdmin = await Customer.findOne({ email: email });

  if (exisitingAdmin) {
    console.error("Email used in already");
    res.status(201).json({ massage: "Error" });
  } else {
    const createCustomer = new Customer({
      firstname,
      lastname,
      address,
      city,
      phone,
      email,
      password,
    });
    await createCustomer.save();
    res.status(200).json(createCustomer);
  }
};

const logincustomer = async (req, res) => {
  const { email, password } = req.body;

  let existingUser = await Customer.findOne({ email: email });

  if (!existingUser || existingUser.password !== password) {
    console.log("Error");
    res.status(201).json({ massage: "Error" });
  } else {
    res.status(200).json(existingUser);
  }
};

const updatecustomer = async (req, res) => {
  const { firstname, lastname, address, city, phone, email, password } =
    req.body;
  const customerId = req.params.id;

  const updateCustomer = await Customer.findById(customerId);

  updateCustomer.firstname = firstname;
  updateCustomer.lastname = lastname;
  updateCustomer.address = address;
  updateCustomer.city = city;
  updateCustomer.phone = phone;
  updateCustomer.email = email;
  updateCustomer.password = password;

  await updateCustomer.save();

  res.status(200).json({ customer: updateCustomer });
};

const deletecustomer = async (req, res) => {
  const customerId = req.params.id;
  const deleteCustomer = await Customer.findById(customerId);

  await deleteCustomer.remove();

  res.status(200).json({ Customer });
};

const getcustomerById = async (req, res, next) => {
  const customerID = req.params.id;
  const customer = await Customer.findById(customerID);
  res.json(customer);
};

const pdfgenarate = async function (req, res, next) {
  const customerID = req.params.id;
  const customer = await Customer.findById(customerID);

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
    .text(`-------------------Customer Profile-------------------`);

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
    .text(`Customer ID          : ${customer._id}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer firstname : ${customer.firstname}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer lastname  : ${customer.lastname}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer address    : ${customer.address}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer city         : ${customer.city}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer phone      : ${customer.phone}`);
  myDoc
    .font("Times-Roman")
    .fontSize(15)
    .text(`Customer email       : ${customer.email}`);

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
    .fontSize(20)
    .text(`-----------------------------------------------------------`);
  myDoc
    .font("Times-Roman")
    .fontSize(20)
    .text(`                                                           `);

  myDoc
    .font("Times-Roman")
    .fontSize(20)
    .text(`                                                           `);
  myDoc
    .font("Times-Roman")
    .fontSize(20)
    .text(`                                                           `);
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

exports.signupcustomer = signupcustomer;
exports.logincustomer = logincustomer;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;
exports.getcustomerById = getcustomerById;
exports.pdfgenarate = pdfgenarate;
