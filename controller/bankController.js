const Bank = require("../model/bank")

exports.getBank = async (req,res)=> {
    try {
        const data = await Bank.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postBank = async (req,res)=>{
    try {
        const data = await Bank.create(req.body)
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putBank =async (req,res) => {
    try {
        const data = await Bank.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteBank = async (req,res)=>{
    try {
        const data =await Bank.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}