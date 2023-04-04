import styles from './Search.module.css'

export const Search = ({
    setSearch,
    search,
}) => {
    function onSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <div className={`${styles.subscribe} subscribe`} id="subscribe">
            <div className="container">
                <div className="sub-content">
                        <div>
                            <input 
                                onInput={onSearch} 
                                value={search} 
                                type="text" 
                                className="form-control" 
                                placeholder="Search stories..." />
                        </div>
                </div>
            </div>
        </div>
    );
}