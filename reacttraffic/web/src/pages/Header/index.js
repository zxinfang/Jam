import React from 'react';
import { Form, Input, Button, Select, Table, Layout, Menu, Divider, Typography} from "antd";
// import "../Header/Header.scss";
// import "../../images/traffic.png";
import { FieldTimeOutlined, EditOutlined, PieChartOutlined } from '@ant-design/icons';

import trafficImage from '../../images/traffic.png';

const { Sider } = Layout;

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  // getItem('事件處理時間預測', 'sub1', [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),
  // getItem('過去事件瀏覽', 'sub2', [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),
  // {
  //   type: 'divider',
  // },

  // getItem('事件處理時間預測', '1'),
  // getItem('過去事件瀏覽', '2'),
  // getItem('數據分析', '3'),


    {
      key: '1',
      label: '事件處理時間預測',
      icon: <FieldTimeOutlined />,
    },
    {
      key: '2',
      label: '過去事件瀏覽',
      icon: <EditOutlined />,
    },
    {
      key: '3',
      label: '數據分析',
      icon: <PieChartOutlined />,
    },

  // getItem('數據分析', 'sub4', [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
  // getItem('數據分析', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const Header = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
      {/* <Menu
        className="ham"
        onClick={onClick}
        style={{
          width: 256,
          color:"#ffffff",
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      <Menu.Item key="1" icon={<LineChartOutlined />}>選項一</Menu.Item>
      <Menu.Item key="2" icon={<BarChartOutlined />}>選項二</Menu.Item>
      <Menu.Item key="3" icon={<PieChartOutlined />}>選項三</Menu.Item> */}
      {/* <img src={trafficImage} className='trafficImage' alt="Traffic Image" /> */}
      <Menu
        className="ham"
        onClick={onClick}
        style={{
          width: 256,
          color:"#ffffff",
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        
      />
    </div>
  );
};

export default Header;