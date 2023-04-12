import React from 'react'
import "../Homepage/HomePage.css"
import { Button, Input, Layout, Space, Typography, Row, Col, Divider } from 'antd'
import { PlusOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import LOGO from "./Logo.png"
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProTableComp from '../../components/TableComp/ProTaleComp'
const { Header, Footer, Sider, Content } = Layout



const HomePage = () => {


  const headerStyle = {
    height: 54,
    paddingInline: 50,
    color: "white"

  };
  const contentStyle = {
    backgroundColor: 'white',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "column",
    padding:"0 20px 0 20px",


  };



  return (




    <Layout>



      <Header style={headerStyle} className='header'>

        <div className="headerLeft" >
          <img src={LOGO} alt="Application Logo" />
        </div>

        <div className="headerRight">
          <Button icon={<UserOutlined />} shape='circle' type='primary'></Button>
          <Typography style={{ color: "white" }}>Suman Pohrel</Typography>
        </div>


      </Header>



      <Layout>
        <Sidebar />


        <Content style={contentStyle}>


          <div className="contentTop">

            <div className="contentTopLeft">
              <Input
                placeholder='Search tasks'
                style={{ width: "265px", height: "35px" }}
              />
              <Button
                style={{
                  borderRadius: "5px",
                  width: "160px",
                  height: "40px",
                  fontSize: "15px"
                }}
                icon={<SearchOutlined />}
                type='primary' >Search</Button>
            </div>

            <div className="contentTopRight">
                <Button
                type='primary'
                icon={<PlusOutlined />}
                >Add task</Button>
            </div>

          </div>

          <Divider />



          <div className="contentBottom">
            <ProTableComp />
          </div>

        </Content>
      </Layout>

    </Layout>
  )
}

export default HomePage