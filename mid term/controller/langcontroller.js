var lang1 = require("../model/modelcv")


exports.test= (req,res)=>{
    res.send("This is Test Route!")
}

exports.create= (req,res,next)=>{
    let lang = new lang1({
        lang: req.params.lang,
        
    })

        lang.save((err)=>{
            if(err){ return next(err)}
            res.send("Language Added")
         
        })}

exports.delete= (req,res)=>{
    lang1.findByIdAndDelete(req.params.id, (err)=>{
        if (err) return next(err);
        res.send("Language Deleted!!!!!")
})}

exports.details = function (req, res) {
    lang1.findById(req.params.id, function (err,lang1) {
            if (err) return next(err);
            res.send(lang);
        })
    };

exports.update=(req,res)=>{
    lang1.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,lang)=>{
        if(err) return next (err);
        res.send("language Updated!!!") 
    })}   
