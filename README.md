# Daily Todo's

A simple Todo application built with **React** that allows users to manage daily tasks.

## Features

- Add new tasks
- Mark tasks as **Done / Undone**
- Remove tasks
- Fetch tasks from a local API using json-server
- Clean, dark-themed UI

## Tech Stack

- React
- JavaScript (ES6+)
- SCSS Modules
- Fetch API

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```

### 3. API requirement
The app expects a local API running at:

Run the backend as:
```bash
json-server --watch tasks.json
```

http://localhost:3000/tasks

Example task object:
```json
{
  "id": 1,
  "title": "Clean the apartment",
  "done": false
}
```

## Project Structure

```
src/
├── Components/
│   ├── Button/
│   ├── Todo/
│   └── ...
├── styles/
└── App.js
```

## Notes

- This project is intended for learning and demonstration purposes.
- No authentication or persistence is included by default.

## License

© 2026 Coders Lab
