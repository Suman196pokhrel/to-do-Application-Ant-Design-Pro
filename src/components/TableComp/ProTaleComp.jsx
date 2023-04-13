import React, { useState } from 'react';
import "../TableComp/ProTableComp.css"
import { ConfigProvider, Tag, Button, Input, Modal, Form, DatePicker, Popconfirm, Select } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { ProTable, EditableProTable } from '@ant-design/pro-table';
import moment from 'moment/moment';
import ToolBarComp from './ToolBarComp';
import _ from 'lodash'
import {v4 as uuidv4} from 'uuid'


export default function ProTableComp() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [form] = Form.useForm()
  const tagOptions = [
    { label: "HTML", value: "HTML", color: "red" },
    { label: "REACT", value: "REACT", color: "green" },
    { label: "CSS", value: "CSS", color: "blue" },
    { label: "IMPORTANT", value: "IMPORTANT", color: "red" },
    { label: "LOW PRIORITY", value: "LOW PRIORITY", color: "orange" }
  ]

  const tagFilters = [
    { text: "HTML", value: "HTML", color: "red" },
    { text: "REACT", value: "REACT", color: "green" },
    { text: "CSS", value: "CSS", color: "blue" },
    { text: "IMPORTANT", value: "IMPORTANT", color: "red" },
    { text: "LOW PRIORITY", value: "LOW PRIORITY", color: "orange" }
  ]

  const statusFilter = [
    {text:"OPEN",value:"OPEN",color:"blue"},
    {text:"WORKING",value:"WORKING",color:"orange"},
    {text:"DONE",value:"DONE",color:"green"},
    {text:"OVERDUE",value:"OVERDUE",color:"red"},

  ]



  const [data, setData] = useState([
    {
      id: '1',
      timeStamp: 1649975400000,
      title: 'Finish Assignment',
      description: 'Have to finish the assignment from Algo Bulls before Apr 13',
      dueDate: 1649975400000,
      tags: ['HTML', 'CSS', 'REACT'],
      status: 'DONE',
    },
    {
      id: '2',
      timeStamp: 1649899000000,
      title: 'Build Landing Page',
      description: 'Create a landing page for a new product launch',
      dueDate: 1650241200000,
      tags: ['HTML', 'CSS'],
      status: 'WORKING',
    },
    {
      id: '3',
      timeStamp: 1650104400000,
      title: 'Update Website Content',
      description: 'Update the content of the website based on the new product launch',
      dueDate: 1650493200000,
      tags: ['HTML', 'CSS'],
      status: 'OVERDUE',
    },
    {
      id: '4',
      timeStamp: 1650180840000,
      title: 'Create Dashboard UI',
      description: 'Design and develop the dashboard UI for a new project',
      dueDate: 1650484200000,
      tags: ['REACT'],
      status: 'WORKING',
    },
    {
      id: '5',
      timeStamp: 1650360840000,
      title: 'Build Payment Gateway',
      description: 'Develop a payment gateway for the e-commerce website',
      dueDate: 1650670800000,
      tags: ['REACT', 'HTML'],
      status: 'WORKING',
    },
    {
      id: '6',
      timeStamp: 1650259200000,
      title: 'Design Mobile App UI',
      description: 'Create a user-friendly UI for a mobile app',
      dueDate: 1650709200000,
      tags: ['REACT', 'CSS'],
      status: 'WORKING',
    },
    {
      id: '7',
      timeStamp: 1650130800000,
      title: 'Develop E-commerce Website',
      description: 'Build an e-commerce website with React and Redux',
      dueDate: 1650565200000,
      tags: ['REACT', 'HTML', 'CSS'],
      status: 'WORKING',
    },
    {
      id: '8',
      timeStamp: 1650399600000,
      title: 'Write Technical Blog',
      description: 'Write a blog post on the latest web development trends',
      dueDate: 1650670800000,
      tags: ['HTML', 'CSS'],
      status: 'DONE',
    },
    {
      id: '9',
      timeStamp: 1650230400000,
      title: 'Code Refactoring',
      description: 'Refactor the code to improve performance',
      dueDate: 1650493200000,
      tags: ['REACT'],
      status: 'WORKING',
    },
    {
      id: '10',
      timeStamp: 1650421200000,
      title: 'Create Animation',
      description: 'Add animation effects to the website',
      dueDate: 1650752400000,
      tags: ['CSS'],
      status: 'OVERDUE',
    },
    {
      id: '11',
      timeStamp: 1650541200000,
      title: 'Test Website',
      description: 'Test the website for bugs and errors',
      dueDate: 1650835200000,
      tags: ['HTML'],
      status: 'OVERDUE',
    },
    {
      id: '12',
      timeStamp: 1650210000000,
      title: 'Design Logo',
      description: 'Design a new logo for the company',
      dueDate: 1650421200000,
      tags: ['CSS'],
      status: 'DONE',
    },
    {
      id: '13',
      timeStamp: 1650315600000,
      title: 'Create Infographic',
      description: 'Create an infographic to showcase the company stats',
      dueDate: 1650622800000,
      tags: ['HTML'],
      status: 'OPEN',
    },
    {
      id: '14',
      timeStamp: 1650456000000,
      title: 'Implement SEO',
      description: 'Optimize the website for search engines',
      dueDate: 1650670800000,
      tags: ['HTML', 'CSS'],
      status: 'OVERDUE',
    },
    {
      id: '15',
      timeStamp: 1650315600000,
      title: 'Create Newsletter',
      description: 'Create a newsletter to send to the subscribers',
      dueDate: 1650705600000,
      tags: ['HTML', 'CSS'],
      status: 'WORKING',
    },
  ])


  const columns = [
    {
      title: 'id',
      dataIndex: "id",
      key: "id",
      hideInTable: true,
      hideInSearch: true,
      // hideInForm: true
    },
    {
      title: 'Time Stamp',
      dataIndex: 'timeStamp',
      key: 'timeStamp',
      valueType: 'dateTime',
      render: (text, record) => moment(record.timeStamp).format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a, b) => {
        console.log("Sorter Executed ", a.timeStamp, b.timeStamp)
        const aTime = moment(a.timeStamp).unix();
        const bTime = moment(b.timeStamp).unix();
        return (aTime - bTime)
      },


    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description.localeCompare(b.description)

    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      valueType: 'dateTime',
      render: (text, record) => {
        if (!record.dueDate) {
          return '-'
        }
        return moment(record.dueDate).format('YYYY-MM-DD')
      },
      sorter: (a, b) => {
        // console.log(a,b)
        return a.dueDate - b.dueDate
      }
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



      },
      filters:tagFilters,
      onFilter : (value, record)=>{
        const tags = record.tags.map((tag)=> tag.toUpperCase())
        return tags.includes(value.toUpperCase())
      }
      
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color;
        switch (status) {
          case 'DONE':
            color = 'green';
            break;
          case 'WORKING':
            color = 'orange';
            break;
          case 'OVERDUE':
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

      },
      filters:statusFilter,
      onFilter:(value, record)=>{
        const status = record.status.toUpperCase()
        return status.includes(value.toUpperCase())
      }

    },
    {
      title: 'Action',
      dataIndex: 'action',
      valueType: 'option',
      render: (_, record) => (
        <div className='actions'>

          <div className="updateAction">
            <a onClick={() => openUpdateModal(record)}>Update</a>
          </div>

          <Popconfirm
            title="Are you sure to delete this task ?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a style={{ color: "red" }}>Delete</a>
          </Popconfirm>


        </div>

      )

    }
  ];


  const handleAddSubmit = (values) => {
    console.log("UniQUE => ", uuidv4())

    const date = () => {
      if (_.isEmpty(form.getFieldValue("dueDate")) || form.getFieldValue('dueDate').valueOf() == undefined) {
        return null
      }
      else {
        return form.getFieldValue('dueDate').valueOf()
      }
    }

    form.validateFields()
      .then((validatedValues) => {
        console.log("Form values ", validatedValues['dueDate'])
        const newData = {
          id: uuidv4().toString(),
          ...values,
          dueDate: date(),
          timeStamp: moment().valueOf()

        }
        setData([newData, ...data])
        console.log("Form Data While Adding Task ,", {
          // id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
          id: uuidv4().toString(),
          ...values,
          dueDate: date(),
          timeStamp: moment().valueOf()

        })
        form.resetFields()
        setIsAddModalOpen(false)
      })


  }

  //   const handleAddSubmit = (values) => {
  //   const date = () => {
  //     if (_.isEmpty(form.getFieldValue("dueDate")) || form.getFieldValue('dueDate').valueOf() == undefined) {
  //       return null
  //     } else {
  //       return form.getFieldValue('dueDate').valueOf()
  //     }
  //   }

  //   form.validateFields().then((validatedValues) => {
  //     console.log("Form values ", validatedValues['dueDate'])
  //     const newData = {
  //       ...values,
  //       dueDate: date(),
  //       timeStamp: moment().valueOf()
  //     }
  //     const sortedData = [...data, newData].sort((a, b) => a.timeStamp - b.timeStamp)
  //     setData(sortedData)
  //     console.log("Form Data While Adding Task ,", {
  //       ...values,
  //       dueDate: date()
  //     })
  //     form.resetFields()
  //     setIsAddModalOpen(false)
  //   })
  // }


  const handleUpdateSubmit = () => {
    let values = form.getFieldsValue()
    const date = () => {
      if (_.isEmpty(form.getFieldValue("dueDate")) || form.getFieldValue('dueDate').valueOf() == undefined) {
        return null
      }
      else {
        return form.getFieldValue('dueDate').valueOf()
      }
    }
    values = {
      ...values,
      dueDate: date()
    }

    setData((prevData) => {
      const rowIndex = prevData.findIndex((row) => row.id === values.id)
      if (rowIndex >= 0) {
        const updatedData = [
          ...prevData.slice(0, rowIndex),
          values,
          ...prevData.slice(rowIndex + 1)
        ]
        form.resetFields()
        return updatedData
      }
      return prevData

    })
    setIsUpdateModalOpen(false)
  }

  const handleAddCancel = () => {
    form.resetFields()
    setIsAddModalOpen(false)
  }


  const openUpdateModal = (record) => {
    setIsUpdateModalOpen(true)

    form.setFieldsValue({
      id: record.id,
      timeStamp: moment(record.timeStamp),
      title: record.title,
      description: record.description,
      dueDate: () => {
        const date = record.dueDate && record.dueDate !== '-' ? moment(record.dueDate) : undefined
        console.log(date)
        return date
      },
      tags: record.tags,
      status: record.status

    })



  }

  const validateDueDate = (rule, value) => {
    // console.log(rule, value)
    if (value && value < moment()) {
      return Promise.reject('Due date cannot be before the current time')
    }
    return Promise.resolve()
  }

  const handleDelete = (id) => {
    setData((prevData) => (
      prevData.filter((item) => item.id !== id)
    ))
  }



  return (
    <ConfigProvider locale={enUS}>

      <ProTable
        style={{

          width: "100%"
        }}
        className='proTable'
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6 }}
        search={false}
        toolBarRender={() => <ToolBarComp setIsAddModalOpen={setIsAddModalOpen} />}
      />


      {/* Modal to Handle Add task  */}
      <Modal
        title="Add Task"
        open={isAddModalOpen}
        onOk={() => handleAddSubmit(form.getFieldsValue())}
        onCancel={handleAddCancel}
        okText="Submit"
      >
        <Form form={form} onFinish={handleAddSubmit} initialValues={{ status: 'OPEN' }}>
          <Form.Item name="id"  hidden />
          <Form.Item name="timeStamp" hidden />
          <Form.Item name="title" label="Title" rules={[{ required: true, max: 100 }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, max: 100 }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date" rules={[{ required: false }, { validator: validateDueDate }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Select mode="multiple" options={tagOptions} />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="OPEN">Open</Select.Option>
              <Select.Option value="WORKING">Working</Select.Option>
              <Select.Option value="DONE">Done</Select.Option>
              <Select.Option value="OVERDUE">OVerdue</Select.Option>

            </Select>
          </Form.Item>
        </Form>
      </Modal>


      {/* Modal To Handle Update Task */}
      <Modal
        title="Update Task"
        open={isUpdateModalOpen}
        onOk={() => handleUpdateSubmit()}
        onCancel={() => { setIsUpdateModalOpen(false); form.resetFields() }}
        okText="Update"
      >
        <Form form={form} onFinish={handleAddSubmit} initialValues={{ status: 'OPEN' }}>
          <Form.Item name="id" initialValue={Date.now().toString(36) + Math.random().toString(36).substring(2, 7)} hidden />
          <Form.Item name="timestamp" hidden />
          <Form.Item name="title" label="Title" rules={[{ required: true, max: 100 }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, max: 100 }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date" rules={[{ required: false }, { validator: validateDueDate }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="tags" label="Tags">
            <Select mode="multiple" options={tagOptions} />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="OPEN">Open</Select.Option>
              <Select.Option value="WORKING">Working</Select.Option>
              <Select.Option value="DONE">Done</Select.Option>
              <Select.Option value="OVERDUE">OVerdue</Select.Option>

            </Select>
          </Form.Item>
        </Form>
      </Modal>

    </ConfigProvider>
  );
}

