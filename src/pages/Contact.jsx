import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import locationIcon from "../assets/location_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import clockIcon from "../assets/clock_icon.svg";
import instagramIcon from "../assets/instagram_icon2.svg";
import emailIcon from "../assets/email_icon.svg";

import "../styles/contact.css";
import {useEffect} from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Контакты ProfMedService</title>

                <meta
                    name="description"
                    content="Адрес, телефоны и график работы клиники ProfMedService."
                />

                <link
                    rel="canonical"
                    href="https://www.profmedservice.info/contacts"
                />
            </Helmet>
            <main className="contacts-page">
                <section className="contacts-heading">
                    <div className="contacts-heading__container">
                        <nav
                            className="page-breadcrumbs"
                            aria-label={t("contactsPage.breadcrumbsAriaLabel")}
                        >
                            <Link to="/">
                                {t("contactspage.home")}
                            </Link>

                            <span
                                className="page-breadcrumbs-separator"
                                aria-hidden="true"
                            >
                                ›
                            </span>

                            <span>
                              {t("contacts")}
                            </span>
                        </nav>

                        <h1  className="contacts-heading__title">
                            {t("contacts")}
                        </h1>
                    </div>
                </section>

                <section className="contacts-section">
                    <div className="contacts-container">
                        <div className="contacts-grid">
                            <div className="contacts-card">
                                <div className="contacts-card__item">
                                    <div className="contacts-card__icon">
                                        <img src={locationIcon} alt="" />
                                    </div>

                                    <div className="contacts-card__content">
                                        <p>
                                            {t("contactspage.contact_address")}
                                        </p>
                                    </div>
                                </div>

                                <div className="contacts-card__item">
                                    <div className="contacts-card__icon">
                                        <img src={phoneIcon} alt="" />
                                    </div>

                                    <div className="contacts-card__content">
                                        <a href="tel:+77081030303">
                                            +7 708 103 03 03
                                        </a>
                                    </div>
                                </div>

                                <div className="contacts-card__item">
                                    <div className="contacts-card__icon">
                                        <img src={clockIcon} alt="" />
                                    </div>

                                    <div className="contacts-card__content">
                                        <p>
                                            {t("contactspage.contact_weekdays")}
                                        </p>

                                        <p>
                                            {t("contactspage.contact_saturday")}
                                        </p>

                                        <p>
                                            {t("contactspage.contact_sunday")}
                                        </p>
                                    </div>
                                </div>

                                <div className="contacts-card__item">
                                    <div className="contacts-card__icon">
                                        <img src={instagramIcon} alt="" />
                                    </div>

                                    <div className="contacts-card__content">
                                        <a
                                            href="https://www.instagram.com/profmedservice.kz/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            @profmedservice.kz
                                        </a>
                                    </div>
                                </div>

                                <div className="contacts-card__item">
                                    <div className="contacts-card__icon">
                                        <img src={emailIcon} alt="" />
                                    </div>

                                    <div className="contacts-card__content">
                                        <a href="mailto:profmedservice.kz@mail.ru">
                                            profmedservice.kz@mail.ru
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contacts-map">
                                <iframe
                                    title="ProfMedService на Яндекс Картах"
                                    src="https://yandex.kz/map-widget/v1/?ll=69.616677%2C42.314551&mode=search&oid=87674931987&ol=biz&z=17"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;