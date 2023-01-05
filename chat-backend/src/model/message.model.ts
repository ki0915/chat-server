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
} from "sequelize-typescript";
import User from "./user.model";
import Chat from "./chat.model";

@Table
export default class Message extends Model {
  @PrimaryKey
  @Column(DataType.STRING(20))
  id: string;

  @Column
  @ForeignKey(() => User)
  senderId: string;

  @Column
  @ForeignKey(() => Chat)
  chatId: string;

  @Column(DataType.STRING(2048))
  message: string;

  @Column(DataType.BOOLEAN)
  isReade: boolean;
}
