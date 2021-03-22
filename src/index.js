import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './todoform.js';
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';


const App = () => {
  const [todos, addTodo, deleteTodo] = useTodoState([]);
    return(
      <div className="App">
        <Typography component='h1' variant='h2'>
          Todos
        </Typography>

        <TodoForm 
        
          saveToDo={(todoText) => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodos([...todos, trimmedText]);
            };
          }}
        />

        <TodoList 
        savetodos={todos}
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
        }}
        />
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

reportWebVitals();
