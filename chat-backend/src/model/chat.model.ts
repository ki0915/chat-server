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
  import Message from "./message.model";
  import User from "./user.model";
  
  @Table
  export default class Chat extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: bigint;
  
    @Column
    @ForeignKey(() => User)
    userId: string;
  
    @Column
    @ForeignKey(() => User)
    friendId: string;
  
    @BelongsTo(() => User, "friendId")
    friend: User;
  
    @HasMany(() => Message, "chatId")
    messages: Message[];
  }