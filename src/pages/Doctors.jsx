import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { doctors } from "../data/doctor.js";
import { Helmet } from "react-helmet-async";
import "../styles/doctors.css";
import {useEffect} from "react";

const Doctor = () => {
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
                <title>Врачи клиники ProfMedService</title>

                <meta
                    name="description"
                    content="Врачи медицинской клиники ProfMedService в Шымкенте."
                />

                <link
                    rel="canonical"
                    href="https://www.profmedservice.info/doctors"
                />

                <meta
                    property="og:url"
                    content="https://www.profmedservice.info/doctors"
                />
            </Helmet>

            <main className="doctors-page">
            <section className="doctors-page-heading">
                <div className="doctors-page-heading__container">
                    <nav
                        className="page-breadcrumbs"
                        aria-label={t("doctorsPage.breadcrumbsAriaLabel")}
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

                        <span>{t("doctors")}</span>
                    </nav>

                    <div className="doctors-page-heading__content">
                        <h1 className="doctors-heading__title">
                            {t("doctorsPage.title")}
                        </h1>

                        <p className="doctors-heading__description">
                            {t("doctorsPage.description")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="doctors-section">
                <div className="doctors-container">
                    <div className="doctors-grid">
                        {doctors.map((doctor) => (
                            <article
                                className="doctor-card"
                                key={doctor.id}
                            >
                                <div className="doctor-card__image-wrapper">
                                    <img
                                        className="doctor-card__image"
                                        src={doctor.image}
                                        alt={doctor.fullName}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="doctor-card__content">
                                    <h2 className="doctor-card__name">
                                        {doctor.fullName}
                                    </h2>

                                    <p className="doctor-card__specialization">
                                        {t(
                                            `doctorSpecializations.${doctor.specializationKey}`
                                        )}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};

export default Doctor;