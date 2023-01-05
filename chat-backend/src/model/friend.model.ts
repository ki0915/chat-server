import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./user.model";

@Table
export default class Friend extends Model {
  @PrimaryKey
  @Column
  @ForeignKey(() => User)
  userId: string;

  @ForeignKey(() => User)
  friendId: string;

  @BelongsTo(() => User, "friendId")
  frienduser: User;
}
