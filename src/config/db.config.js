import dotenv from "dotenv";
dotenv.config();

const databaseConfig = {
  databaseHost: process.env.DB_HOST,
  databasUser: process.env.DB_USERNAME,
  databasePort: process.env.DB_PORT,
  databaseDialect: process.env.DB_DIALECT,
  databaseName: process.env.DB_NAME,
};

console.log(databaseConfig);
export default databaseConfig;
