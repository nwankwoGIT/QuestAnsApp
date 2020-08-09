import React, { Fragment, useState, useContext, useEffect } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { useHistory, Link } from "react-router-dom";
import TodoMenu from './TodoMenu'
export const EditTodo = (route) => {
    let history = useHistory();
    const { todos, editTodo } = useContext(TodoGlobalContext);
    const [selectedTodo, setSeletedTodo] = useState({ id: null, studentname: '', todoItem: '', status: '', iscomplete: false });
    const currentTodoId = route.match.params.id;
    
    useEffect(() => {
        const todoId = currentTodoId;
        const selectedTodo = todos.find(todo => todo.id === parseInt(todoId));
        setSeletedTodo(selectedTodo);        
    }, [currentTodoId,todos]);

    const onSubmit = e => {
        e.preventDefault();
        editTodo(selectedTodo);
        history.push('/');
    }

    const handleOnChange = (todoKey, value) => setSeletedTodo({ ...selectedTodo, [todoKey]: value })

    if (!selectedTodo || !selectedTodo.id) {
        return <div>Error: Invalid Selection</div>
    }

    return (
        <Fragment>
            <TodoMenu/>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="studentname">
                        Student Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedTodo.studentname} 
                            onChange={(e) => handleOnChange('studentname', e.target.value)} 
                            type="text" 
                            placeholder="Enter Student name" />
                    </div>
                   
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                        Todo Description
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedTodo.todoItem} 
                            onChange={(e) => handleOnChange('todoItem', e.target.value)} 
                            type="text" 
                            placeholder="Describe Todo Item" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                        Todo Completion Status
                        </label>
                        <label for="status-select">Choose Status:</label>
                        <select 
                            name="status" 
                            id="status-select" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            onChange={(e) => handleOnChange('status', e.target.value)} >    
                            <option value=".....">Choose ...</option>
                            <option value="started">Started</option>
                            <option value="progressing">Progressing</option>
                            <option value="completed">Completed</option>    
                        </select>                        
                    </div>
                    

                    <label>                                        
                        <input        
                            onChange={(e) => handleOnChange('iscomplete', e.target.checked)}
                            className="react-switch-checkbox"
                            id={`react-switch-new`}
                            type="checkbox"
                            value={selectedTodo.iscomplete}
                            checked={selectedTodo.iscomplete}
                        />
                         Toggle IsComplete
                         <label
                            style={{ background: selectedTodo.iscomplete && '#06D6A0' }}
                            className="react-switch-label"
                            htmlFor={`react-switch-new`}
                            >
                            <span className={`react-switch-button`} />
                        </label>
                       
                        </label>



                    
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Submit Edits
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}



