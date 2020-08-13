import React, { Fragment, useState, useEffect, useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const TodoContacts = () => {
    
    const [studentname, setStudentName] = useState('');
    const [todoItem, setTodoItem] = useState('');
    const [status, setStatus] = useState('');
    const [iscomplete, setIsComplete] = useState(false);
    const { addTodo, todos } = useContext(TodoGlobalContext);
    
    let history = useHistory();
    
    const onSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            studentname,
            todoItem,
            status, 
            iscomplete            
        }
        addTodo(newTodo);
        history.push("/");
    }
    useEffect(() => {
        //setValue({value:iscomplete})
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="studentname">
                            Student Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                           value={studentname} 
                           onChange={(e) => setStudentName(e.target.value)} 
                           type="text" 
                           placeholder="Enter Student name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="todoItem">
                            Todo Item
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={todoItem} 
                            onChange={(e) => setTodoItem(e.target.value)} 
                            type="text" 
                            placeholder="Describe Todo Task" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
                            Todo Completion Status
                        </label>
                        <label for="status-select">Choose an Option:</label>
                        <select 
                            name="status" 
                            id="status-select" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                             onChange={(e) => setStatus(e.target.value)}>    
                            <option value=".....">Choose ...</option>
                            <option value="started">Started</option>
                            <option value="halfway">Halft Way</option>
                            <option value="complete">Complete</option>    
                        </select>
                        
                    </div>
                    
                    <label>                                        
                        <input        
                            onChange={() => setIsComplete(!iscomplete)}
                            className="react-switch-checkbox"
                            id={`react-switch-new`}
                            type="checkbox"
                            value={iscomplete}
                            checked={iscomplete}
                        />
                         Toggle IsComplete
                         <label
                            style={{ background: iscomplete && '#EF476F' }}
                            className="react-switch-label"
                            htmlFor={`react-switch-new`}
                            >
                            <span className={`react-switch-button`} />
                        </label>
                       
                        </label>
                    
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add New TodoTask
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>                    
                </form>
            </div>
        </Fragment>
    )
}
