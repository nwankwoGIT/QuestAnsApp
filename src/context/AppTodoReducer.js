export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)                
            };        

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'EDIT_TODO':
            const updatedTodo = action.payload;
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos
            };

         case 'TOGGLE_COMPLETE_TODO':            
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { id: todo.id, studentname: todo.studentname, todoItem: todo.todoItem, status: todo.status,iscomplete: !todo.iscomplete } : todo
                  )                 
            };  
            case 'REMOVE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id !== action.payload)                
                };        
    
            case 'ADD_CONTACT':
                return {
                    ...state,
                    contacts: [...state.contacts, action.payload]
                };
    
            case 'EDIT_CONTACT':
                    const updatedContact = action.payload;
                    const updatedContacts = state.contacts.map(contact => {
                        if (contact.id === updatedContact.id) {
                            return updatedContact;
                        }
                        return contact;
                    });    
                    return {
                        ...state,
                        contacts: updatedContacts
                    };                       
            
        default: return state;  
    }
}
 