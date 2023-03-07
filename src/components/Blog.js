

export const Blog = () => {
    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>Latest Blogs</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="entry">
                            <img className="img-responsive" src="img/blog/1.jpg" alt="Blog" />
                            <h3><a href="#">Communicating with you every step of the way</a></h3>
                            <span className="meta">
                                July 02, 2014 | Tag: Technology | By: David John
                            </span>
                            <p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="entry">
                            <img className="img-responsive" src="img/blog/2.jpg" alt="Blog" />
                            <h3><a href="#">Communicating with you every step of the way</a></h3>
                            <span className="meta">
                                July 02, 2014 | Tag: Technology | By: David John
                            </span>
                            <p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className="btn btn-default">See More</a>
                </div>
            </div>
        </div>
    );
}