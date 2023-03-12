

export const Subscribe = () => {
    return (
        <div className="subscribe" id="subscribe">
            <div className="container">
                <div className="sub-content">
                    <h3>Subscribe Here for Updates</h3>
                    <form role="form">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Email..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Subscribe</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}