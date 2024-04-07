
const {JWT_SECRET} = require('./config')
const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg:" not starting with bearer"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        if(decoded.userId){

            req.userId = decoded.userId;
        } else {
            return res.status(403).json({});
        }
      next();  
    } catch (err) {
        return res.status(403).json({
            msg: err
        });
    }
};

module.exports = {
    authMiddleware
}