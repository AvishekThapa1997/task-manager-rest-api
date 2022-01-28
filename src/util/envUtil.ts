import dotenv from "dotenv";
dotenv.config();

export const getDbCredentials: () => {
  dbName: string;
  userName: string;
  password: string;
  host: string;
} = () => {
  return {
    dbName: process.env.DB_NAME!,
    userName: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    host: process.env.DB_HOST!,
  };
};
