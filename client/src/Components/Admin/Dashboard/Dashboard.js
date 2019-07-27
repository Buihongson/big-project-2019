import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import history from "../../../history";

import "antd/dist/antd.css";

import { getToken } from "../../../Utils/token";

import AdminRouter from "../../../Routers/AdminRouter";
import Sider from "../../Layouts/Admin/Sider";
import Header from "../../Layouts/Admin/Header";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false
    };
  }

  // Check
  componentDidMount() {
    const token = getToken();

    if (!token) {
      history.push("/admin/login");
    } else {
    }
  }

  render() {
    const { Content, Footer } = Layout;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout >
          <Header />
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
