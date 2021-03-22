import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './todoform.js';
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList';
import './styles.css';


const App = () => {
  const [todos, setTodos] = useState([]);
    return(
      <div className="App">
        <Typography component='h1' variant='h2'>
          Todos
        </Typography>

        <TodoForm 
        
          saveToDo={(todoText) => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              setTodos([...todos, trimmedText]);
            };
          }}
        />

        <TodoList todos={todos}/>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

reportWebVitals();
