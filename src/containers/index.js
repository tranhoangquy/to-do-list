import { Button, Layout,  } from 'antd'
import React, { useState } from 'react'
import {PlusOutlined,CalendarOutlined} from '@ant-design/icons'
import AddModal from './add_new_modal'
const ToDoList = () => {
  const [isModalAdd, setIsModalAdd] = useState(false)
  const columns = [{id:1, name:"TO DO", task:[{id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}]},{id:2, name:"IN PROGRESS", task:[]},{id:3, name:"DONE", task:[]}] 
  
  return (
    <Layout className="h-screen">
      <h1 className="text-2xl font-bold text-blue-500 flex justify-center my-12">To do list </h1>
      <div className="flex justify-center">
      {columns.map((col)=>
        (
          <div className="border-2 bg-pink-100 w-3/12 min-h-1/2 h-full ml-11 rounded-lg " key={col.id} >
            <div > 
              <div className="mt-3 ml-6 text-lg"> 
                <p className="font-bold">
                  {col.name}
                </p>
              </div>
              <div className="flex justify-end -mt-6 mr-6 outline-none" >
                  <Button type="primary" className="bg-blue-500 h-full p-2 rounded-lg flex focus:outline-none focus:ring focus:border-blue-300" onClick={() =>setIsModalAdd(true)}  >
                  <PlusOutlined className="pt-1 text-gray-200" /><p className="text-gray-200">New task</p>
                  </Button>
              </div>
              {
                 col?.task.map((content_id)=>
                 <div className="bg-white h-20 py-5 mx-7 mt-3 rounded-lg pl-3" style={{marginBottom: col?.task.length-1 ? "50px": "0px"}} >
                   <div>
                     <p>
                       <CalendarOutlined />{content_id.time}
                       </p>
                    </div>
                      <p >{content_id.content}</p>
                </div>
                )
              }
              
          </div>
         
        </div>
        )
      )}
      </div>
      
      <AddModal isModalAdd={isModalAdd} setIsModalAdd={()=>setIsModalAdd(false)} />
    </Layout>
  )
}

export default ToDoList
