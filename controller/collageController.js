const Collage = require("../model/collage")

exports.getCollage = async (req,res) => {
    try {
        const data = await Collage.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postCollage = async (req,res) => {
    try {
        const data = await Collage.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putCollage = async (req,res) => {
    try {
        const data = await Collage.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

exports.deleteCollage = async (req,res)=>{
    try {
        const data = await Collage.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}