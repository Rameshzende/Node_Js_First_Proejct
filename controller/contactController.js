const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res?.status(200).json(contact)
})

const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone } = req.body
    
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email, 
        phone
    })
    res.status(201).json(contact)
})

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not found")
    }
    
    res.status(200).json(contact)
})

const upDateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )

    res.status(200).json(updatedContact)
})

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({"messgase": `contact is deleted for this ${req.params.id}`})
})

module.exports = { getContacts, createContact, getContact, upDateContact, deleteContact}