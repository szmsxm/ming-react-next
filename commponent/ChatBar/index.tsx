"use client";
import { ReactElement, useEffect, useState } from "react";
import type { FC } from "react";
import { connect } from "react-redux";

import { getAllUser } from "@/serviece/chat";
import { changeName } from "@/store/store";
import { ChatBarWrapper } from "./style";
import { Image } from "antd";
export interface IProps {
  children?: ReactElement;
  socket: any;
  uservalue: string;
  changeName: any;
  clearSocket: any;
}
const username = localStorage.getItem("userName");

const ChatBar: FC<IProps> = function (props) {
  const { children, socket, uservalue, clearSocket } = props;
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    getAllUser().then((res: any) => {
      console.log("user", res);
      setUsers(res.data);
    });
  }, []);
  const username = localStorage.getItem("userName");
  function chatName(item: any) {
    console.log(item);
    props.changeName(item.username);
  }
  return (
    <ChatBarWrapper>
      <div className="chat__sidebar">
        <h2>自由聊天</h2>

        <div>
          <h4 className="chat__header">在线用户</h4>
          <div className="chat__users">
            {users
              .filter((item) => {
                return item.username !== username;
              })
              .map((item) => {
                return (
                  <div
                    onClick={(e) => chatName(item)}
                    style={{
                      backgroundColor:
                        uservalue == item.username ? "#d0cfcf" : "#f8f5eb",
                    }}
                    key={item.username}
                  >
                    <Image height={"20px"} src={item.avatar}></Image>
                    {" " + item.username}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </ChatBarWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  uservalue: state.username.uservalue,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeName(name: string) {
    dispatch(changeName(name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatBar);
ChatBar.displayName = "ChatBar";
