import { useState } from "react";
import "./PersonList.css"
import User from "./User";
import { FaEye } from "react-icons/fa";//open eye
import { FaEyeSlash } from "react-icons/fa";//close eye


function PersonList({data,deleteUser}) {

  const [show, setShow] = useState(true);
  const myStyle={
    color:"purple",
    fontSize:"20px"
  }

  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:"skyblue", fontSize:"25px"}}>จำนวนประชากร {data.length} คน</h2>
        <span onClick={() => setShow(!show)}>{show ? <FaEyeSlash size={30}/> : <FaEye size={30}/>}</span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser}/>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
