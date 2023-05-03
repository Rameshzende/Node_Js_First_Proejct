

const getContacts = (req, res) => {
    res?.status(200).json({"Message" : "Request Sent Back by th file 123"})
}

const createContact = (req, res) => {
     console.log('The request Body is: ', req.body)
    const {name, email, phNo } = req.body
    if(!name || !email || !phNo) {
        res.status(400);
        throw new Error("All Fields are mandatory")
    }
    res.status(201).json({"Message" : `Conatct Created ${req.params.id}`})
}

const getContact = (req, res) => {
    res.status(200).json({"Message": `get the Contatc for ${req?.params.id}`})
}

const upDateContact = (req, res) => {
    res.status(200).json( {"Message" : `contact is updated for ${req.params.id}`})
}

const deleteContact = (req, res) => {
    res.status(200).json({"messgase": `contact is deleted for this ${req.params.id}`})
}
module.exports = { getContacts, createContact, getContact, upDateContact, deleteContact}