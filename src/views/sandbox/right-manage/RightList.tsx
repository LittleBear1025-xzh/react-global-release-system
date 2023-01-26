import { DeleteOutlined, DeleteTwoTone, EditOutlined } from '@ant-design/icons'
import { Button, Tag } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

interface Right {
  id: number,
  title: string,
  key: string,
  pagepermisson: number,
  grade: number
}

const columns: ColumnsType<Right> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '权限名称',
    dataIndex: 'title',
  },
  {
    title: '权限路径',
    dataIndex: 'key',
    render: (key: Right['key']) => (<Tag color='orange'>{key}</Tag>)
  },
  {
    title: '操作',
    render: () => (
      <div>
        <Button type='primary' danger shape='circle' icon={<DeleteOutlined />}/>
        <Button type='primary' shape='circle' icon={<EditOutlined />}/>
      </div>
    )
  }
]

export default function RightList() {
  const [dataSource, setDataSource] = useState<Right[]>()

  useEffect(() => {
    axios.get("http://localhost:5000/rights")
      .then((res: AxiosResponse<Right[]>) => { setDataSource(res.data) })
  }, [])

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5
        }}
      />
    </>
  )
}
