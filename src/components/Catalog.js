import { CatalogItem } from "./CatalogItem";


export const Catalog = ({
    stories
}) => {
    return (
        <div className="blog" id="blog">
            <div className="container">
                <div className="default-heading">
                    <h2>All Stories</h2>
                </div>
                {stories.map(s => <CatalogItem key={s._id} story={s} />)}
            </div>
        </div>
    );
}