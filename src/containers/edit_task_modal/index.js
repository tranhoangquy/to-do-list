import { Button, Form, Input, Modal, notification } from 'antd'
import React, { useCallback } from 'react'
import {StopOutlined,CheckOutlined} from '@ant-design/icons'
const EditTask = ({isModalEdit,setIsModalEit,columns,columns_id,task_id,setColumns_id,defaultValueEdit}) => {
  const [form] = Form.useForm()

const editContent = useCallback((value)=>{
  
  const newColumns = columns.map((col)=>{
    if(col.id === columns_id){
      col.task.map((col_task)=>{
        if(col_task.id=== task_id){
          col_task.content = value.content
        }
        return col_task
      })
    }
    return col
  })
  setColumns_id(newColumns)
  notification.success({
    message:"Update success"
  })
  setIsModalEit(false)
  form.resetFields()
},[columns,columns_id,task_id,setColumns_id,setIsModalEit,form])
  return (
    <Modal title="Edit task" visible={isModalEdit} onCancel={()=>{setIsModalEit(false);form.resetFields();}} footer={null} width={400}>
        <Form form={form} onFinish={editContent}>
          <div className="flex">
              <Form.Item label="Content" name="content" 
                rules={[
                  {
                    required:true,
                    message:"Please enter input"
                  }
                ]}
                >
                <Input   />  
              </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" className="border-0 bg-white"  ><CheckOutlined  /> </Button>
                </Form.Item>
                <Form.Item>
                  <Button className="border-0 bg-white"><StopOutlined onClick={()=>{setIsModalEit(false); form.resetFields();}} /></Button>
                </Form.Item>
          </div>
         
        </Form>
    </Modal>
  )
}

export default EditTask
