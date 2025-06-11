# 📝 To-Do List App

A simple and intuitive To-Do List application built with React. This app allows users to add, delete, and mark tasks as completed while maintaining data persistence using local storage.

## 🚀 Features

- **Add Tasks**: Quickly add tasks to your to-do list with a simple input field and button.
- **Delete Tasks**: Remove tasks from your list with a single click.
- **Toggle Completion**: Mark tasks as completed or uncompleted by clicking on them.
- **Persistent Storage**: All tasks are saved in local storage and restored on page reload.
- **Responsive Design**: The app is optimized for both desktop and mobile devices.

## 🛠 Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the application.
- **Local Storage**: To persist data between sessions.

## 📂 Project Structure

```
src/
├── components/
│ ├── AddToDo.jsx # Component to add new tasks
│ ├── Header.jsx # Component displaying the app title
│ ├── ToDoItem.jsx # Component for individual task items
│ ├── ToDoList.jsx # Component to display the list of tasks
├── App.jsx # Root component
├── App.css # Styling for the application
└── main.jsx # Entry point for the app
```