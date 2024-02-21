//importing jsonwebtoken node.js package for authorization
const jwt = require("jsonwebtoken");

module.exports = async (req,res,next)=>{
   // Request headers provide context to the server
    //about the client's capabilities, preferences, and the content of the request.

   // Authorization: Contains credentials that are used to authenticate the client with the server.
  // This header is commonly used for implementing various authentication mechanisms,
  // such as Basic Authentication or OAuth.
    const token = req.header("Authorization");

    //if token is not present
    if(!token)
    {
       return res.json.status(401).json({
           msg:"No token, Authorization Denied"
       })
    }
    else
    {
        try{
            await jwt.verify(token,process.env.JWTUSERSECRETTOKEN,(err,decoded)=>{
                if(err)
                {
                    res.status(401).json({
                        msh:"Token not valid"
                    });
                }
                else
                {
                    req.user = decoded.user;
                    next();
                }
            })
        }
        catch (err)
        {
            console.log("Something went wrong "+err);
            res.json.status(500).json({
                msg:"Server Error"
            })
        }
    }
}