var workexp1 = require("../model/modelcv")


exports.test= (req,res)=>{
    res.send("This is Test Route!")
}

exports.create= (req,res,next)=>{
    let workexp = new workexp1({
        workexp: req.params.workexp,
        
    })

        workexp.save((err)=>{
            if(err){ return next(err)}
            res.send("workexp Added")
         
        })}

exports.delete= (req,res)=>{
    lang1.findByIdAndDelete(req.params.id, (err)=>{
        if (err) return next(err);
        res.send("workexperience Deleted!!!!!")
})}

exports.details = function (req, res) {
    workexp1.findById(req.params.id, function (err,workexp) {
            if (err) return next(err);
            res.send(workexp);
        })
    };

exports.update=(req,res)=>{
    workexp.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,workexp)=>{
        if(err) return next (err);
        res.send("workexperience Updated!!!") 
    })}   
