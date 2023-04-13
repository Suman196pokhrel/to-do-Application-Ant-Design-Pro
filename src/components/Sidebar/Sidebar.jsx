import React from 'react'
import Sider from 'antd/es/layout/Sider'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';




const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false)


  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const SideItems = [
    getItem('Home', 'home', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
  ]

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
    

        <Menu theme='dark' defaultSelectedKeys={['home']} mode='inline' items={SideItems}/>
    </Sider>
  )
}

export default Sidebar