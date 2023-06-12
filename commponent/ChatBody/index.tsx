"use client";
import { ReactElement } from "react";
import type { FC } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/navigation";
export interface IProps {
  children?: ReactElement;
  uservalue: string;
  messages: any;
}
const userName = localStorage.getItem("userName");
const ChatFooter: FC<IProps> = function (props) {
  const { children, messages, uservalue } = props;
  const router = useRouter();
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    router.push("/login");
  };
  console.log("mess", messages);

  return (
    <>
      <header className="chat__mainHeader">
        <h1>{uservalue}</h1>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          离开聊天
        </button>
      </header>

      <div className="message__container">
        {uservalue ? (
          messages
            .filter((item: any) => {
              return (
                item.chatName == uservalue ||
                (item.chatName == userName && item.name == uservalue)
              );
            })
            .map((message: any) =>
              message.name === localStorage.getItem("userName") ? (
                <div className="message__chats" key={message.id}>
                  <p className="sender__name">You</p>
                  <div className="message__sender">
                    <p>{message.text}</p>
                  </div>
                </div>
              ) : (
                <div className="message__chats" key={message.id}>
                  <p>{message.name}</p>
                  <div className="message__recipient">
                    <p>{message.text}</p>
                  </div>
                </div>
              )
            )
        ) : (
          <div>点击左侧用户立即开聊</div>
        )}

        <div className="message__status">{/* <p>有用户正在输入...</p> */}</div>
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => ({
  uservalue: state.username.uservalue,
});
export default connect(mapStateToProps)(ChatFooter);
ChatFooter.displayName = "ChatFooter";
