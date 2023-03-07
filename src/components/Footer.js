

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p><a href="#">Home</a> | <a href="#work">works</a> | <a href="#team">Team</a> | <a href="#contact">Contact</a></p>
                <div className="social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                </div>
                <p className="copy-right">Copyright &copy; 2014 <a href="#">Your Site</a> | Designed By : <a href="http://www.indioweb.in/portfolio">IndioWeb</a>, All rights reserved. </p>
            </div>
        </footer>
    );
}