const userSchema = require('../models/userSchema');

function testMiddleware(req,res,next){
    var jwt = require('jsonwebtoken');
    console.log(req.headers.authorization);
    const token = req.headers.authorization
    var decoded = jwt.verify(token, 'sadia');
    console.log(decoded.id);
    jwt.verify(token, 'sadia', function(err, decoded) {
        try {
            var decoded = jwt.verify(token, 'sadia');
            console.log(decoded.id);
            const users = userSchema.find({email: decoded.id});
            if (users.length >0){
                next();
            } else {
                res.json({err: "TUTHORIZATION FAILED"});   
            }
          } catch (err) {
            res.json({err: "TUTHORIZATION FAILED"});
          }
        
      });
    }
   


module.exports = testMiddleware;