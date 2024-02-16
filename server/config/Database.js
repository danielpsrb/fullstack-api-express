import { Sequelize } from "sequelize";

const db = new Sequelize('DBname', 'hostDB', 'passwordDB', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;
