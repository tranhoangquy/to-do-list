import { Input, Modal, Radio } from 'antd'
import React from 'react'

const AddModal = ({isModalAdd,setIsModalAdd}) => {
  console.log(isModalAdd);
  console.log(setIsModalAdd);
  const radios = [{id:1,name:"TO DO"},{id:2,name:"IN PROGRESS"},{id:3,name:"DONE"}]
  return (
    <Modal title="CREATE NEW TASK" visible={isModalAdd} onCancel={()=>setIsModalAdd(false)} width={430} >
      <div>
        <Radio.Group className="flex font-mono">
          {
            radios.map((radio)=>
            <div>
              <Radio className="text-lg" key={radio.id} value={radio.id}>{radio.name}</Radio>
            </div>
            
            )
          }
        </Radio.Group>
        <div>
            <Input placeholder="Enter your task..." />
        </div>
      </div>
    </Modal>
  )
}

export default AddModal
