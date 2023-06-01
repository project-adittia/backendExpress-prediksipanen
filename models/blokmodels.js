// import { Sequelize } from "sequelize";
// import db from "../config/database.js";

const { Sequelize } = require('sequelize');
const db = require('../config/database.js');

const { DataTypes } = Sequelize;

const Blok = db.define('blok', {
    nama_blok: {
        type: DataTypes.STRING
    },
    tahun_tanam: {
        type: DataTypes.STRING
    },
    jumlah_pokok: {
        type: DataTypes.INTEGER
    },
    rbt: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
});

export default Blok;