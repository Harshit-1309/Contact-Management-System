const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//desc Get All Contacts
//route GET /api/contacts
//@access private

const getContacts = asyncHandler(async (req, res) => {
  // console.log("");
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//desc Create New Contact
//route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res) => {
  console.log("The req body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json("All fields are mandatory...!!");
    //    throw new Error();
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//desc Get Contact by id
//route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).catch((err) => {
    res.status(404).json("Contact Not Found !!");
  });
  // console.log(contact);

  // if (!contact) {

  // throw new Error.json("Contact Not Found !!");
  res.status(200).json(contact);
});

//desc Update contacts
//route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).catch((err) => {
    res.status(404).json("Contact Not Found !!");
  });

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//desc Delete contacts
//route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(400);
    throw new Error("Contact Not Found");
  }
  // .findOneAndRemove()
  // .catch((err) => {
  //   res.status(404).json("Contact Not Found !!");
  // });

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to delete");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json("Deleted");
  //   res.status(200).json("Deleted");
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
