import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Menu } from "antd";
// import ReactECharts from 'echarts-for-react';
import EChartV5 from "../../components/ECharts";
import Header from "../Header";
import history from "../../utils/history";



import "./index.scss";
import 'font-awesome/css/font-awesome.min.css';

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
  const options = {
    grid: { top: 20, right: 8, bottom: 24, left: 40 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const options2 = {
    grid: { top: 20, right: 8, bottom: 24, left: 40 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [100, 932, 901, 934, 600, 700, 500],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    // <div className="home">
    //   <Menu
    //   onClick={onClick}
    //   style={{
    //     width: 256,
    //   }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
    //   mode="inline"
    //   items={items}
    // />
    // </div>
    <div
    style={{
      width: 256,
    }}
  >
    <Button
      type="primary"
      onClick={toggleCollapsed}
      style={{
        marginBottom: 16,
      }}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    />
  </div>
  );
};


// const Login= () => {
//   const options = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: 'line',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   return <EChartV5 config={options} />;
// };

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
