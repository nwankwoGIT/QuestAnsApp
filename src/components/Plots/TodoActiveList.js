import React, { Fragment, useState, useContext } from 'react';
import TodoMenu from './TodoMenu'
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {  Table, Space  } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faHighlighter, faTrashAlt, faSpinner,faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(fab,  faCoffee,  faHome, faHighlighter, faTrashAlt, faSpinner,faCheckSquare)
const { Column } = Table;
/*
In our call to library.add() we're passing

fab: which represents all of the brand icons in @fortawesome/free-brands-svg-icons. 
So any of the brand icons in that package may be referenced by icon name as a string anywhere else in our app. For example: "apple", "microsoft", or "google".
faCheckSquare and faCoffee: Adding each of these icons individually allows us to refer to them throughout our app by 
their icon string names, "check-square" and "coffee", respectively.
*/

export const TodoActiveList = () => {     
    const {todos } = useContext(TodoGlobalContext);      
    const activetodos = todos.filter ((todo) => {
         return todo.iscomplete === false;   
    })
    //const trItem = todos.map( (item,index) => data.push(item)) 
    // to resolve key error in antd Table you must use rowKey ='id' in <Table rowKey='id' dataSource={todos}>
        return (
            <>                          
            <div>
            <TodoMenu/>   
            <h2 className="text-center">All Active Todos </h2>    
            <Table style={{ width: '100%', height: 'auto' }} rowKey='id' dataSource={activetodos}>
             <Column title="Student Name" dataIndex="studentname" key="studentname" />
            <Column title="Todo Item" dataIndex="todoItem" key="todoItem" />
            <Column title="Status" dataIndex="status" key="status" />  
            <Column
                title="Status Icon"
                key="iscomplete"
                render={(text, record) => (  
                record.iscomplete ? <Space size="middle"><FontAwesomeIcon icon={faCoffee} /></Space> :
                <Space size="middle">                  
                   <FontAwesomeIcon icon={faSpinner} />
                </Space>
                
                )}
            />
            </Table> 
            </div>
         </>
            
      );   
  }

