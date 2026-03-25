import Header  from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Pooh", gender: "Male" },
    { id: 2, name: "Poch", gender: "Male" },
    { id: 3, name: "Cream", gender: "Female" },
    { id: 4, name: "Ploy", gender: "Female" }
  ]);

  const [theme,setTheme] = useState(localStorage.getItem("mode") || "light")

  function deleteUser(id){
    const result = data.filter((user)=>user.id!==id) //new array
    setData(result)
  }

  useEffect(()=>{
    localStorage.setItem("mode",theme)
  },[theme])

  return (
    <div className={theme}>
      <div className="app">
        <Header title="PersonApp" theme={theme} setTheme={setTheme}/>
        <main>
          <AddForm data={data} setData={setData}/>
          <PersonList data={data} deleteUser={deleteUser}/>
        </main>
      </div>
    </div>
  );
}

export default App;
