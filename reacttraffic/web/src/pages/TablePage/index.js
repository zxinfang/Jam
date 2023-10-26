import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Table, Typography, Modal, Radio} from "antd";
import history from "../../utils/history";
import "./index.scss";
import 'font-awesome/css/font-awesome.min.css';
import Header from "../Header";

const { Option } = Select;


const TablePage = (props) => {
  const { POST_Login } = props;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const ActionClickDelete = (index) => {
    // delete data[textid];
    alert(`按钮 ${index} ActionClickDelete！`);
  }
  const ActionClickEdit = (index) => {
    // alert(`按钮 ${index} ActionClickEdit`);
    // setIsActionDeleteVisible(false);
    alert("成功");
  }
  const ActionClickEnter = (index) => {
    setIsActionDeleteVisible(true);
    setIsActionEditVisible(true);
    setIsActionEnterVisible(false);
    console.log(setIsActionEditVisible);
  }
  const [isActionDeleteVisible, setIsActionDeleteVisible] = useState(false);
  const [isActionEditVisible, setIsActionEditVisible] = useState(false);
  const [isActionEnterVisible, setIsActionEnterVisible] = useState(true);
  useEffect(() => {
    props.GET_ClassList();
    // function handleActionClick(){
    //   alert("hi");
    // }
  //   if(Data28IdName === 'Data28Delete'){
  //     delete Data28[Data28ActionId];
  //     Print28fn();
  // }
  console.log(setIsActionDeleteVisible);
  console.log("123");
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
  // const tableData = {
  //   columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested', 'Actions'],
  //   rows: [{
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'Veterinary Assitance',
  //     'Cost/Unit': 50,
  //     'Unit': '1 Hour',
  //     'Units Requested': 12,
  //   }, {
  //     'Service': 'foo',
  //     'Unit': null,
  //     'Cost/Unit': undefined,
  //     'Units Requested': 42,
  //   }],
  // };
  const dataSource = [
    {
      key: '1',
      任務編號:'2020100001',
      影響車道: '影響一條車道',
      地點: '國道3號',
      事件性質備註:'紙製品',
      特殊事故:'否',
      事件性質: '散落物',
      time:'0點-6點',
      predict:'36.2',
      機具:'否',
      星期:'星期一',
      事件處理時間:'12',
    },
    {
      key: '2',
      任務編號:'2020100002',
      影響車道: '影響二條車道',
      地點:'國道1號',
      事件性質備註:'木製品',
      特殊事故:'否',
      事件性質: '散落物',
      time:'12點-18點',
      predict:'9.7',
      機具:'否',
      星期:'星期三',
      事件處理時間:'30',
    },
    {
      key: '3',
      任務編號:'2020100003',
      影響車道: '影響三條車道(主線4車道以上)',
      地點: '國道3號',
      事件性質備註:'施工養護物件',
      特殊事故:'否',
      事件性質: '道路施工',
      time:'0點-6點',
      predict:'46.2',
      機具:'是',
      星期:'星期六',
      事件處理時間:'180',
    },
    {
      key: '4',
      任務編號:'2020100004',
      影響車道: '影響全車道',
      地點:'國道1號',
      事件性質備註:'無類別',
      特殊事故:'是',
      事件性質: '煙霧',
      time:'0點-6點',
      predict:'24.5',
      機具:'是',
      星期:'星期四',
      事件處理時間:'66',
    },
    {
      key: '5',
      任務編號:'2020100005',
      影響車道: '影響輔助車道(路肩/邊坡…等)',
      地點:'國道1號',
      事件性質備註:'無類別',
      特殊事故:'是',
      事件性質: '巡邏查看',
      time:'6點-12點',
      predict:'16.4',
      機具:'是',
      星期:'星期一',
      事件處理時間:'120',
    },
    {
      key: '6',
      任務編號:'2020100006',
      影響車道: '只影響匝道',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '支援',
      time:'6點-12點',
      predict:'35.4',
      機具:'是',
      星期:'星期二',
      事件處理時間:'360',
    },
    {
      key: '7',
      任務編號:'2020100007',
      影響車道: '影響匝道與一條車道以上',
      地點:'國道1號',
      事件性質備註:'車體零件',
      特殊事故:'是',
      事件性質: '翻牌面',
      time:'18點-0點',
      predict:'3.7',
      機具:'否',
      星期:'星期一',
      事件處理時間:'160',
    },
    {
      key: '8',
      任務編號:'2020100008',
      影響車道: '影響其他(服務區/地磅站…等)',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'246',
    },
    {
      key: '9',
      任務編號:'2020100009',
      影響車道: '只影響匝道 ',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'15.6',
      機具:'否',
      星期:'星期二',
      事件處理時間:'182',
    },
    {
      key: '10',
      任務編號:'2020100010',
      影響車道: '影響輔助車道(路肩/邊坡…等)',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'120',
    },
    {
      key: '11',
      任務編號:'2020100011',
      影響車道: '影響其他(服務區/地磅站…等) ',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'11.52',
    },
    {
      key: '12',
      任務編號:'2020100012',
      影響車道: '影響其他(服務區/地磅站…等) ',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'11.52',
    },
    {
      key: '13',
      任務編號:'2020100013',
      影響車道: '影響其他(服務區/地磅站…等) ',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'11.52',
    },
    {
      key: '14',
      任務編號:'2020100014',
      影響車道: '影響其他(服務區/地磅站…等) ',
      地點:'國道1號',
      事件性質備註:'其他',
      特殊事故:'否',
      事件性質: '事故',
      time:'18點-0點',
      predict:'17.0',
      機具:'否',
      星期:'星期五',
      事件處理時間:'11.52',
    },
  ];
  
  const columns = [
    {
      title: '任務編號',
      dataIndex: '任務編號',
      key: '任務編號',
    },
    {
      title: '影響車道',
      dataIndex: '影響車道',
      key: '影響車道',
    },
    {
      title: '事件性質',
      dataIndex: '事件性質',
      key: '事件性質',
    },
    {
      title: '事件性質備註',
      dataIndex: '事件性質備註',
      key: '事件性質備註',
    },
    {
      title: '機具',
      dataIndex: '機具',
      key: '機具',
    },
    {
      title: '特殊事故',
      dataIndex: '特殊事故',
      key: '特殊事故',
    },
    {
      title: '星期',
      dataIndex: '星期',
      key: '星期',
    },
    {
      title: '時間',
      dataIndex: 'time',
      key: '時間',
    },
    {
      title: '實際班別里程計算(公里)',
      dataIndex: 'predict',
      key: '實際班別里程計算(公里)',
    },
    {
      title: '事件處理時間(分鐘)',
      dataIndex: '事件處理時間',
      key: '事件處理時間(分鐘)',
    },
  ];
  // <TableComponent data = {tableData} />,
  // document.getElementById('table-component'));
  return (
    <div className="home">
      <Header />
      <div className="contentarea">

        {/* <div className="header">
          <div className="header-left">
            <p>事件處理時間預測</p>
          </div>
          <div className="header-right">
            <ul>
                <li><a href="#"> <i className="fa fa-search" aria-hidden="true"></i></a></li>
                <li><a href="#"> <i className="fa fa-bell" aria-hidden="true"></i></a></li>
                <li><a href="#"> <i className="fa fa-user-circle" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div> */}
        {/* <div className="nav">
          <div className="nav-menu">
            <ul>
              <li><a href="#" className="hov">全部</a></li>
              <li><a href="#">今天</a></li>
              <li><a href="#">昨天</a></li>
            </ul>
          </div>
          <div className="sortbar">
            <a href="#"> <i className="fa fa-sort"></i></a>
          </div>
        </div> */}
        <div className="button-item">
          <div className="tableitem">
            <Select defaultValue="影響車道">
              <Option value="1">影響一條車道</Option>
              <Option value="2">影響二條車道</Option>
              <Option value="3">影響三條車道(主線4車道以上)</Option>
              <Option value="4">影響全車道</Option>
              <Option value="5">影響輔助車道(路肩/邊坡…等)</Option>
              <Option value="6">只影響匝道</Option>
              <Option value="7">影響匝道與一條車道以上</Option>
              <Option value="8">影響其他(服務區/地磅站…等) </Option>
            </Select>
            <Select defaultValue="事件性質">
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
            <Select defaultValue="事件性質備註">
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
            <Select defaultValue="機具">
              <Option value="0">否</Option>
              <Option value="1">是</Option>
            </Select>
            <Select defaultValue="特殊事故">
              <Option value="0">否</Option>
              <Option value="1">是</Option>
            </Select>
            <Select defaultValue="星期">
              <Option value="1">星期一</Option>
              <Option value="2">星期二</Option>
              <Option value="3">星期三</Option>
              <Option value="4">星期四</Option>
              <Option value="5">星期五</Option>
              <Option value="6">星期六</Option>
              <Option value="7">星期日</Option>
            </Select>
            <Select defaultValue="時間">
              <Option value="1">0點-6點</Option>
              <Option value="2">6點-12點</Option>
              <Option value="3">12點-18點</Option>
              <Option value="4">18點-0點</Option>
            </Select>
          </div>
          <div>
            {/* <Button type="primary"  onClick={() => history.push("/NewForm")}>新增事件</Button> */}
            <Button type="primary" onClick={showModal}>新增事件</Button>
            {/* <Modal title="新增事件" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>這是彈跳式視窗的內容</p>
            </Modal> */}
            <Modal
              visible={isModalVisible}
              title="新增事件"
              onCancel={handleCancel}
              onOk={handleOk}
              destroyOnClose={true}
            >
              <Form
                form={form}
                layout="vertical"
              >
                <Form.Item
                  label="影響車道"
                  name="lane"
                  rules={[{ required: true, message: '請選擇車道' }]}
                >
                  <Select>
                    <Option value="lane1">影響一條車道</Option>
                    <Option value="lane2">影響二條車道</Option>
                    <Option value="lane3">影響三條車道(主線4車道以上)</Option>
                    <Option value="lane4">影響全車道</Option>
                    <Option value="lane5">影響輔助車道(路肩/邊坡…等)</Option>
                    <Option value="lane6">只影響匝道</Option>
                    <Option value="lane7">影響匝道與一條車道以上</Option>
                    <Option value="lane8">影響其他(服務區/地磅站…等)</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="事件性質"
                  name="eventType"
                  rules={[{ required: true, message: '请选择事件性质' }]}
                >
                  <Select>
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
                </Form.Item>

                <Form.Item
                  label="事件性質備註"
                  name="eventRemark"
                  rules={[{ required: true, message: '请输入事件性质备注' }]}
                >
                  <Select>
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
                  {/* <Input /> */}
                </Form.Item>

                <Form.Item
                  label="星期"
                  name="dayOfWeek"
                  rules={[{ required: true, message: '请选择星期' }]}
                >
                  <Select>
                    <Option value="1">星期一</Option>
                    <Option value="2">星期二</Option>
                    <Option value="3">星期三</Option>
                    <Option value="4">星期四</Option>
                    <Option value="5">星期五</Option>
                    <Option value="6">星期六</Option>
                    <Option value="7">星期日</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="時間"
                  name="eventTime"
                  rules={[{ required: true, message: '请输入时间' }]}
                >
                  <Select>
                    <Option value="1">0點-6點</Option>
                    <Option value="2">6點-12點</Option>
                    <Option value="3">12點-18點</Option>
                    <Option value="4">18點-0點</Option>
                  </Select>
                  {/* <Input /> */}
                </Form.Item>

                <Form.Item
                  label="實際班別里程計算(公里)"
                  name="mileage"
                  rules={[{ required: true, message: '請輸入' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="機具"
                  name="equipment"
                  rules={[{ required: true, message: '请选择機具' }]}
                >
                  <Radio.Group>
                    <Radio value="yes">是</Radio>
                    <Radio value="no">否</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="特殊事故"
                  name="specialAccident"
                  rules={[{ required: true, message: '请选择特殊事故' }]}
                >
                  <Radio.Group>
                    <Radio value="yes">是</Radio>
                    <Radio value="no">否</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
        
        <Table className="select-table" dataSource={dataSource} columns={columns} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
