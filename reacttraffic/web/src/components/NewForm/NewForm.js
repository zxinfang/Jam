import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Spin, Modal, Button } from 'antd';
import { NewFormOutlined } from '@ant-design/icons';
import history from "../../utils/history";
import "./NewForm.scss"

const NewForm = (props) => {
  const { loading } = props;
  const antIcon = (
    <NewFormOutlined
      style={{
        fontSize: 100,
      }}
      spin
    />
  );

  return (
    <div className="app">
      <Button type="primary" onClick={showModal}>
        打開彈跳式視窗
      </Button>
      <Modal title="這是彈跳式視窗的標題" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>這是彈跳式視窗的內容</p>
      </Modal>
    </div>
  )
};


export default NewForm;
