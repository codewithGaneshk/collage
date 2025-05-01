const Cloth = require("../model/cloths")

exports.getCloth = async (req,res)=>{
    try {
        const data = await Cloth.find()
        return res.json({errors:false,data:data})
    } catch (error) {
      return res.status(500).json({errors:true,message:error.message})  
    }
}
exports.postCloth = async (req,res)=>{
    try {
        const data = await Cloth.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.putCloth = async (req,res)=>{
    try {
        const data = await Cloth.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteCloth = async (req,res)=>{
    try {
        const data = await Cloth.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,mesage:error.message})
    }
}