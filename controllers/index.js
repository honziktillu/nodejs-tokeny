exports.welcomePage = (req, res) => {
    res.status(200).send({msg: "Hello!"});
};