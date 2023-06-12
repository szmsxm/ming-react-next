"use client";
import { ReactElement } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import { LoginWrapper } from "./style";
import Srequests from "@/serviece";
import { setCookie } from "cookies-next";

const Login: FC = function (props) {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log(values);

    Srequests.post("/auth/login", {
      username: values.username,
      password: values.password,
    }).then((res: any) => {
      console.log(res);

      if (res.code == 200) {
        setCookie("token", res.data, { maxAge: 1000 });
        router.push("/chat");
        localStorage.setItem("userName", values.username);
      }
    });

    // console.log("Success:", values);
    // router.push("/");
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
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
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
