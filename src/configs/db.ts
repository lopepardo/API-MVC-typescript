import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: "./env/.env" });

const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PWD!, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "mysql",
  logging: false,
});

export { sequelize };
