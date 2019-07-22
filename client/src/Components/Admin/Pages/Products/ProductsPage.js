import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  Divider,
  Modal,
  Button,
  Popconfirm,
  message,
  Form,
  Input,
  Select
} from "antd";

import callApi from "../../../../Services/ApiServices";

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isUpdate: false,
      visible: false,
      isLoading: false,
      columns: [
        {
          title: "ID",
          dataIndex: "id"
        },
        {
          title: "Product Name",
          dataIndex: "ten_san_pham"
        },
        {
          title: "Product Code",
          dataIndex: "ma_san_pham"
        },
        {
          title: "Gender",
          dataIndex: "gioi_tinh"
        },
        {
          title: "Price",
          dataIndex: "gia_tien"
        },
        {
          title: "Status",
          dataIndex: "tinh_trang"
        },
        {
          title: "Action",
          key: "operation",
          fixed: "right",
          width: 150,
          render: (text, record) => {
            return (
              <div style={{ display: "flex" }}>
                <Button onClick={() => this.onViewDetails(record)}>
                  Details
                </Button>
                <Divider type="vertical" style={{ height: "35px" }} />
                <Button onClick={() => this.onEditCatelog(record)}>Edit</Button>
                <Divider type="vertical" style={{ height: "35px" }} />

                <Popconfirm
                  title="Are you sure delete this catelog?"
                  onConfirm={() => this.onDeleteCatelog(record)}
                  onCancel={this.onCancelOfBtnDel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button>Delete</Button>
                </Popconfirm>
              </div>
            );
          }
        }
      ]
    };
  }

  // Get all product with rest API
  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      callApi("api/products", "GET", null).then(res =>
        this.setState({ products: res.data.data, isLoading: false })
      );
    }, 1500);
  }

  render() {
    const { products, columns, isLoading } = this.state;

    return (
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={isLoading}
      />
    );
  }
}

export default ProductsPage;
