const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const bearerToken = bearerHeader.split(" ")[1];

    if (!bearerToken) {
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decoded = jwt.verify(bearerToken, config.ACCESS_TOKEN_SECRET);
        req.user = decoded.username;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;