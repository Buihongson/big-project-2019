import React, { Component } from "react";
import { Modal, Button, Descriptions } from "antd";

export default class ModalDetails extends Component {
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
    const { product } = this.props;

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
          <Descriptions title={product.ten_san_pham} layout="vertical" bordered>
            <Descriptions.Item label="Parent Id" span={3}>
              {product.nha_san_xuat_id}
            </Descriptions.Item>
            <Descriptions.Item label="Product" span={3}>
              {product.ten_san_pham}
            </Descriptions.Item>
            <Descriptions.Item label="Product code" span={3}>
              {product.ma_san_pham}
            </Descriptions.Item>
            <Descriptions.Item label="Gender" span={3}>
              {product.gioi_tinh}
            </Descriptions.Item>
            <Descriptions.Item label="Glass" span={3}>
              {product.kinh}
            </Descriptions.Item>
            <Descriptions.Item label="Wire" span={3}>
              {product.loai_day}
            </Descriptions.Item>
            <Descriptions.Item label="Diameter" span={3}>
              {product.duong_kinh_vo}
            </Descriptions.Item>
            <Descriptions.Item label="Thickness" span={3}>
              {product.do_day_vo}
            </Descriptions.Item>
            <Descriptions.Item label="Water resistance" span={3}>
              {product.ap_suat_nuoc}
            </Descriptions.Item>
            <Descriptions.Item label="origin" span={3}>
              {product.xuat_su}
            </Descriptions.Item>
            <Descriptions.Item label="Price" span={3}>
              {product.gia_tien}
            </Descriptions.Item>
            <Descriptions.Item label="Guarantee" span={3}>
              {product.bao_hanh}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              {product.tinh_trang}
            </Descriptions.Item>
            <Descriptions.Item label="Amount" span={3}>
              {product.so_luong}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {product.mo_ta}
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
              <img src={product.hinh_anh} style={{ width: 230 }} alt={product.ten_san_pham}/>
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
    );
  }
}
