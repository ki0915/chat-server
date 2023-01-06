import { Op } from "sequelize";
import { ChatEmitEvent, getSocket } from "../config/websocket";
import Message from "../model/message.model";

type ReceiveMessageType = {
  chatId: string;
  senderId: string;
  message: string;
  roomId: number;
  addressId: string;
};

type ReadMessageType = {
  chatId: number;
  recevierId: number;
};

export const receiveMessage = async (received: ReceiveMessageType) => {
  const { addressId, roomId, chatId, senderId, message } = received;
  const newMessage = await Message.create({
    senderId,
    roomId,
    addressId,
    chatId,
    message,
    isRead: false,
  });

  console.log(chatId);
  const namespace = getSocket();
  namespace.to(`chat-${chatId}`).emit(ChatEmitEvent.RECEIVE_MESSAGE, {
    chatId,
    senderId,
    addressId,
    id: newMessage.id,
    message,
    isRead: false,
    time: newMessage.createdAt,
  });
};

export const readMessage = async (readEvent: ReadMessageType) => {
  const { chatId, recevierId } = readEvent;
  await Message.update(
    {
      isRead: true,
    },
    {
      where: {
        chatId,
        senderId: {
          [Op.not]: recevierId,
        },
      },
    }
  );
};