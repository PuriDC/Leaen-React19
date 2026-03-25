import "./AddForm.css"
export default function AddForm(){
    return(
        <section className="container">
            <form>
                <label>Person Name</label>
                <input type="text" />
                <select>
                    <option>Male</option>
                    <option>FeMale</option>
                </select>
                <button type="submit" className="btn-save">Submit</button>
            </form>
        </section>
    );
}