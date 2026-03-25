import "./Header.css"
import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";

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
            <span onClick={toggleTheme}>
                {theme=="light" ? <GoSun size={25}/> : <BsFillMoonStarsFill size={25}/>}
            </span>
        </nav>
    );
};
// สามารเขียนแบบย่อส่วนแบบนี้ได้
export default Header;