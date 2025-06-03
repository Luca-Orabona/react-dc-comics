import style from "./AppFooter.module.css";

function AppFooter() {
    return (

        <footer className={style.footer}>
            <div className="container">
                {/* footer top */}
                <div className={`${style.footerTop} ${style.grid}`}>
                    <nav className={`${style.footerNav} ${style.grid}`}>
                        <div>
                            <ul>
                                <li><h2>dc comics</h2></li>
                                <li><a href="#">characters</a></li>
                                <li><a href="#">comics</a></li>
                                <li><a href="#">movies</a></li>
                                <li><a href="#">tv</a></li>
                                <li><a href="#">games</a></li>
                                <li><a href="#">videos</a></li>
                                <li><a href="#">news</a></li>
                            </ul>

                            <ul>
                                <li><h2>shop</h2></li>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        <ul>
                            <li><h2>dc</h2></li>
                            <li><a href="#">characters</a></li>
                            <li><a href="#">comics</a></li>
                            <li><a href="#">movies</a></li>
                            <li><a href="#">tv</a></li>
                            <li><a href="#">games</a></li>
                            <li><a href="#">videos</a></li>
                            <li><a href="#">news</a></li>
                        </ul>

                        <ul>
                            <li><h2>sites</h2></li>
                            <li><a href="#">characters</a></li>
                            <li><a href="#">comics</a></li>
                            <li><a href="#">movies</a></li>
                            <li><a href="#">tv</a></li>
                            <li><a href="#">games</a></li>
                            <li><a href="#">videos</a></li>
                            <li><a href="#">news</a></li>
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