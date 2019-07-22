import React, { Component } from "react";
import { Form, Icon, Input, Button, Spin } from "antd";

import history from "../../../history";
import "./login.css";

import { setToken, getToken } from "../../../Utils/token";
import { loginByUsername, callApi } from "../../../Services/AuthServices";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      isLoading: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isLogin === false) {
      this.setState({
        isLogin: true,
        isLoading: true
      });
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          try {
            JSON.stringify(values);
            await callApi("api/token", "POST", values).then(res =>
              setToken(res.data.token)
            );

            setTimeout(() => {
              history.push("/admin");
            }, 1000);
          } catch (e) {
            this.setState({ isLogin: false, isLoading: false });
          }
        }
      });
    }
  };

  componentWillMount() {
    const token = getToken();

    if (token) {
      history.push("/admin");
    }
  }

  render() {
    const { isLoading } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className={"login_label"}>Login</div>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(Login);
