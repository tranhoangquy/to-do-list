import { Button, Form, Input, Modal, Radio } from 'antd'
import React, { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid';
import moment from "moment"
// import { columns } from '../../data';

const AddModal = ({isModalAdd,setIsModalAdd,check_id,columns}) => {
  const radios = [{id:"td",name:"TO DO"},{id:"ip",name:"IN PROGRESS"},{id:"de",name:"DONE"}]
  const [columns_id,setColumns_id] = useState("")
 
  // const form = Form.useForm()
  const col = columns.find((col)=>col.id ===columns_id)
  
  const createTask = useCallback((value) =>{
    const data = {
      id:uuid(),
      content: value.content,
      time:moment().format("DD-MM-YYYY, LTS")
    }
  col?.task?.push(data)
  setIsModalAdd(false)
  },[col?.task,setIsModalAdd])
  return (
    <Modal title="CREATE NEW TASK" visible={isModalAdd} onCancel={()=>setIsModalAdd(false)} width={430}  footer={null}>
      <Form onFinish={createTask} >
        <Form.Item name="radio_title"> 
          <Radio.Group className="flex font-mono" >
          {
            radios.map((radio)=>

              <Radio className="text-lg" key={radio.id} value={radio.id} onChange={(e)=>setColumns_id(e?.target?.value)}>{radio.name}</Radio>
              
            )

          }
          </Radio.Group>
        </Form.Item>
       
        <Form.Item  name="content"
        rules={[
          {
            required:true,
            message:"Please enter input"
          }
        ]}
        >
            <Input placeholder="Enter your task..." />
        </Form.Item>
        <div className="flex justify-end">
            <Button htmlType="submit" type="primary" >
              Submit
            </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddModal
