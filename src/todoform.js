import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const ToDoForm = ({saveToDo}) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(event) => {event.preventDefault(); saveToDo(value);}}>
      <TextField variant="outlined" placeholder="Add todo" margin="normal" onChange={(event) => {setValue(event.target.value);}} value={value}/>
    </form>
  );
};

export default ToDoForm;
