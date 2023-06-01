// import express from "express";
// import { getUsers, Login, Logout, Register, VerifyUsers } from "../controllers/users.js";
// import { verifyToken } from "../middleware/verifytoken.js";
// import { refreshToken } from "../controllers/refreshtoken.js";
// import { getBlok } from "../controllers/Blok.js";
// import { getTaksasi, addTaksasi, historyUser } from "../controllers/taksasi_harian.js";
// import { getResult } from "../controllers/result.js";

const express = require('express');
const { getUsers, Login, Logout, Register, VerifyUsers } = require('../controllers/users.js');
const { verifyToken } = require('../middleware/verifytoken.js');
const { refreshToken } = require('../controllers/refreshtoken.js');
const { getBlok } = require('../controllers/Blok.js');
const { getTaksasi, addTaksasi, historyUser } = require('../controllers/taksasi_harian.js');
const { getResult } = require('../controllers/result.js');


const router = express.Router();

//user
router.get('/api/users', verifyToken, getUsers)
router.post('/api/signup', Register)
router.post('/api/login', Login)
router.get('/api/token', refreshToken)
router.delete('/api/logout', Logout)

//User
router.get('/api/alluser', getUsers)
router.post('/api/history', historyUser)
router.put('/api/verify/:userId', VerifyUsers)

//blok detail
router.get('/api/blok', getBlok)

//taksasi
router.get('/api/taksasi', getTaksasi)
router.post('/api/taksasi', addTaksasi)

//hasil
router.get('/api/result', getResult)

// export default router;
module.exports = router;