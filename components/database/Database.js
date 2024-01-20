import { Sequelize } from "sequelize";
import "dotenv/config";

let db_host = process.env.db_server;
let db_user = process.env.db_username;
let db_pass = process.env.db_password;
let db_name = process.env.db_name;
let db_port = process.env.db_port;

const sequelize = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: "mysql",
  port: db_port,
  logging: (...msg) => console.log(msg),
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default {sequelize, connection};
