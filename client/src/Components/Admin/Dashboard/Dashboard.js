import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import AdminRouter from "../../../Routers/AdminRouter";
import Sider from "../../Layouts/Admin/Sider";

import "antd/dist/antd.css";

export class Dashboard extends Component {
  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer } = Layout;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Sơn</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <AdminRouter />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
