import React, { Fragment } from 'react';
import { TodoHeading } from './TodoHeading';
import { TodoTasklist2 } from './TodoTasklist2';
import TodoMenu from './TodoMenu'


export const TodoHome = () => {      
return (  
        <Fragment>    
            <TodoMenu/>
            <div className="App">
                 <div className="container mx-auto">                   
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">Using React Context API, Router and Hooks</h3>                    
                    <TodoHeading />
                    <TodoTasklist2 /> 
                    <hr/>                    
                </div>         
            </div>
        </Fragment>      
 )
}
     