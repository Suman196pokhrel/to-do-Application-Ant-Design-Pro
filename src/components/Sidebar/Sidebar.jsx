import Sider from 'antd/es/layout/Sider'
import React from 'react'

const Sidebar = () => {


  const siderStyle = {
    height: "100vh",
    backgroundColor: "white",
    boxShadow: " 0px 2px 8px rgba(0, 0, 0, 0.15)"
  };

  return (
    <Sider style={siderStyle}></Sider>
  )
}

export default Sidebar