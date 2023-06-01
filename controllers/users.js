// import User from "../models/usermodels.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { DataTypes } from "sequelize";

const User = require('../models/usermodels.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { DataTypes } = require('sequelize');

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "nama", "role", "verified"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const VerifyUsers = async (req, res) => {
  const idUser = req.params.userId;
  const user = await User.findByPk(idUser);
  try {
    if(!user) return res.status(400).json({ message: "User tidak ditemukan" });

    user.verified = true;
    await user.save();

    res.json({ message: "Berhasil verifikasi" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Gagal verifikasi" });
  }
}

export const Register = async (req, res) => {
  const { name, username, password, role, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ message: "Password tidak sama" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      nama: name,
      username: username,
      Role: role,
      //   password: hashPassword,
      password: hashPassword,
    });
    res.json({ message: "Berhasil mendaftar" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        username: req.body.username,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ message: "Password salah" });

    const UserId = user[0].id;
    const username = user[0].username;
    const role = user[0].Role;
    const accessToken = jwt.sign(
      { UserId, username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      { UserId, username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: UserId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ UserId, accessToken, role });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res.status(400).json({ message: "Anda belum login" });
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.status(400).json({ message: "Anda belum login" });
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: user[0].id,
      },
    }
  );
  res.clearCookie("refreshToken");
  res.json({ message: "Berhasil logout" });
};
