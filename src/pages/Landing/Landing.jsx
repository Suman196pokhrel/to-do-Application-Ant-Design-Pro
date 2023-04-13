import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import ApplicationBanner from "./image1.png"
import ApplicationLogo from "./logo2.png"
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Landing = () => {

  const navigate = useNavigate()



  return (<>


    <Row>
      <Col lg={12} md={24} sm={24} xs={24}>
        <div className="bannerLeft">

          <motion.div 
          key={121}
           initial={{ x: -400, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5 }}
          className="bannerLeftTop"
          >
            <img src={ApplicationLogo} alt='App logo' />
            <Typography.Title level={3} style={{ fontWeight: "700" }}>Most Advanced</Typography.Title>
            <Typography.Title className='headTitle' level={1} style={{ fontWeight: "700" }}>To-Do Application</Typography.Title>

          </motion.div>

          <motion.div 
          key={1212}
          className="bannerLeftBottom"
          initial={{ x: -700, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.6 }}
          >
            <Button
            
            onClick={()=>navigate("/home")}
              type='primary'
              icon={<ArrowRightOutlined />}
              style={{ borderRadius: "5px", height: "50px", width: "250px" }}
            >
              Try Now
            </Button>
          </motion.div>
        </div>
      </Col>
      <Col lg={12} md={0} sm={0} xs={0}>
        <motion.div 
        key={12122}
        className="bannerRight"
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5}}
        >
          <img src={ApplicationBanner} alt='logo to todo application' />

        </motion.div>
      </Col>
    </Row>



  </>
  )
}

export default Landing