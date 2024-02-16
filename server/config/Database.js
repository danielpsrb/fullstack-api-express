import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'postgres', 'danstech', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;