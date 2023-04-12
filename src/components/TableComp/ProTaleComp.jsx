import React, { useState } from 'react';
import "../TableComp/ProTableComp.css"
import { ConfigProvider, Tag, Button, Input, Modal, Form, DatePicker, Select } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { ProTable } from '@ant-design/pro-table';
import moment from 'moment/moment';
import ToolBarComp from './ToolBarComp';


export default function ProTableComp() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [form] = Form.useForm()
  const tagOptions = [
    { label: "HTML", value: "HTML" },
    { label: "REACT", value: "REACT" },
    { label: "CSS", value: "CSS" },
    { label: "IMPORTANT", value: "IMPORTANT" },
    { label: "LOW PRIORITY", value: "LOW PRIORITY" }
  ]




  const [data, setData] = useState([
    {
      key: '1',
      timeStamp: 1649975400000,
      title: 'Finish Assignment',
      description: 'Have to finish the assignment from Algo Bulls before Apr 13',
      dueDate: 1649975400000,
      tags: ['HTML', 'CSS', 'REACT'],
      status: 'completed',
    },
    {
      key: '2',
      timeStamp: 1649899000000,
      title: 'Build Landing Page',
      description: 'Create a landing page for a new product launch',
      dueDate: 1650241200000,
      tags: ['HTML', 'CSS'],
      status: 'in progress',
    },
    {
      key: '3',
      timeStamp: 1650104400000,
      title: 'Update Website Content',
      description: 'Update the content of the website based on the new product launch',
      dueDate: 1650493200000,
      tags: ['HTML', 'CSS'],
      status: 'not completed',
    },
    {
      key: '4',
      timeStamp: 1650180840000,
      title: 'Create Dashboard UI',
      description: 'Design and develop the dashboard UI for a new project',
      dueDate: 1650484200000,
      tags: ['REACT'],
      status: 'in progress',
    },
    {
      key: '5',
      timeStamp: 1650360840000,
      title: 'Build Payment Gateway',
      description: 'Develop a payment gateway for the e-commerce website',
      dueDate: 1650670800000,
      tags: ['REACT', 'HTML'],
      status: 'not completed',
    },
    {
      key: '6',
      timeStamp: 1650259200000,
      title: 'Design Mobile App UI',
      description: 'Create a user-friendly UI for a mobile app',
      dueDate: 1650709200000,
      tags: ['REACT', 'CSS'],
      status: 'in progress',
    },
    {
      key: '7',
      timeStamp: 1650130800000,
      title: 'Develop E-commerce Website',
      description: 'Build an e-commerce website with React and Redux',
      dueDate: 1650565200000,
      tags: ['REACT', 'HTML', 'CSS'],
      status: 'not completed',
    },
    {
      key: '8',
      timeStamp: 1650399600000,
      title: 'Write Technical Blog',
      description: 'Write a blog post on the latest web development trends',
      dueDate: 1650670800000,
      tags: ['HTML', 'CSS'],
      status: 'completed',
    },
    {
      key: '9',
      timeStamp: 1650230400000,
      title: 'Code Refactoring',
      description: 'Refactor the code to improve performance',
      dueDate: 1650493200000,
      tags: ['REACT'],
      status: 'in progress',
    },
    {
      key: '10',
      timeStamp: 1650421200000,
      title: 'Create Animation',
      description: 'Add animation effects to the website',
      dueDate: 1650752400000,
      tags: ['CSS'],
      status: 'not completed',
    },
    {
      key: '11',
      timeStamp: 1650541200000,
      title: 'Test Website',
      description: 'Test the website for bugs and errors',
      dueDate: 1650835200000,
      tags: ['HTML'],
      status: 'not completed',
    },
    {
      key: '12',
      timeStamp: 1650210000000,
      title: 'Design Logo',
      description: 'Design a new logo for the company',
      dueDate: 1650421200000,
      tags: ['CSS'],
      status: 'completed',
    },
    {
      key: '13',
      timeStamp: 1650315600000,
      title: 'Create Infographic',
      description: 'Create an infographic to showcase the company stats',
      dueDate: 1650622800000,
      tags: ['HTML'],
      status: 'in progress',
    },
    {
      key: '14',
      timeStamp: 1650456000000,
      title: 'Implement SEO',
      description: 'Optimize the website for search engines',
      dueDate: 1650670800000,
      tags: ['HTML', 'CSS'],
      status: 'not completed',
    },
    {
      key: '15',
      timeStamp: 1650315600000,
      title: 'Create Newsletter',
      description: 'Create a newsletter to send to the subscribers',
      dueDate: 1650705600000,
      tags: ['HTML', 'CSS'],
      status: 'in progress',
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
      render: (tags) => {
        if (!Array.isArray(tags)) {
          return '-'
        }
        if (tags.length === 0) {
          return '-'
        }

        return <>
          {tags && tags.map((tag) => {
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



      }
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color;
        switch (status) {
          case 'completed':
            color = 'green';
            break;
          case 'in Progress':
            color = 'orange';
            break;
          case 'not Completed':
            color = 'red';
            break;
          default:
            color = 'blue';
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        )

      }
    },
  ];


  const handleAddSubmit = (values) => {

    form.validateFields()
      .then((validatedValues) => {
        const newData = {
          key: data.length + 1,
          ...values,
        }
        setData([...data, newData])
        form.resetFields()
        setIsAddModalOpen(false)
      })


  }

  const handleAddCancel = () => {
    form.resetFields()
    setIsAddModalOpen(false)
  }






  return (
    <ConfigProvider locale={enUS}>

      <ProTable
        style={{

          width: "100%"
        }}
        className='proTable'
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6 }}
        search={false}
        toolBarRender={() => <ToolBarComp setIsAddModalOpen={setIsAddModalOpen} />}
      />

      <Modal
        title="Add Task"
        open={isAddModalOpen}
        onOk={() => handleAddSubmit(form.getFieldsValue())}
        onCancel={handleAddCancel}
        okText="Submit"
      >
        <Form form={form} onFinish={handleAddSubmit}>
          <Form.Item name={"timestamp"} initialValue={moment()} hidden />
          <Form.Item name={"title"} label="Title" rules={[{ required: true, max: 100 }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, max: 100 }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date" rules={[{ required: false }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Select mode="multiple" options={tagOptions} />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="not completed">To Do</Select.Option>
              <Select.Option value="in progress">In Progress</Select.Option>
              <Select.Option value="completed">Done</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

