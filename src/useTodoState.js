import React, { useState } from 'react';

export default (intialValue) => {
    consr [todos, setTodos] = useState(intialValue)

    return {
        todos,
        addTodo: (todoText) => {
            setTodos([...todos, todoText]);
        },
        deleteTodo: (todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);

            setTodos(newTodos);
        }
    };
    
}
