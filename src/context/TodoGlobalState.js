import React, { createContext, useReducer } from 'react';
import AppTodoReducer from './AppTodoReducer'
const initialState = {
                    todos: [{ id: 1, studentname: 'Cynthia John', todoItem: 'Finish My report', status: 'Starting', iscomplete: false},
                            { id: 2, studentname: 'Melony Weavers', todoItem: 'Edit and reformat my Clinical report', status: 'Starting', iscomplete: false}],	    
                    contacts: [{ id: 1, firstname: 'James', lastname: 'Patrick', email: 'Patrick@hotmail.com', comments: 'None'},
                            { id: 2, firstname: 'Veronica', lastname: 'Matthew', email: 'VERO@hotmail.com', comments: 'Currently on vacation'}]          			  
                     }
     
export const TodoGlobalContext = createContext(initialState);
export const TodoGlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppTodoReducer, initialState);    
    function removeTodo(id) {
        let r = window.confirm("Do you want to delete this item");
        if (r === true) {      
            dispatch({
                type: 'REMOVE_TODO',
                payload: id
            });
        }
    };
    
    function addTodo(todos) {
        dispatch({
            type: 'ADD_TODO',
            payload: todos
        });
    };

    function editTodo(todos) {
        dispatch({
            type: 'EDIT_TODO',
            payload: todos
        });
    };
    function togglecompleteTodo(id) {
        let r = window.confirm("Do you want to toggle this task's completion status ?");
        if (r === true) { 
        dispatch({
            type: 'TOGGLE_COMPLETE_TODO',
            payload: id
        });
    }
    };

    function removeContact(id) {
        let r = window.confirm("Do you want to delete this Contact");
        if (r === true) {      
            dispatch({
                type: 'REMOVE_CONTACT',
                payload: id
            });
        }
    };
    
    function addContact(contacts) {
        dispatch({
            type: 'ADD_CONTACT',
            payload: contacts
        });
    };

    function editContact(contacts) {
        dispatch({
            type: 'EDIT_CONTACT',
            payload: contacts
        });
    };
    
    return (<TodoGlobalContext.Provider value={{
        todos: state.todos,        
        contacts: state.contacts,
        removeTodo,
        addTodo,
        editTodo,
        togglecompleteTodo,
        removeContact,
        addContact,
        editContact,                   
    }}>
        {children}
    </TodoGlobalContext.Provider>);
}
