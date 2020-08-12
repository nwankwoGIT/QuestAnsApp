import React, { Fragment } from 'react';
import './table.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
 export const ChatStatistics = ({questions, categoryToDisplay}) => {   
   return (
      <Fragment>
       <table class="zebra"> 
          <thead> 
          <tr> 
              <th>Who posted question)</th> 
              <th>Question Text</th> 
              <th>Date posted</th> 
              <th>Answers</th>               
          </tr> 
         </thead>         
         {questions.length > 0 ? <Fragment>
           <tbody>
          {questions.map(question => ( 
            (question.category === categoryToDisplay)  &&            
          <tr> 
            <td> {question.user.email}</td> 
            <td> {question.text}</td> 
            <td> {question.createdAt}</td> 
            {question.answers.map(answer => <td> {answer}<br/></td>)}              
            
          </tr>   
           ))}
           </tbody>
          </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">There are currently No Question or Answers in the system</p>} 
         </table> 
         </Fragment> 
    )}
    
 

