import Header  from "./components/Header";
import PersonList from "./components/PersonList";
import { useState } from "react";
import "./App.css"

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Pooh", gender: "Male" },
    { id: 2, name: "Poch", gender: "Male" },
    { id: 3, name: "Cream", gender: "Female" },
    { id: 4, name: "Ploy", gender: "Female" }
  ]);
  
  return (
    <div className="app">
      <Header title="PersonApp"/>
      <main>
        <PersonList data={data}/>
      </main>
    </div>
  );
}

export default App;
