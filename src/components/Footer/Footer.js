import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>Created by Boyan Boyanov</p>
                <Link style={{color: "white"}} to={"https://github.com/BoyanHrBoyanov/mountain-adventures"} 
                target="_blank"><i className="fa-brands fa-github fa-xl"></i></Link>
            </div>
        </footer>
    );
}