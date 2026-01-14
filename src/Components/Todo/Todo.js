import React, {useState, useEffect} from 'react';
import Button from "../Button/Button";
import styles from "./_todo.module.scss";
import Form from "../Form/Form";
import Input from "../Input/Input";
import {addTask, removeTask, changeTask} from "./todo.actions";
const Todo = () => {
    const [tasks,setTasks] = useState([]);

    const getTasks = () => {
        // TODO check infinite loop
        const url = process.env.REACT_APP_API_URL + "/tasks";
        fetch(url, { method: 'GET',
        headers: {
            "X-SILO-KEY": process.env.REACT_APP_API_KEY
        }})
            .then(res => res.json()).then(data => {
                setTasks(data)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => getTasks(),[]);

    if(tasks.length === 0) return <p>Loading data...</p>
    else {
        return (
            <>
                <Form>
                    <Input title="Add a task" id="task" name="task"/>
                    <Button title="Add Task" action={() => addTask(document.getElementById("task").value)}/>
                </Form>
                <div className={styles.list}>
                    { tasks.map(task => {
                        const classList = [styles.item, task.done? styles.undone : styles.done].join(" ");;
                        return (
                            <div key={task.id} className={classList}>
                                <span className={task.done? styles.undone : styles.done}>{ task.title}</span>
                                <div className={styles.actions}>
                                    { task.done ? <Button title="Undone" type="secondary-alt" size="small" action={() =>changeTask(task)} /> : <Button title="Done" type="secondary" size="small" action={() =>changeTask(task)}/>}
                                    <Button title="Remove" type="adjacent" size="small" action={() =>removeTask(task)}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}

export default Todo;