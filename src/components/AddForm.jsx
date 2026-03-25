import "./AddForm.css"
import { useState } from "react";

export default function AddForm(){
    const [name,setName] = useState("")
    const [gender,setGender] = useState("Male")

    function saveData(e){
        e.preventDefault()
        const person={
            name:name,
            gender:gender
        }
        console.log(person)
    }
    return(
        <section className="container">
            <form onSubmit={saveData}>
                <label>Person Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>Male</option>
                    <option>FeMale</option>
                </select>
                <button type="submit" className="btn-save" disabled={name.trim()===""}>Submit</button>
            </form>
        </section>
    );
}