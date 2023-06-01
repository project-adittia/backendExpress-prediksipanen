// import { Sequelize } from "sequelize";
// import db from "../config/database.js";

const { Sequelize } = require('sequelize');
const db = require('../config/database.js');

const { DataTypes } = Sequelize;

const User = db.define('akun_user', {
    nama: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.BOOLEAN
    },
    Role: {
        type: DataTypes.STRING
    },
    verified: {
        type: DataTypes.BOOLEAN
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default User;