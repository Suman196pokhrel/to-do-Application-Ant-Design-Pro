import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import ApplicationBanner from "./image1.png"
import ApplicationLogo from "./logo2.png"
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

  const navigate = useNavigate()



  return (<>


    <Row>
      <Col md={12} sm={24}>
        <div className="bannerLeft">
          <div className="bannerLeftTop">
            <img src={ApplicationLogo} alt='App logo' />
            <Typography.Title level={3} style={{ fontWeight: "700" }}>Most Advanced</Typography.Title>
            <Typography.Title className='headTitle' level={1} style={{ fontWeight: "700" }}>To-Do Application</Typography.Title>

          </div>
          <div className="bannerLeftBottom">
            <Button
            onClick={()=>navigate("/home")}
              type='primary'
              icon={<ArrowRightOutlined />}
              style={{ borderRadius: "5px", height: "50px", width: "250px" }}
            >
              Try Now
            </Button>
          </div>
        </div>
      </Col>
      <Col md={12} sm={24}>
        <div className="bannerRight">
          <img src={ApplicationBanner} alt='logo to todo application' />

        </div>
      </Col>
    </Row>



  </>
  )
}

export default Landing