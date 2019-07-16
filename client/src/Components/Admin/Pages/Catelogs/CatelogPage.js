import React, { Component } from "react";
import axios from "axios";
import { Table, Divider, Button } from "antd";

import ModalCatelog from "./ModalCatelog";

export default class CatelogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catelogs: []
    };
  }

  // Get all catelog from server
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3333/api/catelogs"
    })
      .then(res => this.setState({ catelogs: res.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { catelogs } = this.state;

    const { Column } = Table;

    return (
      <div>
        <ModalCatelog />
        <Table dataSource={catelogs}>
          <Column key="id" title="ID" dataIndex="id" />
          <Column key="ten_th" title="Name Catelogs" dataIndex="ten_th" />
          <Column key="parent_id" title="Parent ID" dataIndex="parent_id" />
          <Column key="mo_ta_th" title="Describe" dataIndex="mo_ta_th" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="javascript:;">Edit {record.lastName}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
