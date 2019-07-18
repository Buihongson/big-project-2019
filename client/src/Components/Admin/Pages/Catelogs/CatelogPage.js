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

class CatelogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catelogs: [],
      idCatelogDeleted: "",
      columns: [
        {
          title: "ID",
          dataIndex: "id"
        },
        {
          title: "Name catelog",
          dataIndex: "ten_th"
        },
        {
          title: "Parent ID",
          dataIndex: "parent_id"
        },
        {
          title: "Decsripntion",
          dataIndex: "mo_ta_th"
        },
        {
          title: "Action",
          fixed: "right",
          width: 150,
          render: (text, record) => {
            return (
              <div style={{ display: "flex" }}>
                <Button onClick={() => this.onEditCatelog(record)}>Edit</Button>
                <Divider type="vertical" style={{ height: "35px" }} />

                <Popconfirm
                  title="Are you sure delete this catelog?"
                  onConfirm={() => this.onDeleteCatelog(record)}
                  onCancel={this.onCancel}
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
      isUpdate: false,
      visible: false,
      dataForm: {
        id: "",
        ten_th: "",
        parent_id: "",
        mo_ta_th: ""
      }
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

  // Add new catelog
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        if (this.state.isUpdate === false) {
          await axios({
            method: "POST",
            url: "http://localhost:3333/api/catelogs",
            data: values
          })
            .then(res =>
              this.setState({
                catelogs: [...this.state.catelogs, res.data.data]
              })
            )
            .catch(error => console.log(error));
        } else {
          const idCatelog = this.state.dataForm.id;

          await axios({
            method: "PUT",
            url: `http://localhost:3333/api/catelogs/${idCatelog}`,
            data: values
          })
            .then(res => this.setState({ catelogs: res.data.data }))
            .catch(error => console.log(error));

          this.onSuccess();
        }
      }
    });
  };

  // Delete 1 catelog
  onDeleteCatelog = async record => {
    await axios({
      method: "DELETE",
      url: `http://localhost:3333/api/catelogs/${record.id}`
    }).then(res =>
      this.setState({
        catelogs: this.state.catelogs.filter(catelog => {
          return catelog.id !== record.id;
        })
      })
    );

    this.onSuccess();
  };

  // show modal edit
  onEditCatelog = record => {
    this.setState({
      dataForm: record,
      visible: true,
      isUpdate: true
    });
  };

  onSuccess = e => {
    if (!this.state.isUpdate) {
      Modal.success({
        title: "Successly deleted a catelog",
        content: ""
      });
    } else {
      Modal.success({
        title: "Successly edited a catelog",
        content: ""
      });
    }
  };

  onCancel = e => {
    message.error("Click on No");
  };

  showModal = () => {
    this.setState({
      visible: true,
      isUpdate: false,
      dataForm: {
        id: "",
        ten_th: "",
        parent_id: "",
        mo_ta_th: ""
      }
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
    const { catelogs, columns, isUpdate } = this.state;

    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
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

    const filterCatelog = catelogs.filter(catelog => {
      return catelog.parent_id === 0;
    });

    const elmOption = filterCatelog.map((catelog, index) => {
      return (
        <Option key={index} value={catelog.id}>
          {catelog.ten_th}
        </Option>
      );
    });

    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ marginBottom: "10px" }}
        >
          Add a catelog
        </Button>
        <Table columns={columns} dataSource={catelogs} rowKey="id" />
        <Modal
          title={isUpdate === false ? "Add a new catelog" : "Edit catelog"}
          visible={this.state.visible}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              form="addNewCatelog"
              key="submit"
              type="primary"
              htmlType="submit"
              // onClick={this.handleOk}
            >
              Submit
            </Button>,
            <Button key="cancel" onClick={this.handleCancel}>
              Close
            </Button>
          ]}
        >
          <Form id="addNewCatelog" onSubmit={this.handleSubmit}>
            <Form.Item {...formItemLayout} hasFeedback label="Catelog Name">
              {getFieldDecorator("ten_th", {
                initialValue: this.state.dataForm.ten_th,
                rules: [
                  {
                    required: true,
                    message: "Catelog name cannot be empty!!!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Catelog">
              {getFieldDecorator("parent_id", {
                initialValue: this.state.dataForm.parent_id,
                rules: [
                  {
                    required: true,
                    message: "Please select a catelog!!!"
                  }
                ]
              })(
                <Select
                  // defaultValue="0"
                  // onChange={handleChange}
                  placeholder="Please select a catelog"
                >
                  <Option value={0}>Catelog</Option>
                  {elmOption}
                </Select>
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} hasFeedback label="Describe">
              {getFieldDecorator("mo_ta_th", {
                initialValue: this.state.dataForm.mo_ta_th
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(CatelogPage);
