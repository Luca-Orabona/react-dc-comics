import style from "./AppFooter.module.css";

function AppFooter() {

    const dcComics = ["characters", "comics", "movies", "tv", "games", "videos", "news"];
    const shop = ["Shop DC", "Shop DC Collectibles"];
    const dc = ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
    const sites = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];



    return (

        <footer className={style.footer}>
            <div className="container">
                {/* footer top */}
                <div className={`${style.footerTop} ${style.grid}`}>
                    <nav className={`${style.footerNav} ${style.grid}`}>
                        <div>
                            <ul>
                                <li><h2>dc comics</h2></li>
                                {dcComics.map((curItem, index) => (

                                    <li key={`fotter-dc_comics ${index}`}><a href="#">{curItem}</a></li>
                                ))}
                            </ul>

                            <ul>
                                <li><h2>shop</h2></li>
                                {shop.map((curItem, index) => (

                                    <li key={`fotter-shop ${index}`}><a href="#">{curItem}</a></li>
                                ))}

                            </ul>
                        </div>

                        <ul>
                            <li><h2>dc</h2></li>
                               
                                {dc.map((curItem, index) => (

                                    <li key={`fotter-dc ${index}`}><a href="#">{curItem}</a></li>
                                ))}
                        </ul>

                        <ul>
                            <li><h2>sites</h2></li>
                              
                                {sites.map((curItem, index) => (

                                    <li key={`footer-sites ${index}`}><a href="#">{curItem}</a></li>
                                ))}
                        </ul>
                    </nav>

                    <div>
                        <img src="/dc-logo-bg.png" alt="logo" />
                    </div>
                </div>

            </div>

            {/* footer bottom */}
            <div className={style.footerBottom}>
                <div className="container">

                    <div className={style.row}>

                        <a href="#" className={style.btn}>
                            SIGN-UP NOW!
                        </a>

                        <ul className={style.icons}>
                            <li className={style.colorBlue}>FOLLOW USE</li>
                            <li><a href="#"><img src="/footer-facebook.png" alt="logo facebook" /></a></li>
                            <li><a href="#"><img src="/footer-twitter.png" alt="logo twitter" /></a></li>
                            <li><a href="#"><img src="/footer-youtube.png" alt="logo youtube" /></a></li>
                            <li><a href="#"><img src="/footer-pinterest.png" alt="logo pinterest" /></a></li>
                            <li><a href="#"><img src="/footer-periscope.png" alt="logo periscope" /></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;