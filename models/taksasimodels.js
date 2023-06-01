// import { Sequelize } from "sequelize";
// import db from "../config/database.js";

const { Sequelize } = require('sequelize');
const db = require('../config/database.js');

const { DataTypes } = Sequelize;

const Taksasi = db.define('taksasi_harian', {
    id_petugas: {
        type: DataTypes.INTEGER
    },
    tanggal: {
        type: DataTypes.DATE
    },
    nama_blok: {
        type: DataTypes.STRING
    },
    luas_panen: {
        type: DataTypes.INTEGER
    },
    pokok_total_panen: {
        type: DataTypes.INTEGER
    },
    pokok_sample: {
        type: DataTypes.INTEGER
    },
    buah_matang: {
        type: DataTypes.INTEGER
    },
    angka_kerapatan_panen: {
        type: DataTypes.INTEGER
    },
    jumlah_tandan: {
        type: DataTypes.INTEGER
    },
    jumlah_produksi: {
        type: DataTypes.INTEGER
    },
    tenaga_kerja: {
        type: DataTypes.INTEGER
    },
    transportassi: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
});

export default Taksasi;