import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelize = new Sequelize("chatsite", "root", "123456", {
  dialect: "mysql",
  models: [path.join(__dirname, "../model")],
});

export default sequelize;
