

export const TopStory = ({story}) => {
    return (
        
            <div className="col-md-4 col-sm-4">
                <div className="event-item">
                    <img className="img-responsive" src={story.imageUrl} alt="Events" />
                    <h4><a href="#">{story.name}</a></h4>
                    <span className="sub-text">{story.mountain}</span>
                    <p>{story.description}</p>
                </div>
            </div>
    );
}