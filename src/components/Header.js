import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { Logout } from "./Logout";

export const Header = () => {
	const {user} = useContext(AuthContext);

    return (
        <header>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						{/* <div className="navbar-header">
							<Link className="navbar-brand" to="/"><img className="img-responsive" src="/img/logo.png" alt="Logo" /></Link>
						</div> */}

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<span>{user?.username}</span>
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/register">Register</Link></li>
								<li><Link to="/logout">Logout</Link></li>
								<li><Link to="/create">Create</Link></li>
								<li><Link to="/catalog">Catalog</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
    );
}