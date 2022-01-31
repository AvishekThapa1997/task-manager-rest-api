import { getDbCredentials } from "../../util/envUtil";
import { Sequelize } from "sequelize";
const dBCredentials = getDbCredentials();
const dbConfig = new Sequelize(
  dBCredentials.dbName,
  dBCredentials.userName,
  dBCredentials.password,
  {
    host: dBCredentials.host,
    dialect: "mysql",
    logging: false,
    define: {
      freezeTableName: true,
    },
  }
);
export default dbConfig;
