import "./Header.css"

// export default function Header(){
const Header=(props)=>{
    const {title} = props
    return(
        <nav>
            <h1>{props.title}</h1> 
            <button>Light/Dark</button>
        </nav>
    );
};
// สามารเขียนแบบย่อส่วนแบบนี้ได้
export default Header;