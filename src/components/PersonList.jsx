import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "Pooh", gender: "Male" },
    { id: 2, name: "Poch", gender: "Male" },
    { id: 3, name: "Cream", gender: "Female" },
    { id: 3, name: "Ploy", gender: "Female" }
  ]);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
                <img src={item.gender == "Male" ? boy : girl} width={50} height={50} />
                <h3>{item.name}</h3>
                <button>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PersonList;
