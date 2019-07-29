import React, { Component } from "react";
import { Menu, Icon, Avatar, message } from "antd";

import history from "../../../history";

import { getToken, clearToken } from "../../../Utils/token";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "mail"
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  // Logout
  onLogout = e => {
    if (getToken() !== null) {
      clearToken();
      history.push("/admin/login");
      message.success("Successly logout");
    //   setTimeout(() => {
    // }, 1500);
    }
  };

  render() {
    const { SubMenu } = Menu;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item
          key="alipay"
          style={{ float: "right" }}
          onClick={this.onLogout}
        >
          Logout
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                style={{ marginRight: "5px" }}
              />
              Hello admin
            </span>
          }
          style={{ float: "right" }}
        >
          <Menu.Item key="setting:1">Setting</Menu.Item>
          <Menu.Item key="setting:2" onClick={this.onLogout}>
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
