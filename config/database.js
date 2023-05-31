import { Sequelize } from "sequelize";

const db = new Sequelize('aplikasi_taksasi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
