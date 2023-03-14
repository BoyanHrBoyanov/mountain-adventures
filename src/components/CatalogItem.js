import { Link } from "react-router-dom";

export const CatalogItem = ({
    story
}) => {

    return (
        <div className="row blog">
            <img className="img-responsive col-sm-6" src={story.imageUrl} alt={story.name} />
            <div className="col-sm-4">
                <h3><Link to={`/details/${story._id}`}>{story.name}</Link></h3>
                <span className="meta">
                    {story.createdOn.split(', ')[0]} | {story.type} | By: {story.owner}
                    </span>
                <p>{story.description}</p>
                <div className="text-center">
                    <Link to={`/details/${story._id}`} className="btn btn-default">See More</Link>
                </div>
            </div>
        </div>
    );
}