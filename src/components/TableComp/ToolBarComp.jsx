import React from 'react'
import "../TableComp/ToolBarComp.css"
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Tag, Button, Input } from 'antd';



const ToolBarComp = () => {
  return (
    <div className='toolBar'>
            <div className="searchBar">
            <Input
            placeholder='Search tasks'
            style={{ width: "265px", height: "35px" }}
          />
          <Button
            style={{
              borderRadius: "5px",
              width: "160px",
              height: "40px",
              fontSize: "15px",
              marginLeft:"10px"
            }}
            icon={<SearchOutlined />}
            type='primary' >Search</Button>
            </div>
            <Button
            type='primary'
            icon={<PlusOutlined />}
          >Add task</Button>
    </div>
  )
}

export default ToolBarComp