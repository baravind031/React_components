// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This are components  <br/> <hr/>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

 


// function Greeting({ name }) {
//   return <h1>Hello, {name}</h1>;
// }

// export default function App() {
//   return <Greeting name="world" />
// }




// import { students } from './data.js';
 
// export default function List() {
//   const listItems = students.map(students =>
//     <li key={students.id}>
     
//       <p>
//         <b>{students.name}</b>
//         <br/>
//           {students.name + " Profession " + students.profession  }
         
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }




// ********Build a task tracker application using React ********

import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // creating intial object with empty values 
  //  newTask is current value and 
  // setNewTask is a function to updated  state value
  const [newTask, setNewTask] = useState({
    name: "",
    description: ""
    // for name  and description properties we can give default values
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

// handleSubmit function is responsible for updating the task state variable with a new task.
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevTasks) => [...prevTasks, newTask]);
    
// we using setNewTask function to clear the input fields
    setNewTask({ name: "", description: "" });
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Task Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={newTask.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Task Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button type="submit">Add Task</button>
        </div>
      </form>
      <div></div>
      <div className="task-list">
        <h2> List of Name and Description : </h2>
        {tasks.length === 0 ? (
          <p>No Name and Description available, please add list of elements</p>
        ) : (
          <ul> 
            {/* <pre> */}
            {tasks.map((task, index) => (
              <li key={index}>

                <strong>{task.name}:</strong>     {task.description}

                <div >
                <button className="delete_btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
            {/* </pre> */}
          </ul>
        )}
      </div>
    </div>
  );
}
