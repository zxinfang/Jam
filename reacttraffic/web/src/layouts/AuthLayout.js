import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { Button, message, Menu } from "antd";
import history from "../utils/history";
import "./AuthLayout.scss";

const AuthLayout = (props) => {
  const { alert } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [items, setItems] = useState([]);
  const status = useRef();

  useEffect(() => {

    if (!status.current) {
      // componentDidMount
      status.current = true
    }
    else {
      // componentDidUpdate
      console.log("updated");
      messageApi.open({
        type: alert.type,
        content: alert.content,
      });
    }

    // if (ToastRef.current && !_.isUndefined(props.alert)) {
    // message.destroy()
    // }

  }, [alert]);

  return (
    <div id="AuthLayout" >
      {contextHolder}
      <header style={{ padding: "0px 150px" }}>
        <div className="logo" onClick={() => history.push("/")}>
          批判思維教學系統
        </div>
      </header>
      <div id="content" >
        {props.children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: _.get(state, "global.alert", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // GET_ServeType(callback, loading) {
    //   dispatch({ type: "GET_ServeType", callback, loading });
    // },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
