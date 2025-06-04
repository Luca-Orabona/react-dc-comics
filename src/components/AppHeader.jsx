import style from "./AppHeader.module.css";

function AppHeader() {
    const navItemsHeader = ["characters", "comics", "movies", "tv", "games", "collectibles", "videos", "fans", "news", "shop"];

    return (
        <header>
            <div className="container">
                <nav className={style.row}>
                    <img src="/dc-logo.png" alt="logo dc-comics" />
                    <ul>
                        {navItemsHeader.map((curItems, index) => (
                            <li key={`item-header ${index}`}><a href="#">{curItems}</a></li>

                        ))}
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default AppHeader;