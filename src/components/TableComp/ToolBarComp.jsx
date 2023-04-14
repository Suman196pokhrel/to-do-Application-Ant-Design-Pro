import React from 'react'
import "../TableComp/ToolBarComp.css"
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { motion } from 'framer-motion'



const ToolBarComp = ({ setIsAddModalOpen, handleSearch }) => {

  const handleAddClick = () => {
    setIsAddModalOpen(true)
  }





  return (
    <motion.div
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}

      className='toolBar'
    >

      <Input.Search
        placeholder='Search tasks'
        allowClear
        enterButton="Search"
        className='searchBar'
        onSearch={handleSearch}
        size='large'
        style={{ width: "355px", height: "35px", marginRight: "10px" }}
      // onChange={(e)=>handleSearch(e.target.value)}
      />



      <Button
        onClick={() => handleAddClick()}
        type='primary'
        icon={<PlusOutlined />}
      >Add task</Button>
    </motion.div>
  )
}

export default ToolBarComp