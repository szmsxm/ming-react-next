"use client";
import { ReactElement, useState } from "react";
import type { FC } from "react";
import { connect } from "react-redux";
export interface IProps {
  children?: ReactElement;
  socket: any;
  uservalue: string;
  handleSocket: any;
}
const ChatBar: FC<IProps> = function (props) {
  const { children, socket, uservalue = "默认", handleSocket } = props;
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: any) => {
    e.preventDefault();

    if (message.trim() && localStorage.getItem("userName")) {
      console.log("发送");
      const info = {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        chatName: uservalue,
      };
      socket.emit("hello", info);

      handleSocket(info);
    }
    setMessage("");
  };

  return (
    <div className="chat__footer">
      {uservalue ? (
        <form className="form" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="编写消息"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sendBtn">发送</button>
        </form>
      ) : (
        <div>点击左侧用户立即开聊</div>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  uservalue: state.username.uservalue,
});
export default connect(mapStateToProps)(ChatBar);
ChatBar.displayName = "ChatBar";
