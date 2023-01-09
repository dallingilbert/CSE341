const getNames = (req, res) => {
    console.log('Getting names\n');
    res.send('Dallin Gilbert');
}

module.exports = { getNames };