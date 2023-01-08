const getNames = (req, res, next) => {
    res.json({userName: "Dallin Gilbert"});
}

module.exports = { getNames };