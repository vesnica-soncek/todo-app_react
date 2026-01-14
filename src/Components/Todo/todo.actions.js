export const addTask = (title) => {
    console.log("Task added");
    console.log(title);
    const url = 'http://localhost:3000/tasks/'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({done: false, title: title})
    }).then(res => res.json()).then(data => {
    }).catch(err => console.log(err));
}
export const changeTask = (task) => {
    console.log("Task done");
    const url = 'http://localhost:3000/tasks/' + task.id;
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({done: !task.done})
    }).then(res => res.json()).then(data => {
    }).catch(err => console.log(err));
}

export const removeTask = (task) => {
    console.log("Task removed");
    const url = 'http://localhost:3000/tasks/' + task.id;
    fetch(url, {
        method: 'DELETE',
    }).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(err => console.log(err));
}

