import React, { Fragment } from 'react';
import './table.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
 export const ChatStatistics = ({questions, categoryToDisplay}) => {  
  const filteredQuestions = questions.filter(question => question.category === categoryToDisplay)
   return (
      <Fragment>
       <table className="zebra"> 
          <thead> 
          <tr> 
              <th>Who posted question)</th> 
              <th>Question Text</th> 
              <th>Date posted</th> 
	            <th>Responses</th> 
             {/* <th>Answers</th>   */}            
          </tr> 
         </thead>         
         {filteredQuestions.length > 0 ? <Fragment>
           <tbody>
          {filteredQuestions.map((question, index) => ( 
            (question.category === categoryToDisplay)  &&            
          		<tr key={index}> 
            		<td> {question.user.email}</td> 
            		<td> {question.text}</td> 
            		<td> {question.createdAt}</td> 
			        <td> {question.answers.length}</td> 
            	{/* {question.answers.map((answer,item) => <td key={item}> {answer}<br/></td>)}  */}
          	  </tr>   
           ))}
           </tbody>
          </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">There are currently Nothing to display under this category </p>} 
         </table> 
         </Fragment> 
    )}
    
 

