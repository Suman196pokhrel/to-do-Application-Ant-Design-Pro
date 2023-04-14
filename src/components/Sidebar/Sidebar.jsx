import React from 'react'
import Sider from 'antd/es/layout/Sider'
import {Menu} from 'antd';
import { useState } from 'react';
import {HomeOutlined , CalendarOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';



const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false)

  const siderStyle = {
    height: "100vh",
    // backgroundColor: "white",
    // boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.15)"
  };

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint='md'
      collapsedWidth={0}
      style={siderStyle}
    >


      <Menu theme='dark' defaultSelectedKeys={['home']} mode='inline' >
        <Menu.Item key="home"  icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="cal" icon={<CalendarOutlined />}>
          <Link to="/cal">Calendar</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar