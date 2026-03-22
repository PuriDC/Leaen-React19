import { useState } from "react";

function App() {
  const name = "Pooh";
  const [age, setAge] = useState(20);

  function add() {
    setAge(age + 1);
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <h2>Age : {age} y</h2>
      <button onClick={add}>+</button>{/* สามารถใช้เขียน function ไว้ด้านนอกแบบนี้ก็ได้หรือจะเขียนแบบบรรทัดถัดไปก็ได้แต่ถ้ามีคำสั่งหรือฟังชั่นมากกว่า 1 บรรทัดควรเขียนแยก*/}
      <button onClick={()=>setAge(age-1)}>-</button>
      <button onClick={()=>setAge(20)}>Clear</button>
    </>
  );
}

export default App;
