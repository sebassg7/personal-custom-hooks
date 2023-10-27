import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodos = () => {
  
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])


    const  handelNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };
    
        dispatch( action );
    };
    

    const handleRemoveTodo = (id) => {
        
        // console.log({id});
    
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    };

    
    const handleToggleTodo = (id) => {
    
        console.log({id});
    
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id,
        })
    };
    return {
        todos,
        handelNewTodo,
        handleRemoveTodo, 
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,
        
    
  }
}
