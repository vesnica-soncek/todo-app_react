import React, {useState, useEffect} from 'react';
import Button from "../Button/Button";
import styles from "./_todo.module.scss";

const Todo = () => {
    const [data, setData] = useState(false)
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3000/tasks';
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            console.log(data);
            setTasks(data);
            setData(data);
        }).catch(err => console.log(err));
    },[])
    if(data === false) {
        return <p>Loading data...</p>
    }
    else {
        return (
            <>
                <div className={styles.list}>
                    { tasks.map(task => (
                        <div key={task.id} className={styles.item}>
                            { task.title}
                            <div className={styles.actions}>
                                { task.done ? <Button title="Undone" type="secondary"/> : <Button title="Done" type="secondary-alt"/>}
                                <Button title="Remove" type="adjacent"/>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Todo;