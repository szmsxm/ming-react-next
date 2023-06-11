"use client";
import { ReactElement } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import type { FC } from "react";
import style from "styled-components";
import { useRouter } from "next/navigation";
import { LoginWrapper } from "./style";
export interface IProps {
  children?: ReactElement;
}
const Login: FC<IProps> = function (props) {
  const { children } = props;
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    router.push("/");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LoginWrapper>
      <div className="login">
        <h1 className="title">即时通讯教学</h1>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="帐号"
            name="username"
            rules={[{ required: true, message: "请输入帐号！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 3, span: 16 }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
            <Button type="primary" block={true} htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
};

export default Login;
Login.displayName = "Login";
