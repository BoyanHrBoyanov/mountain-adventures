import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p className="copy-right">Copyright &copy; 2014 | Designed By : <a href="http://www.indioweb.in/portfolio">IndioWeb</a>, All rights reserved. </p>
                <p>Created by Boyan Boyanov</p>
                <Link style={{color: "white"}} to={"https://github.com/BoyanHrBoyanov/mountain-adventures"} 
                target="_blank"><i className="fa-brands fa-github fa-xl"></i></Link>
            </div>
        </footer>
    );
}