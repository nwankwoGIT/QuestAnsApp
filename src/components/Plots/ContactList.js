import React, { useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import TodoMenu from './TodoMenu'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {  Table, Space  } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCoffee, faHome, faBan, faHighlighter, faTrashAlt, faSpinner,faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(fab,  faCoffee,  faBan, faHome, faHighlighter, faTrashAlt, faSpinner,faCheckSquare)
const { Column } = Table;

export const ContactList = () => {       
    const {contacts, removeContact } = useContext(TodoGlobalContext);     
       
        return (
            <>                           
            <div>   
            <TodoMenu />                                               
            <h1 className="text-center">List Of All Contacts </h1>             
            <Table style={{ width: '100%', height: 'auto' }} dataSource={contacts} rowKey={(record) => record.id} >               
                <Column title="First Name" dataIndex="firstname" key="firstname" width='16vw'/>
                <Column title="Last Name" dataIndex="lastname" key="lastname" width='16vw'/>
                <Column title="Email Address" dataIndex="email" key="email" width='16vw'/>
                <Column title="Comments" dataIndex="comments" key="comments" width='16vw'/>                 
                <Column
                    title="Delete"                    
                    render={(text, record) => (
                    <Space size="middle">                    
                        <button onClick={() => removeContact(record.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                        </button> 
                    </Space>
                    )}         
                />
            </Table> 
            </div>
         </>
            
      );   
  }

  