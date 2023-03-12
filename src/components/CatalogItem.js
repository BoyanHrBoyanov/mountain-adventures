import { Link } from "react-router-dom";

export const CatalogItem = ({
    story
}) => {
    const date = new Date(Number(story._createdOn));

    return (
        <div className="row blog">
            <img className="img-responsive col-sm-6" src={story.imageUrl} alt={story.name} />
            <div className="col-sm-4">
                <h3><Link to={`/details/${story._id}`}>{story.name}</Link></h3>
                <span className="meta">
                    {date.toLocaleString()} | By: {story.owner}
                    </span>
                <p>{story.description}</p>
                <div className="text-center">
                    <Link to={`/details/${story._id}`} className="btn btn-default">See More</Link>
                </div>
            </div>
        </div>
    );
}