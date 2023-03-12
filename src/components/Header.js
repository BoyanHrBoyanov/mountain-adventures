import { Link } from "react-router-dom";

export const Header = () => {

	const handleLogout = () => {
		sessionStorage.clear();
}

    return (
        <header>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<Link className="navbar-brand" to="/"><img className="img-responsive" src="img/logo.png" alt="Logo" /></Link>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="/register">Signup</Link></li>
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/create">Create</Link></li>
								<li><Link to="/catalog">Catalog</Link></li>
								<li><Link onClick={handleLogout} to="/">Logout</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
    );
}