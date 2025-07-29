import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({message: "No authorization header provided"});

    // Extract the token from the header
    const token = authHeader.split(" ")[1];
    // Check if the token exists
    if(!token) return res.status(401).json({message: "No token provided"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
        res.status(400).json({message: "Invalid Token"});
    }
}