// import { Sequelize } from "sequelize";

const { Sequelize } = require('sequelize');

const db = new Sequelize('aplikasi_taksasi', 'root', '2631Mei2000', {
    host: 'localhost',
    dialect: 'mysql'
});

// export default db;
module.exports = db;
