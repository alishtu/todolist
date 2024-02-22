import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import React from 'react';

function AddTaskForm(props) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="standard"
          label="Add Task"
          value={props.inputValue}
          onChange={(e) => props.setInputValue(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{ width: "150px", marginTop: "15px" }}
          onClick={props.addItem}
        >
          Add Task
        </Button>
      </div>
    );
  }
  
  export default AddTaskForm;