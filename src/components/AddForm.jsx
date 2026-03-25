import "./AddForm.css"
import { useState } from "react";

export default function AddForm(props){
    const [name,setName] = useState("")
    const [gender,setGender] = useState("Male")

    const {data,setData} = props

    function saveData(e){
        e.preventDefault()
        const person={
            id:Math.floor(Math.random()*1000),
            name:name,
            gender:gender
        }
        console.log(person)
        setData([...data,person])
        setName("")
        setGender("Male")
    }
    return(
        <section className="container">
            <form onSubmit={saveData}>
                <label>Person Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <button type="submit" className="btn-save" disabled={name.trim()===""}>Submit</button>
            </form>
        </section>
    );
}