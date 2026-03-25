import "./Header.css"

// export default function Header(){
const Header=({title,theme,setTheme})=>{

    function toggleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return(
        <nav>
            <h1>{title}</h1> 
            <button onClick={toggleTheme}>Mode : {theme}</button>
        </nav>
    );
};
// สามารเขียนแบบย่อส่วนแบบนี้ได้
export default Header;