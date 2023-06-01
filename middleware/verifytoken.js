// import jwt from "jsonwebtoken";

const jwt = require("jsonwebtoken");

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.status(401).json({ message: "Anda belum login" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.userId = decoded.userId;
        next();
    });
}