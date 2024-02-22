import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from "uuid";
import { deleteFuncContext } from "./Context";


function App() {

  // const tasks = [
  //   {id:1, value:"Study UI/UX", completed: false},
  //   {id:1, value:"Reading a book", completed: false},
  //   {id:1, value:"Meeting", completed: false},
  // ]

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    setItems(items);
  }, []);

  const addItem = () => {
    if (!inputValue) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: uuidv4(),
      value: inputValue,
    };
    setItems((oldList) => [...oldList, item]);
    console.log(item);

    setInputValue("");
  };

  const deleteTask = (id) => {
    setItems((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="wrapper">
      <h1>ToDoList</h1>
      <AddTaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addItem={addItem}
      />
      <deleteFuncContext.Provider value={deleteTask}>
        <TaskList items={items} />
      </deleteFuncContext.Provider>
    </div>
  );
}

export default App;
