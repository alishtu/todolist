import React from "react";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import { deleteFuncContext } from "../Context";

export default function TaskList(props) {
  const deleteTask = useContext(deleteFuncContext);

  return (
    <div>
      {props.items.map((item) => {
        return <TaskItem item={item} key={item.id} deleteTask={deleteTask} />;
      })}
    </div>
  );
}