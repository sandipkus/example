const userModel = require('../models/createModel')

const createUser = async function (req, res){
    let data = req.body;
    let save = await userModel.create(data);

    res.send({status:true, msg:"Created Successfully", data:save})
}

module.exports.createUser = createUser