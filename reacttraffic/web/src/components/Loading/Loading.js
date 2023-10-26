import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Spin, Modal } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import history from "../../utils/history";
import "./Loading.scss"

const Loading = (props) => {
  const { loading } = props;
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 100,
      }}
      spin
    />
  );

  return (
    <Modal
      className="loading-modal"
      open={loading}
      closeIcon={false}
      centered={true}
      width={300}
      footer={null}
    >
      <Spin tip="Loading" indicator={antIcon} size="large" spinning={loading}>
        <div className="content" />
      </Spin>
    </Modal>
  )
};


export default Loading;
