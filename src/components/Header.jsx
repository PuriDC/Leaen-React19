import "./Header.css"

// export default function Header(){
const Header=({title})=>{
    return(
        <nav>
            <h1>{title}</h1> 
            <button>Light/Dark</button>
        </nav>
    );
};
// สามารเขียนแบบย่อส่วนแบบนี้ได้
export default Header;