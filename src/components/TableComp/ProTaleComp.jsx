import React from 'react';
import "../TableComp/ProTableComp.css"
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { ProTable } from '@ant-design/pro-table';


export default function ProTableComp() {
  const columns = [
    {
      title: 'Time Stamp',
      dataIndex: 'timeStamp',
      key: 'timeStamp',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
    },{
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];


  return (
    <ConfigProvider locale={enUS}>
      <ProTable
      style={{
        
        width:"100%"
      }}

      className='proTable'
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        search={false}
        // dateFormatter="string"
        // headerTitle="ProTable"
        // rowKey="key"
        // toolBarRender={() => [
        //   <div>Custom Toolbar</div>,
        // ]}
      />
    </ConfigProvider>
  );
}

