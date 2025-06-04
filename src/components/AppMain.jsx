import style from "./AppMain.module.css";
import SectionCards from "./SectionCards";


function AppMain() {
    return (
        <main className={style.main}>

            <section className={style.jumbotron}></section>

            <SectionCards />

            <section className={style.sectionNav}>
                <div className="container">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="/buy-comics-digital-comics.png" alt="" />
                                <span>DIGITAL COMICS</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/buy-comics-merchandise.png" alt="" />
                                <span>DC MERCHANDISE</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/buy-comics-subscriptions.png" alt="" />
                                <span>SUBSCRIPTION</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/buy-comics-shop-locator.png" alt="" />
                                <span>COMIC SHOP LOCATOR</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="/buy-dc-power-visa.svg" alt="" />
                                <span>DC POWER VISA</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    )
}

export default AppMain;