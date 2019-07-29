import React, { Component } from "react";
import { Modal, Button, Descriptions } from "antd";

export default class ModalDetailsCatelog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { catelog } = this.props;

    return (
      <div>
        <Button onClick={this.showModal}>Details</Button>
        <Modal
          title="Product details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{ width: "700px", top: 20 }}
        >
          <Descriptions title={catelog.ten_san_pham} layout="vertical" bordered>
            <Descriptions.Item label="ID" span={3}>
              {catelog.id}
            </Descriptions.Item>
            <Descriptions.Item label="Parent Id" span={3}>
              {catelog.parent_id}
            </Descriptions.Item>
            <Descriptions.Item label="Catelog Name" span={3}>
              {catelog.ten_th}
            </Descriptions.Item>
            <Descriptions.Item label="Decsripntion" span={3}>
              {catelog.mo_ta_th}
            </Descriptions.Item>
            <Descriptions.Item
              label="Images"
              span={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <img
                src={catelog.hinh_anh_info}
                style={{ width: 230 }}
                alt={catelog.ten_th}
              />
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}
