// import { Sequelize } from "sequelize";
// import db from "../config/database.js";

const { Sequelize } = require('sequelize');
const db = require('../config/database.js');

const { DataTypes } = Sequelize;

const Database = db.define('database_real', {
    tanggal: {
        type: DataTypes.DATE
    },
    nama_blok: {
        type: DataTypes.STRING
    },
    taksasi_manual: {
        type: DataTypes.INTEGER
    },
    produksi_real: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
});

export default Database;
