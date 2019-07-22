import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

export default class Sider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">
          <Link to="/admin" >
            <img
              // src={process.env.PUBLIC_URL + "images/logo_image/Admin-logo.png"}
              src={"/images/logo_image/Admin-logo.png"}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/admin">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/catelogs">
              <Icon type="appstore" />
              <span>Catelogs</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/products">
              <Icon type="desktop" />
              <span>Products</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="4">Tom</Menu.Item>
            <Menu.Item key="5">Bill</Menu.Item>
            <Menu.Item key="6">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="9">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="10">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
