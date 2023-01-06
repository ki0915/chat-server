import express from "express";
import { Op } from "sequelize";

import Message from "../model/message.model";



const router = express.Router();

router.get("/:roomId/messages", async(req, res) => {
    const { roomId } = req.params;
    const { senderId } = req.query;
    
    if(!roomId || !senderId ) 
    {
      return res.status(400).json();
    }

    const messages = await Message.findAll({
        where: {
            roomId,
        }
    });

    if(!messages){
      return res.status(200).json();
    }

    const messageList = messages.map((message) => {
        return {
          id: message.senderId,
          time: message.createdAt,
          message: message.message,
          isMe: (senderId) == message.senderId,
        };
    });

    

    return res.status(200).json(messageList);
})

router.get("/friends/:addressId/messages", async(req, res) => {
  const { addressId } = req.params;
  const { userId } = req.query;

  if(!addressId || !userId) 
  {
    return res.status(400).json();
  }

  const messages = await Message.findAll({
      where: {
        [Op.or]: [
        {addressId,
        senderId: userId,},
        {addressId: userId,
        senderId: addressId}
        ]
      }
  });

  if(!messages){
    return res.status(200).json();
  }

  const messageList = messages.map((message) => {
      return {
        id: message.id,
        time: message.createdAt,
        message: message.message,
        senderId: message.senderId,
        isMe: (userId) == message.senderId,
      };
  });

  

  return res.status(200).json(messageList);
})


export default router;