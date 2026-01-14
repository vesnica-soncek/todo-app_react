export const addTask = (title) => {
    console.log("Task added");
    console.log(title);
    const url = process.env.REACT_APP_API_URL;
    fetch(url, {
        method: 'POST',
        headers: {
            "X-SILO-KEY": process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify({done: false, title: title,
            user_id: localStorage.getItem("user_id")})
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

