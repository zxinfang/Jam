import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Table, Typography } from "antd";
import history from "../../utils/history";
import EChartV5 from "../../components/ECharts";
import Header from "../Header";
import TableType from "../TableType";

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
  const dataSource = [
    {
      key: '1',
      任務編號:'2020100001',
      組別: '南投A組',
      工務段: '南投段',
      時間:'01:30:12',
      任務狀態:'否',
      路段: '202快官-207烏日',
      方向:'南下',
      里程數:'236.2',
    },
    {
      key: '2',
      任務編號:'2020100002',
      組別: '苗栗A組',
      工務段:'苗栗段',
      時間:'00:26:48',
      任務狀態:'否',
      路段: '110頭份-125頭屋',
      方向:'北上',
      里程數:'119.7',
    },
    {
      key: '3',
      任務編號:'2020100003',
      組別: '斗南A組',
      工務段: '斗南段',
      時間:'00:09:27',
      任務狀態:'否',
      路段: '198彰化-207埔鹽系統',
      方向:'北上',
      里程數:'146.2',
    },
    {
      key: '4',
      任務編號:'2020100004',
      組別: '大甲A組',
      工務段:'大甲段',
      時間:'無類別',
      任務狀態:'是',
      路段: '164大甲-169中港系統',
      方向:'南下',
      里程數:'124.5',
    },
    {
      key: '5',
      任務編號:'2020100005',
      組別: '苗栗A組',
      工務段:'苗栗段',
      時間:'00:17:15',
      任務狀態:'是',
      路段: '110頭份-125頭屋',
      方向:'北上',
      里程數:'216.4',
    },
    {
      key: '6',
      任務編號:'2020100006',
      組別: '斗南B組',
      工務段:'斗南段',
      時間:'00:28:19',
      任務狀態:'否',
      路段: '235虎尾-240斗南',
      方向:'南下',
      里程數:'135.4',
    },
    {
      key: '7',
      任務編號:'2020100007',
      組別: '斗南A組',
      工務段:'斗南段',
      時間:'00:10:32',
      任務狀態:'是',
      路段: '198彰化-207埔鹽系統',
      方向:'北上',
      里程數:'123.7',
    },
    {
      key: '8',
      任務編號:'2020100008',
      組別: '大甲A組',
      工務段:'大甲段',
      時間:'00:07:18',
      任務狀態:'否',
      路段: '169中港系統-176沙鹿',
      方向:'南下',
      里程數:'147.0',
    },
    {
      key: '9',
      任務編號:'2020100009',
      組別: '斗南B組',
      工務段:'斗南段',
      時間:'00:01:48',
      任務狀態:'否',
      路段: '211員林-220北斗',
      方向:'北上',
      里程數:'235.7',
    },
    {
      key: '10',
      任務編號:'2020100010',
      組別: '苗栗A組',
      工務段:'苗栗段',
      時間:'00:07:49',
      任務狀態:'否',
      路段: '110頭份-125頭屋',
      方向:'北上',
      里程數:'172.6',
    },
    {
      key: '11',
      任務編號:'2020100011',
      組別: '斗南B組',
      工務段:'國道1號',
      時間:'其他',
      任務狀態:'否',
      國道: '事故',
      方向:'18點-0點',
      里程數:'23.7',
    },
    {
      key: '12',
      任務編號:'2020100012',
      組別: '影響其他(服務區/地磅站…等) ',
      工務段:'國道1號',
      時間:'其他',
      任務狀態:'否',
      國道: '事故',
      方向:'18點-0點',
      里程數:'17.0',
    },
    {
      key: '13',
      任務編號:'2020100013',
      組別: '影響其他(服務區/地磅站…等) ',
      工務段:'國道1號',
      時間:'其他',
      任務狀態:'否',
      國道: '事故',
      方向:'18點-0點',
      里程數:'17.0',
    },
    {
      key: '14',
      任務編號:'2020100014',
      組別: '影響其他(服務區/地磅站…等) ',
      工務段:'國道1號',
      時間:'其他',
      任務狀態:'否',
      國道: '事故',
      方向:'18點-0點',
      里程數:'17.0',
    },
  ];
  const columns = [
    {
      title: '任務編號',
      dataIndex: '任務編號',
      key: '任務編號',
    },
    {
      title: '組別',
      dataIndex: '組別',
      key: '組別',
    },
    {
      title: '工務段',
      dataIndex: '工務段',
      key: '工務段',
    },
    {
      title: '時間',
      dataIndex: '時間',
      key: '時間',
    },
    {
      title: '任務狀態',
      dataIndex: '任務狀態',
      key: '任務狀態',
    },
    {
      title: '路段',
      dataIndex: '路段',
      key: '路段',
    },
    {
      title: '方向',
      dataIndex: '方向',
      key: '方向',
    },
    {
      title: '里程數',
      dataIndex: '里程數',
      key: '里程數',
    },
  ];

  return (
    <div className="home">
      <Header />
      <div className="contentarea">
      <Typography.Title className="title" level={2}>過去事件瀏覽</Typography.Title>
        <div className="selectitem">
          <Select defaultValue="組別">
            <Option value="1">影響一條車道</Option>
            <Option value="2">影響二條車道</Option>
            <Option value="3">影響三條車道(主線4車道以上)</Option>
            <Option value="4">影響全車道</Option>
            <Option value="5">影響輔助車道(路肩/邊坡…等)</Option>
            <Option value="6">只影響匝道</Option>
            <Option value="7">影響匝道與一條車道以上</Option>
            <Option value="8">影響其他(服務區/地磅站…等) </Option>
          </Select>
          <Select defaultValue="工務段">
            <Option value="1">散落物</Option>
            <Option value="2">事故</Option>
            <Option value="3">故障車</Option>
            <Option value="4">誤闖</Option>
            <Option value="5">車輛停等</Option>
            <Option value="6">翻牌面</Option>
            <Option value="7">道路施工</Option>
            <Option value="8">煙霧</Option>
            <Option value="9">火災</Option>
            <Option value="10">巡邏查看</Option>
            <Option value="11">支援</Option>
            <Option value="12">其他</Option>
          </Select>
          <Select defaultValue="時間">
            <Option value="0">無類別</Option>
            <Option value="1">木製品</Option>
            <Option value="2">布製品</Option>
            <Option value="3">車體零件</Option>
            <Option value="4">垃圾</Option>
            <Option value="5">油漬</Option>
            <Option value="6">金屬製品</Option>
            <Option value="7">施工養護物件</Option>
            <Option value="8">砂石</Option>
            <Option value="9">乘載物品</Option>
            <Option value="10">紙製品</Option>
            <Option value="11">活體動物</Option>
            <Option value="12">動物屍體</Option>
            <Option value="13">塑膠製品</Option>
            <Option value="14">輪胎</Option>
            <Option value="15">鐵製品</Option>
            <Option value="17">其他</Option>
          </Select>
          <Select defaultValue="任務狀態">
            <Option value="0">否</Option>
            <Option value="1">是</Option>
          </Select>
          <Select defaultValue="路段">
            <Option value="0">否</Option>
            <Option value="1">是</Option>
          </Select>
          <Select defaultValue="方向">
            <Option value="1">性質一</Option>
            <Option value="2">性質二</Option>
            <Option value="3">性質三</Option>
            <Option value="4">性質四</Option>
            <Option value="5">性質五</Option>
            <Option value="6">性質六</Option>
            <Option value="7">性質日</Option>
          </Select>
          <Select defaultValue="里程數">
            <Option value="1">0點-6點</Option>
            <Option value="2">6點-12點</Option>
            <Option value="3">12點-18點</Option>
            <Option value="4">18點-0點</Option>
          </Select>
        </div>
        <Table className="select-table" dataSource={dataSource} columns={columns} />
        {/* <TableType/> */}
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
