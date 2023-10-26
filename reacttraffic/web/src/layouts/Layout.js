import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import { Button, message, Menu } from "antd";
import history from "../utils/history";
import { getRole, getId } from "../utils/common";
import "./Layout.scss";

const teacherMenu = () => [
  {
    key: "2-1",
    label: "新增課堂問題",
  },
  {
    key: "2-2",
    label: "課堂答題成果",
  },
  {
    key: "2-3",
    label: "學生整體分析",
  },
  {
    key: "logout",
    label: "登出",
  },
];

const studentMenu = () => [
  {
    key: "1-1",
    label: "課堂答題",
  },
  {
    key: "1-2",
    label: "自我學習",
  },
  {
    key: "1-3",
    label: "整體分析",
  },
  {
    key: "1-4",
    label: "歷史紀錄",
    children: [
      {
        type: "group",
        children: [
          {
            key: "1-4-1",
            label: "教學紀錄",
          },
          // {
          //   key: "1-4-2",
          //   label: "自學紀錄",
          // },
        ],
      },
    ],
  },
  {
    key: "logout",
    label: "登出",
  },
];

const Layout = (props) => {
  const { alert } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [current, setCurrent] = useState("");
  const [items, setItems] = useState([]);
  const status = useRef();
  const location = useLocation();
  const role = getRole();
  const id = getId();

  useEffect(() => {

    if (role === "teacher")
      setItems(teacherMenu);
    else if (role === "student")
      setItems(studentMenu);

    handleMenu();
  }, []);

  useEffect(() => {

    if (!status.current) {
      // componentDidMount
      status.current = true
    }
    else {
      // componentDidUpdate
      console.log("updated")
      messageApi.open({
        type: alert.type,
        content: alert.content,
      });
    }

  }, [alert]);

  const handleMenu = () => {
    const { pathname } = location;

    if (role === "student")
      switch (pathname) {
        case "/education/verification":
          setCurrent("1-1");
          break;
        case "/education/index":
          setCurrent("1-1");
          break;
        case "/self-study/index":
          setCurrent("1-2");
          break;
        case "/self-study/answer":
          setCurrent("1-2");
          break;
        case "/self-study/chat":
          setCurrent("1-2");
          break;
        case "/analysis/index":
          setCurrent("1-3");
          break;
        case "/history/education":
          setCurrent("1-4");
          break;
        case "/history/self-study":
          setCurrent("1-4");
          break;
        default: break;
      }

    if (role === "teacher")
      switch (pathname) {
        case "/education/create":
          setCurrent("2-1");
          break;
        case "/education/achievement":
          setCurrent("2-2");
          break;
        case "/analysis/list":
          setCurrent("2-3");
          break;
        case "/analysis/index":
          setCurrent("2-3");
          break;
        default: break;
      }
  }

  const onClick = (e) => {
    setCurrent(e.key);

    switch (e.key) {
      case "1-1":
        history.push("/education/verification");
        break;
      case "1-2":
        history.push("/self-study/index");
        break;
      case "1-3":
        history.push(`/analysis/index?id=${id}`);
        break;
      case "1-4-1":
        history.push("/history/education");
        break;
      case "1-4-2":
        history.push("/history/self-study");
        break;
      case "2-1":
        history.push("/education/create");
        break;
      case "2-2":
        history.push("/education/code");
        break;
      case "2-3":
        history.push("/analysis/list");
        break;
      case "2-4-1":
        history.push("/history/education");
        break;
      case "2-4-2":
        history.push("/history/self-study");
        break;
      case "logout":
        props.POST_Logout();
        break;
      default: break;
    }

  }

  return (
    <div id="Layout" >
      {contextHolder}
      <header style={{ padding: "0px 150px" }}>
        <div className="logo">
          批判思維教學系統
        </div>
        <div>
          <Menu
            items={items}
            mode="horizontal"
            selectedKeys={[current]}
            onClick={onClick}
          />
        </div>
      </header>
      <div id="content" >
        {props.children}
      </div>
      {
        /*  <footer style={{ padding: scrWidth < 1200 ? "10px 5%" : "30px 200px" }}>
           <div id="copyright">
             Copyright ©
           </div>
         </footer> */
      }
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
    POST_Logout() {
      dispatch({ type: "POST_Logout" });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
