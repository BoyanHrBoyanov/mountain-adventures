

export const UpcomingEvents = () => {
    return(
        <div className="event" id="event">
				<div className="container">
					<div className="default-heading">
						<h2>Upcoming events</h2>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="event-item">
								<img className="img-responsive" src="img/event/1.jpg" alt="Events" />
								<h4><a href="#">Rihanna, Eminem on stage</a></h4>
								<span className="sub-text">Integrating technology and software solutions.</span>
								<p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="event-item">
								<img className="img-responsive" src="img/event/2.jpg" alt="Events" />
								<h4><a href="#">Dr. Dre on stage live</a></h4>
								<span className="sub-text">Integrating technology and software solutions.</span>
								<p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="event-item">
								<img className="img-responsive" src="img/event/3.jpg" alt="Events" />
								<h4><a href="#">Macaroons live Party</a></h4>
								<span className="sub-text">Integrating technology and software solutions.</span>
								<p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}