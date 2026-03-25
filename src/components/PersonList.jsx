import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css"
function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "Pooh", gender: "Male" },
    { id: 2, name: "Poch", gender: "Male" },
    { id: 3, name: "Cream", gender: "Female" },
    { id: 3, name: "Ploy", gender: "Female" }
  ]);

  const [show, setShow] = useState(true);
  const myStyle={
    color:"purple",
    fontSize:"20px"
  }

  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:"skyblue", fontSize:"25px"}}>จำนวนประชากร {data.length} คน</h2>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
                <img src={item.gender == "Male" ? boy : girl} width={50} height={50} />
                <p style={myStyle}>{item.name}</p>
                <div className="control">
                  <button>Delete</button>
                </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
