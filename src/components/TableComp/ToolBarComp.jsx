import React from 'react'
import "../TableComp/ToolBarComp.css"
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Tag, Button, Input } from 'antd';



const ToolBarComp = ({ setIsAddModalOpen, handleSearch }) => {

  const handleAddClick = () => {
    setIsAddModalOpen(true)
  }





  return (
    <div className='toolBar'>

      <Input.Search
        placeholder='Search tasks'
        allowClear
        enterButton="Search"
        className='searchBar'
        onSearch={handleSearch}
        size='large'
        style={{ width: "355px", height: "35px",marginRight:"10px"}}
        // onChange={(e)=>handleSearch(e.target.value)}
      />



      <Button
        onClick={() => handleAddClick()}
        type='primary'
        icon={<PlusOutlined />}
      >Add task</Button>
    </div>
  )
}

export default ToolBarComp