import React, { Fragment, useState, useEffect, useContext } from 'react';
import { TodoGlobalContext } from '../../context/TodoGlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Switch.css';
import TodoMenu from './TodoMenu'
export const AddContact = () => {    
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const { addContact, contacts } = useContext(TodoGlobalContext);    
    let history = useHistory();    
    const onSubmit = e => {
        e.preventDefault();
        const newContact = {
            id: contacts.length + 1,
            firstname,
            lastname,
            email,
            comments                        
        }
        addContact(newContact);
        history.push("/");
    }
    useEffect(() => {
        //setValue({value:iscomplete})
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <TodoMenu/>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
                            First Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                           value={firstname} 
                           onChange={(e) => setFirstName(e.target.value)} 
                           type="text" 
                           placeholder="Enter First name" />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                            Last Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                           value={lastname} 
                           onChange={(e) => setLastName(e.target.value)} 
                           type="text" 
                           placeholder="Enter Last name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="text" 
                            placeholder="Email Address" />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="comments">
                            Comments
                        </label>
                        <textarea  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                           value={comments} 
                           onChange={(e) => setComments(e.target.value)}                             
                           rows={6}
                           placeholder="Enter your Comments here" />
                    </div>    
                    
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add New Contact
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>                    
                </form>
            </div>
        </Fragment>
    )
}
