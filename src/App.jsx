import { useState } from "react";

function App() {
  const [data,setData]=useState([
    {id:1,name:"Pooh",gender:"Male"},
    {id:2,name:"Poch",gender:"Male"},
    {id:3,name:"Cream",gender:"Female"}
  ]);
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>      
      <ul>
        {data.map((item)=>(
          <li key={item.id}> <h3>{item.id} | {item.name} | {item.gender}</h3></li>
        ))}
      </ul>
    </>
  );
}

export default App;
