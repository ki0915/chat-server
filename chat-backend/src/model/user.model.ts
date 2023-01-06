import {
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Friend from "./friend.model";

@Table
export default class User extends Model {
  @PrimaryKey
  @Column(DataType.STRING(20))
  id: string;

  @Column(DataType.STRING(20))
  password: string;

  @HasMany(() => Friend)
  myFriends: User[];
}