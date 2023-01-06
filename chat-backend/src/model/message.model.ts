import {
  AutoIncrement,
  Column,
  BelongsTo,
  ForeignKey,
  HasMany,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AllowNull,
} from "sequelize-typescript";
import User from "./user.model";

@Table
export default class Message extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  @ForeignKey(() => User)
  senderId: string;

  @Column
  chatId: bigint;

  @Column
  roomId: string;

  @Column
  addressId: string;

  @Column(DataType.STRING(2048))
  message: string;

  @Column(DataType.BOOLEAN)
  isReade: boolean;
}