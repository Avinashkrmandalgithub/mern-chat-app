import React from 'react'
import { useEffect } from 'react';

import { useSocketContext } from '../context/SocketContext'
import useConversation from '../Zustand/useConversation'

import notifiactionSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notifiactionSound);
      sound.play();
      setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage")
  }, [socket, setMessages, messages]);

}

export default useListenMessages
