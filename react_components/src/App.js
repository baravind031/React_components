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
import { students } from './data.js';
 
export default function List() {
  const listItems = students.map(students =>
    <li key={students.id}>
     
      <p>
        <b>{students.name}</b>
        <br/>
          {students.name+ " Profession " + students.profession  }
         
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

// export default App;

 


// function Greeting({ name }) {
//   return <h1>Hello, {name}</h1>;
// }

// export default function App() {
//   return <Greeting name="world" />
// }

