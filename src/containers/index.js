import { Button, Layout, Popconfirm,  } from 'antd'
import React, { useState } from 'react'
import {PlusOutlined,CalendarOutlined,EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import AddModal from './add_new_modal'
import { columns } from '../data'
import  "./index.css"
import Draggable from 'react-draggable'
import moment from "moment"


const ToDoList = () => {
  const [isModalAdd, setIsModalAdd] = useState(false)
  const [check_id,setCheck_id]= useState(0)

  const col = columns.find((col)=>col.id ===check_id)
  
  const Confirmation = (e,a, time)=>{

    console.log(e);
    console.log(time);
  // console.log(moment(e?.timeStamp).format("DD-MM-YYYY,LTS"));
  }


  return (
    <Layout className="h-screen background">
      <h1 className="text-2xl font-bold text-blue-500 flex justify-center my-12">To do list </h1>
      <div className="flex justify-center">
      {columns.map((col)=>
        (
          <div className="border-2 bg-pink-50 w-3/12 min-h-1/2 h-full ml-11 rounded-lg " key={col.id} >
            <div > 
              <div className="mt-3 ml-6 text-lg "> 
                <p className="font-bold">
                  {col.name}
                </p>
              </div>
              <div className="flex justify-end -mt-6 mr-6 outline-none" >
                  <Button type="primary" className="bg-blue-500 h-full p-2 rounded-lg flex focus:outline-none focus:ring focus:border-blue-300" onClick={() =>{setIsModalAdd(true)
                     setCheck_id(col.id)}}  >
                  <PlusOutlined className="pt-1 text-gray-200" /><p className="text-white">New task</p>
                  </Button>
              </div>
              {
                 col?.task.map((content_id)=>
                 <Draggable> 
                   <div className="bg-white h-20 py-5 mx-7 mt-3 rounded-lg pl-3 h-full pb-7"  >
                      <div className="flex -mt-2">
                         <p className="-mt-1 mr-2 mb-2">
                            <CalendarOutlined />
                        </p>
                        <p >{content_id.time}</p>
                      </div>
                      <div className="h-full mt-2 -mb-2 "><p className="text-base font-bold">{content_id.content}</p></div>
                        <div className="flex justify-end -mt-7 mr-8">
                            <EditTwoTone  className ="mr-5 cursor-pointer"/>
                            <Popconfirm title="Do you want delete task" onConfirm={Confirmation}>
                                <DeleteTwoTone className="cursor-pointer" />
                            </Popconfirm>
                        </div>
                   </div>
               </Draggable>
                )
              }
         <div className="h-12 w-full bg-pink-50 mt-8"></div>
              
          </div>
         
        </div>
        )
      )}
      </div>
      <AddModal check_id={check_id} isModalAdd={isModalAdd} setIsModalAdd={()=>setIsModalAdd(false)} />
      
    </Layout>
  )
}

export default ToDoList
