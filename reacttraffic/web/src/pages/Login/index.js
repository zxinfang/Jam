import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import history from "../../utils/history";
import "./index.scss";

const { Option } = Select;


const Login = (props) => {
  const { POST_Login } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    props.GET_ClassList();
  }, []);

  const handleChange = (value, key) => {
    form.setFieldsValue({ className: value });
  }

  const handleSubmit = (value) => {

    const callback = (role) => {
      if (role === "teacher")
        history.push("/education/create");
      else if (role === "student")
        history.push("/education/verification");

      props.SAVE_Alert({ type: "success", content: "登入成功" })
    }

    POST_Login(value, callback);
  }

  return (
    <div className="home">
      <div className="login">
        <Form
          className="login-form"
          form={form}
          onFinish={(e) => handleSubmit(e)}
        >
          <Form.Item
            name="className"
            rules={[{ required: true, message: '請選擇班級!' }]}
          >
            <div className="class">
              <div className="label">班級：</div>
              <Select
                className="select"
                onChange={handleChange}
              >
                {
                  _.map(props.classList, (c) => (
                    <Option value={c.value}>{c.label}</Option>
                  ))
                }
              </Select>
            </div>
          </Form.Item>
          <Form.Item
            name="id"
            rules={[{ required: true, message: '請輸入學號!' }]}
          >
            <Input addonBefore="學號：" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: '請輸入姓名!' }]}
          >
            <Input addonBefore="姓名：" />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">
              登入
            </Button>
          </Form.Item>

        </Form>
        <div className="login-register" onClick={() => history.push("/register")}>
          註冊...
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classList: _.get(state, "api.classList", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    POST_Login(payload, callback, loading) {
      dispatch({ type: "POST_Login", payload, callback, loading });
    },
    GET_ClassList(callback, loading) {
      dispatch({ type: "GET_ClassList", callback, loading });
    },
    SAVE_Alert(payload) {
      dispatch({ type: "SAVE_Alert", payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
