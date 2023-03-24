import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const Header = () => {
	const { user } = useContext(AuthContext);

	return (
		<header>
			<nav className="navbar navbar-default" role="navigation">
				<div className="container">
					{/* <div className="navbar-header">
							<Link className="navbar-brand" to="/"><img className="img-responsive" src="/img/logo.png" alt="Logo" /></Link>
						</div> */}

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/catalog">Catalog</Link></li>
							{user && (
								<>
									<li><Link to="/create">Create</Link></li>
									<li><Link to="/logout">Logout</Link></li>
								</>
							)}
							{!user && (
								<>
									<li><Link to="/login">Login</Link></li>
									<li><Link to="/register">Register</Link></li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}