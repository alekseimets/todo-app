import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './todoform.js';
import reportWebVitals from './reportWebVitals';


const App = () => {
  const [todos, setTodos] = useState([]);
    return(
      <div className="App">
        <Typography component='h1' variant='h2'>
          Todos
        </Typography>

        <TodoForm saveToDo={console.warn}/>
      </div>
    );
};


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

reportWebVitals();
