import React, { useState } from 'react';
import "../TableComp/ProTableComp.css"
import { ConfigProvider, Tag } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { ProTable } from '@ant-design/pro-table';
import moment from 'moment/moment';


export default function ProTableComp() {

  const [data, setData] = useState([
    {
      key: '1',
      timeStamp:1649975400000,
      title: 'Finish Assignment',
      description: "Have to finish the assignment from Algo Bulls before Apr 13",
      dueDate: 1649975400000,
      tags: ["HTML","CSS","REACT"],
      status: "completed"
    },
  ])

  const columns = [
    {
      title: 'Time Stamp',
      dataIndex: 'timeStamp',
      key: 'timeStamp',
      valueType: 'dateTime',
      render: (text, record) => moment(record.timeStamp).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      // sorter:(a,b)=>a.title.localeCompare(b.title),
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
      valueType: 'dateTime',
      render: (text, record) => moment(record.timeStamp).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render:(tags)=>(
        <>
          {tags.map((tag)=>{
             let color = 'blue';
             if (tag === 'REACT') {
               color = 'green';
             } else if (tag === 'HTML') {
               color = 'red';
             }
              return <Tag key={tag} color={color}>
                {tag}
              </Tag>
    })}
        </>
      )
    }, 
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render:status=>{
        let color;
        switch (status) {
          case 'Completed':
            color = 'green';
            break;
          case 'In Progress':
            color = 'orange';
            break;
          case 'Not Completed':
            color = 'red';
            break;
          default:
            color = 'blue';
        }
        return(
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        )

      }
    },
  ];




  return (
    <ConfigProvider locale={enUS}>
      <ProTable
        style={{

          width: "100%"
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

