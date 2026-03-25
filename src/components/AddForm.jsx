import "./AddForm.css"
import { useState } from "react";

export default function AddForm(){
    const [name,setName] = useState("")
    const [gender,setGender] = useState("Male")
    return(
        <section className="container">
            <form>
                <label>Person Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>Male</option>
                    <option>FeMale</option>
                </select>
                <button type="submit" className="btn-save">Submit</button>
            </form>
        </section>
    );
}