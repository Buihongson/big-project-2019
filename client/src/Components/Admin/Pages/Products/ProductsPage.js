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
  TreeSelect,
  Select,
  Upload,
  Icon
} from "antd";

import callApi from "../../../../Services/ApiServices";

import ModalDetails from "./ModalDetails";

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      catelogs: [],
      isUpdate: false,
      visible: false,
      isLoading: false,
      value: undefined,
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
                <ModalDetails product={record} />
                <Divider type="vertical" style={{ height: "35px" }} />
                <Button onClick={() => this.onEditProduct(record)}>Edit</Button>
                <Divider type="vertical" style={{ height: "35px" }} />

                <Popconfirm
                  title="Are you sure delete this catelog?"
                  onConfirm={() => this.onDeleteProduct(record)}
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
      ],
      dataForm: {
        id: "",
        nha_san_xuat_id: "",
        ten_san_pham: "",
        ma_san_pham: "",
        gioi_tinh: "",
        kinh: "",
        loai_day: "",
        duong_kinh_vo: "",
        do_day_vo: "",
        ap_suat_nuoc: "",
        xuat_su: "",
        gia_tien: "",
        bao_hanh: "",
        tinh_trang: "",
        so_luong: "",
        mo_ta: "",
        hinh_anh: ""
      },
      previewImage: "",
      fileList: null
    };
  }

  // Render to html
  componentDidMount() {
    this.onGetProducts();
    this.onGetCatelogs();
  }

  // Get all products
  onGetProducts = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      callApi("api/products", "GET", null).then(res =>
        this.setState({ products: res.data.data, isLoading: false })
      );
    }, 1500);
  };

  // Get all catelogs
  onGetCatelogs = () => {
    callApi("api/catelogs", "GET", null).then(res =>
      this.setState({ catelogs: res.data })
    );
  };

  // Add new product
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        if (this.state.isUpdate === false) {
          // Generate form
          let data = new FormData();
          data.append("nha_san_xuat_id", values.nha_san_xuat_id);
          data.append("ten_san_pham", values.ten_san_pham);
          data.append("ma_san_pham", values.ma_san_pham);
          data.append("gioi_tinh", values.gioi_tinh);
          data.append("kinh", values.kinh);
          data.append("loai_day", values.loai_day);
          data.append("duong_kinh_vo", values.duong_kinh_vo);
          data.append("do_day_vo", values.do_day_vo);
          data.append("ap_suat_nuoc", values.ap_suat_nuoc);
          data.append("xuat_su", values.xuat_su);
          data.append("gia_tien", values.gia_tien);
          data.append("bao_hanh", values.bao_hanh);
          data.append("tinh_trang", values.tinh_trang);
          data.append("so_luong", values.so_luong);
          data.append("mo_ta", values.mo_ta);
          data.append("hinh_anh", this.state.fileList[0].originFileObj);

          // Generate config for "axios"
          const config = {
            header: {
              "Content-Type": "multipart/form-data"
            }
          };

          // Request post into server
          callApi("api/products", "POST", data, config).then(res =>
            this.setState({
              products: [...this.state.products, res.data.data]
            })
          );

          this.onSuccessAdd();
          this.handleCancel();
        } else {
          const id = this.state.dataForm.id;

          // Generate form
          let data = new FormData();
          data.append("nha_san_xuat_id", values.nha_san_xuat_id);
          data.append("ten_san_pham", values.ten_san_pham);
          data.append("ma_san_pham", values.ma_san_pham);
          data.append("gioi_tinh", values.gioi_tinh);
          data.append("kinh", values.kinh);
          data.append("loai_day", values.loai_day);
          data.append("duong_kinh_vo", values.duong_kinh_vo);
          data.append("do_day_vo", values.do_day_vo);
          data.append("ap_suat_nuoc", values.ap_suat_nuoc);
          data.append("xuat_su", values.xuat_su);
          data.append("gia_tien", values.gia_tien);
          data.append("bao_hanh", values.bao_hanh);
          data.append("tinh_trang", values.tinh_trang);
          data.append("so_luong", values.so_luong);
          data.append("mo_ta", values.mo_ta);
          data.append(
            "hinh_anh",
            this.state.fileList === null
              ? this.state.dataForm.hinh_anh
              : this.state.fileList[0].originFileObj
          );

          // Generate config for "axios"
          const config = {
            header: {
              "Content-Type": "multipart/form-data"
            }
          };

          // Request put into server
          this.setState({ isLoading: true });
          setTimeout(() => {
            callApi(`api/products/${id}`, "PUT", data, config).then(res =>
              this.setState({ products: res.data.data, isLoading: false })
            );
          }, 1500);
          this.onSuccess();
          this.handleCancel();
        }
      }
    });
  };

  // Delete 1 product
  onDeleteProduct = async record => {
    await callApi(`api/products/${record.id}`, "DELETE", null).then(res =>
      this.setState({
        products: this.state.products.filter(product => {
          return product.id !== record.id;
        })
      })
    );

    this.onSuccess();
  };

  // Show modal add
  showModal = () => {
    this.setState({
      visible: true,
      isUpdate: false
    });
  };

  // Show modal edit
  onEditProduct = record => {
    this.setState({
      dataForm: record,
      visible: true,
      isUpdate: true
    });
  };

  // Notify after updated
  onSuccess = e => {
    if (!this.state.isUpdate) {
      Modal.success({
        title: "Successly deleted a product",
        content: ""
      });
    } else {
      Modal.success({
        title: "Successly edited a product",
        content: ""
      });
    }
  };
  onSuccessAdd = e => {
    Modal.success({
      title: "Successly add a product",
      content: ""
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.props.form.resetFields();
    this.setState({
      visible: false,
      isUpdate: false,
      dataForm: {
        nha_san_xuat_id: "",
        ten_san_pham: "",
        ma_san_pham: "",
        gioi_tinh: "",
        kinh: "",
        loai_day: "",
        duong_kinh_vo: "",
        do_day_vo: "",
        ap_suat_nuoc: "",
        xuat_su: "",
        gia_tien: "",
        bao_hanh: "",
        tinh_trang: "",
        so_luong: "",
        mo_ta: "",
        hinh_anh: ""
      }
    });
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.thumbUrl,
      previewVisible: true
    });
  };

  // Handle image
  handleUpload = info => {
    this.setState({ fileList: info.fileList });
  };

  render() {
    const {
      products,
      catelogs,
      columns,
      isLoading,
      isUpdate,
      fileList
    } = this.state;

    // Custom form
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    // Generate catelog
    const elmOption1 = catelogs
      .filter(catelog => {
        return catelog.parent_id === 1;
      })
      .map((data, index) => {
        return { title: data.ten_th, value: data.id, key: index };
      });
    const elmOption2 = catelogs
      .filter(catelog => {
        return catelog.parent_id === 2;
      })
      .map((data, index) => {
        return { title: data.ten_th, value: data.id, key: index };
      });
    const elmOption3 = catelogs
      .filter(catelog => {
        return catelog.parent_id === 3;
      })
      .map((data, index) => {
        return { title: data.ten_th, value: data.id, key: index };
      });

    // Custom tree select
    const treeData = [
      {
        title: "CITIZEN",
        value: "0-0",
        key: "0-0",
        disabled: true,
        children: elmOption1
      },
      {
        title: "Thụy Sĩ",
        value: "0-1",
        key: "0-1",
        disabled: true,
        children: elmOption2
      },
      {
        title: "Chính Hãng",
        value: "0-2",
        key: "0-2",
        disabled: true,
        children: elmOption3
      }
    ];

    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ marginBottom: "10px" }}
          loading={isLoading}
        >
          Add a Product
        </Button>
        <Table
          columns={columns}
          dataSource={products}
          rowKey="id"
          loading={isLoading}
        />
        <Modal
          title={isUpdate === false ? "Add a new product" : "Edit product"}
          visible={this.state.visible}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              form="addNewProduct"
              key="submit"
              type="primary"
              htmlType="submit"
              // loading={isLoading}
            >
              Submit
            </Button>,
            <Button key="cancel" onClick={this.handleCancel}>
              Close
            </Button>
          ]}
        >
          <Form
            id="addNewProduct"
            onSubmit={this.handleSubmit}
            encType="multipart/form-data"
          >
            <Form.Item {...formItemLayout} hasFeedback label="Catelog Name">
              {getFieldDecorator("nha_san_xuat_id", {
                initialValue: this.state.dataForm.nha_san_xuat_id,
                rules: [
                  {
                    required: true,
                    message: "Catelog name cannot be empty!!!"
                  }
                ]
              })(
                <TreeSelect
                  // value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  treeData={treeData}
                  placeholder="Please select"
                  treeDefaultExpandAll
                  // onChange={this.onChange}
                />
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Product Name">
              {getFieldDecorator("ten_san_pham", {
                initialValue: this.state.dataForm.ten_san_pham,
                rules: [
                  {
                    required: true,
                    message: "Product name cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Product Code">
              {getFieldDecorator("ma_san_pham", {
                initialValue: this.state.dataForm.ma_san_pham,
                rules: [
                  {
                    required: true,
                    message: "Product code cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Gender">
              {getFieldDecorator("gioi_tinh", {
                initialValue: this.state.dataForm.gioi_tinh,
                rules: [
                  {
                    required: true,
                    message: "Gender cannot be empty!!!"
                  }
                ]
              })(
                <Select
                  // defaultValue="0"
                  // onChange={handleChange}
                  placeholder="Please select gender"
                >
                  <Option value="Nam">Men</Option>
                  <Option value="Nữ">Women</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Glass">
              {getFieldDecorator("kinh", {
                initialValue: this.state.dataForm.kinh,
                rules: [
                  {
                    required: true,
                    message: "Glass cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Wire">
              {getFieldDecorator("loai_day", {
                initialValue: this.state.dataForm.loai_day,
                rules: [
                  {
                    required: true,
                    message: "Wire cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Diameter">
              {getFieldDecorator("duong_kinh_vo", {
                initialValue: this.state.dataForm.duong_kinh_vo,
                rules: [
                  {
                    required: true,
                    message: "Diameter cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Thickness">
              {getFieldDecorator("do_day_vo", {
                initialValue: this.state.dataForm.do_day_vo,
                rules: [
                  {
                    required: true,
                    message: "Thickness cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Water Resistance">
              {getFieldDecorator("ap_suat_nuoc", {
                initialValue: this.state.dataForm.ap_suat_nuoc,
                rules: [
                  {
                    required: true,
                    message: "Water resistance cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Origin">
              {getFieldDecorator("xuat_su", {
                initialValue: this.state.dataForm.xuat_su,
                rules: [
                  {
                    required: true,
                    message: "Origin cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Price">
              {getFieldDecorator("gia_tien", {
                initialValue: this.state.dataForm.gia_tien,
                rules: [
                  {
                    required: true,
                    message: "Price cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Guarantee">
              {getFieldDecorator("bao_hanh", {
                initialValue: this.state.dataForm.bao_hanh,
                rules: [
                  {
                    required: true,
                    message: "Guarantee cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Status">
              {getFieldDecorator("tinh_trang", {
                initialValue: this.state.dataForm.tinh_trang,
                rules: [
                  {
                    required: true,
                    message: "Status cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Amount">
              {getFieldDecorator("so_luong", {
                initialValue: this.state.dataForm.so_luong,
                rules: [
                  {
                    required: true,
                    message: "Amount cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Description">
              {getFieldDecorator("mo_ta", {
                initialValue: this.state.dataForm.mo_ta,
                rules: [
                  {
                    required: true,
                    message: "Description cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              hasFeedback
              label="Image"
              beforeUpload={() => false}
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleUpload}
              >
                {getFieldDecorator("hinh_anh", {
                  initialValue: this.state.dataForm.hinh_anh
                })(
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                )}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(ProductsPage);
