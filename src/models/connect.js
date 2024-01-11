import { Sequelize } from "sequelize";
import databaseConfig from "../config/db.config.js";

let {
  databaseHost,
  databasePort,
  databasUser,
  databasePass,
  databaseDialect,
  databaseName,
} = databaseConfig;

const sequelize = new Sequelize(databaseName, databasUser, "1234", {
  host: databaseHost,
  port: databasePort,
  dialect: databaseDialect,
});
export default sequelize;
