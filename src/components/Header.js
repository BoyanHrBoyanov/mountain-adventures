

export const Header = () => {
    return (
        <header>
				{/* <!-- navigation --> */}
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						{/* <!-- Brand and toggle get grouped for better mobile display --> */}
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#"><img className="img-responsive" src="img/logo.png" alt="Logo" /></a>
						</div>

						{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="registration.html">Signup</a></li>
								<li><a href="login.html">Login</a></li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu <span className="caret"></span></a>
									<ul className="dropdown-menu" role="menu">
										<li><a href="#event">Events</a></li>
										<li><a href="#blog">New Blogs</a></li>
										<li><a href="#subscribe">Subscribe</a></li>
										<li><a href="#team">Executive Team</a></li>
										<li><a href="#">One more separated link</a></li>
									</ul>
								</li>
							</ul>
						</div>{/* <!-- /.navbar-collapse --> */}
					</div>{/* <!-- /.container-fluid --> */}
				</nav>
			</header>
    );
}