import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  DataType,
} from "sequelize-typescript";
import User from "./user.model";

@Table
export default class Friend extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: bigint;

  @ForeignKey(() => User)
  userId: string;

  @ForeignKey(() => User)
  friendId: string;

  @BelongsTo(() => User, "friendId")
  friendUser: User;
}