// import User from "../models/usermodels.js";
// import jwt from "jsonwebtoken";

const User = require('../models/usermodels.js');
const jwt = require('jsonwebtoken');

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(400).json({ message: "Anda belum login" });
        const user = await User.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.status(400).json({ message: "Anda belum login" });
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(400).json({ message: "Token tidak valid" });
            const userId = user[0].id;
            const username = user[0].username;
            const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
            res.json({ accessToken });
        });
        } catch (error) {
            console.log(error);
        }
    }