import { Button, Layout, notification, Popconfirm,  } from 'antd'
import React, { useCallback, useState } from 'react'
import {PlusOutlined,CalendarOutlined,EditTwoTone,DeleteTwoTone} from '@ant-design/icons'
import AddModal from './add_new_modal'
// import { columns } from '../data'
import  "./index.css"
import EditTask from './edit_task_modal'
import Draggable from 'react-draggable'


const ToDoList = () => {
  const [columns,setColumns] = useState([{id:"td", name:"TO DO", task:[{id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}]},{id:"ip", name:"IN PROGRESS", task:[]},{id:"de", name:"DONE", task:[]}]) 

  const [isModalAdd, setIsModalAdd] = useState(false)
  const [isModalEdit,setIsModalEdit] = useState(false)
  const [columns_id,setColumns_id]= useState(0)
  const [task_id,setTask_id]=useState(0)
  const [defaultValueEdit,setDefaultValue]= useState("")

  const Confirmation = useCallback((content,col_id)=>{
  const newColumns =  columns.map((e)=>{
    if(e?.id=== col_id){
      const newTask =  e.task.filter((k)=>k.id !==content.id)
      return {...e,task:newTask}
    }
    return e
  })
    setColumns(newColumns)
    notification.success({
      message:"Delete success"
    })
  },[ columns])
 
  console.log(defaultValueEdit);
  return (
  
    <Layout className="h-screen background">
      <h1 className="text-2xl font-bold text-blue-500 flex justify-center my-12">
        {/* To do list  */}
        </h1>
      <div className="flex justify-center">
      {columns.map((col)=>
        (
          <div className="border-2 bg-pink-50 w-3/12 min-h-1/2 h-full ml-11 rounded-lg " key={col.id} >
            <div > 
              <div className="mt-3 ml-6 text-lg flex"> 
                <p className="border-blue-500 border-2 bg-blue-500 text-white rounded-full mr-2 h-8 w-6 text-center" >{col?.task?.length}</p>
                <p className="font-bold">
                  {col.name}
                </p>
              </div>
              <div className="flex justify-end -mt-6 mr-6 outline-none" >
                  <Button type="primary" className="bg-blue-500 h-full p-2 rounded-lg flex focus:outline-none focus:ring focus:border-blue-300" onClick={() =>{setIsModalAdd(true)
                     }}  >
                  <PlusOutlined className="pt-1 text-gray-200" /><p className="text-white">New task</p>
                  </Button>
              </div>
              {
                 col?.task?.map((content_id)=>
                 <Draggable> 
                   <div className="bg-white h-20 py-5 mx-7 mt-3 rounded-lg pl-3 h-full pb-7"  >
                      <div className="flex -mt-2">
                         <p className="-mt-1 mr-2 mb-2">
                            <CalendarOutlined />
                        </p>
                        <p >{content_id?.time}</p>
                      </div>
                      <div className="h-full mt-2 -mb-2 "><p className="text-base font-bold">{content_id?.content}</p></div>
                        <div className="flex justify-end -mt-7 mr-8">
                            <EditTwoTone  className ="mr-5 cursor-pointer" onClick={()=>{setIsModalEdit(true) ;setColumns_id(col.id);setTask_id(content_id.id);setDefaultValue(content_id?.content) }}/>
                            <Popconfirm title="Do you want delete task" onConfirm={()=>Confirmation(content_id,col.id)}>
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
      <AddModal  isModalAdd={isModalAdd} setIsModalAdd={()=>setIsModalAdd(false)} columns={columns} />
      <EditTask isModalEdit={isModalEdit} setIsModalEit={()=>setIsModalEdit(false)} columns={columns} columns_id={columns_id} task_id={task_id}  setColumns_id={setColumns_id} defaultValueEdit={defaultValueEdit}/>
      
    </Layout>
  )
}

export default ToDoList
