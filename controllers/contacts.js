const { ObjectID } = require('bson');
const mongodb = require('../db/connection');

const getContacts = async (req, res) => {
    const result = await mongodb.getDb().db("week02").collection("contacts").find();
    result.toArray().then(lists => {
        res.setHeader('Content-Type', "application/json");
        res.status(200).json(lists);
    })
}

const getContactById = async (req, res) => {
    const id = ObjectID(req.params.contactId);
    //console.log(id);
    const result = await mongodb.getDb().db("week02").collection("contacts").find({_id: id});
    result.toArray().then(contacts => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    })
}

module.exports = { getContacts, getContactById }