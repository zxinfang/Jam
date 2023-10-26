import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Typography } from "antd";
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
    grid: { top: 20, right: 8, bottom: 24, left: 50 },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [3806, 4390, 3522, 2304, 3788, 3177, 6503, 7300, 3279, 3564, 3423, 3123],
        type: 'line',
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const options2 = {
    grid: { top: 20, right: 8, bottom: 24, left: 50 },
    xAxis: {
      type: 'category',
      data: ['第一車道', '第二車道', '第三車道', '外路肩', '出口匝道', '入口匝道', '中央分隔島', '內路肩'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [9150, 6974, 8164, 6120, 3788, 1600, 56, 224],
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
    <div className="home">
      <Header/>
      <div className="contentarea">
      <Typography.Title className="title" level={2}>數據分析</Typography.Title>
        <div className="timeitem">
          <Select defaultValue="時間">
            <Option value="1">本日</Option>
            <Option value="2">7日內</Option>
            <Option value="3">30日內</Option>
            <Option value="4">1個月</Option>
            <Option value="5">3個月</Option>
            <Option value="6">6個月</Option>
            <Option value="7">111年</Option>
          </Select>
        </div>
        <div className="qw">
          <div className="linediv">
          <Typography.Title className="title" level={5}>國道事故件數</Typography.Title>
              <EChartV5 config={options} />
          </div>
          <div className="bardiv">
            <Typography.Title className="title" level={5}>車道位置事故件數</Typography.Title>
            <EChartV5 config={options2} />
          </div>
        </div>
        
      </div>
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
