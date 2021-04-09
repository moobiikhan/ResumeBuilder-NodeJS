var education1 = require("../model/modelcv")


exports.test= (req,res)=>{
    res.send("This is Test Route!")
}

exports.create= (req,res,next)=>{
    let education = new education1({
        education: req.params.education,
        
    })

        education.save((err)=>{
            if(err){ return next(err)}
            res.send("Education Added!")
         
        })}

exports.delete= (req,res)=>{
    education.findByIdAndDelete(req.params.id, (err)=>{
        if (err) return next(err);
        res.send("Education Deleted!!!!!")
})}

exports.details = function (req, res) {
    education.findById(req.params.id, function (err,Education) {
            if (err) return next(err);
            res.send(education);
        })
    };

exports.update=(req,res)=>{
    education.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,education)=>{
        if(err) return next (err);
        res.send("Education Updated!!!") 
    })}   
