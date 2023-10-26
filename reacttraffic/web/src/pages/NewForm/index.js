import React, { useState, useEffect } from "react";
import _, { includes } from "lodash";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Table, Typography, Spin, Modal} from "antd";
import history from "../../utils/history";
import "./index.scss";
import 'font-awesome/css/font-awesome.min.css';
import Header from "../Header";

const { Option } = Select;


const NewForm = (props) => {
  // const [loading, setLoading] = useState(true);
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
  // useEffect(() => {
  //   // 模擬載入過程，這裡假設 3 秒後載入完成
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const { POST_Login } = props;
  const [form] = Form.useForm();
  const ActionClickDelete = (index) => {
    // delete data[textid];
    alert(`按鈕 ${index} ActionClickDelete！`);
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
  return (
    <div className="app">
      <Button type="primary" onClick={showModal}>
        打開彈跳式視窗
      </Button>
      <Modal title="這是彈跳式視窗的標題" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>這是彈跳式視窗的內容</p>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewForm);
