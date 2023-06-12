"use client";
import ChatBar from "@/commponent/ChatBar";
import ChatBody from "@/commponent/ChatBody";
import ChatFooter from "@/commponent/ChatFooter";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Provider } from "react-redux";
import store from "../../store/index";

const socket = io("http://localhost:9892");

const Chat: FC = function (props) {
  const [messages, setMessages] = useState<any[]>([]);
  const RefMessage = useRef<any[]>();
  RefMessage.current = messages;
  const handleSocket = useCallback((data: any) => {
    console.log(data);

    setMessages([...(RefMessage.current as any[]), data]);
  }, []);
  const clearSocket = () => {
    setMessages([]);
  };
  useEffect(() => {
    console.log("开始监听");

    socket.on("hello" + localStorage.getItem("userName"), handleSocket);
    console.log("监听了");

    return () => {
      socket.off("hello", handleSocket);
    };
  }, [socket, messages]);
  return (
    <Provider store={store}>
      <div className="chat">
        <ChatBar socket={socket} clearSocket={clearSocket} />
        <div className="chat__main">
          <ChatBody messages={messages} />
          <ChatFooter socket={socket} handleSocket={handleSocket} />
        </div>
      </div>
    </Provider>
  );
};
export default Chat;
Chat.displayName = "Chat";
