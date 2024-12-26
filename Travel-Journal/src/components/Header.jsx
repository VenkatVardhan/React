import globe from "../images/globe.png"
export default function Header(){
    return (
        
        <header className="Header">
            <img className="Globe" src={globe} alt="Globe Icon" />
            <span>My Travel Journal</span>
        </header>
        

    )
}