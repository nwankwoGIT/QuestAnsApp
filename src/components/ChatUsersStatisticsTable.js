import React, { Fragment } from 'react';
import './table.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
 export const ChatUsersStatistics = ({users}) => {   
   return (
      <Fragment>
       <table className="zebra"> 
          <thead> 
          <tr> 
              <th>Users Email)</th> 
              <th>Users Id</th> 
              <th>Date joined</th> 
	          <th>Other</th> 
             {/* <th>Answers</th>   */}            
          </tr> 
         </thead>         
         {users.length > 0 ? <Fragment>
           <tbody>
          {users.map((user, index) => (                        
          		<tr key={index}> 
            		<td> {user.email}</td> 
            		<td> {user._id}</td> 
            		<td> {user.createdAt}</td> 
			        <td> {user._id}</td> 
            	{/* {question.answers.map((answer,item) => <td key={item}> {answer}<br/></td>)}  */}
          	  </tr>   
           ))}
           </tbody>
          </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">There are currently No Question or Answers in the system</p>} 
         </table> 
         </Fragment> 
    )}
    