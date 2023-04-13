import React from 'react'
import "../Homepage/HomePage.css"
import { Button, Input, Layout, Space, Typography, Row, Col, Divider } from 'antd'
import { PlusOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import LOGO from "./Logo.png"
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProTableComp from '../../components/TableComp/ProTaleComp'
import {motion} from 'framer-motion'
const { Header, Footer, Sider, Content } = Layout



const HomePage = () => {

  const navigate = useNavigate()
  const headerStyle = {
    height: 54,
    paddingInline: 50,
    color: "white"

  };
  const contentStyle = {
    backgroundColor: 'white',
    width: "100%",
    padding: "50px 50px 0 15px",


  };



  return (




    <motion.Layout
    initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >



      <Header style={headerStyle} className='header'>

        <div className="headerLeft"  >
          <img src={LOGO} alt="Application Logo" onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>
        </div>

        <div className="headerRight">
          <Button icon={<UserOutlined />} shape='circle' type='primary'></Button>
          <Typography style={{ color: "white" }}>Suman Pohrel</Typography>
        </div>


      </Header>



      <Layout>

        <Sidebar/>


        <Content style={contentStyle}>

          <ProTableComp />

        </Content>

      </Layout>

    </motion.Layout>
  )
}

export default HomePage