import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/publicOffer.css";

const PublicOffer = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);

    const { t, i18n } = useTranslation();

    const currentLanguage =
        i18n.resolvedLanguage === "kz" ? "kz" : "ru";

    const publicOfferFile =
        currentLanguage === "kz"
            ? "/documents/public-offer-kz.pdf"
            : "/documents/public-offer-ru.pdf";

    return (
        <main className="public-offer-page">
            <section className="public-offer-heading">
                <div className="public-offer-container">
                    <nav
                        className="page-breadcrumbs"
                        aria-label={t("publicOfferPage.breadcrumbsAriaLabel")}
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
                            {t("public_offer")}
                        </span>
                    </nav>

                    <h1 className="public-offer-heading__title">{t("public_offer")}</h1>
                </div>
            </section>

            <section className="public-offer-section">
                <div className="public-offer-container">
                    <div className="public-offer-toolbar">
            <span className="public-offer-language">
              {currentLanguage === "kz"
                  ? "Қазақша нұсқа"
                  : "Русская версия"}
            </span>

                        <a
                            href={publicOfferFile}
                            target="_blank"
                            rel="noreferrer"
                            className="public-offer-open"
                        >
                            {t("publicOfferPage.openPdf")}
                        </a>
                    </div>

                    <div className="public-offer-viewer">
                        <iframe
                            key={publicOfferFile}
                            src={`${publicOfferFile}#toolbar=1&navpanes=0&view=FitH`}
                            title={t("public_offer")}
                            className="public-offer-frame"
                        />
                    </div>

                    <div className="public-offer-fallback">
                        <p>{t("publicOfferPage.fallback")}</p>

                        <a
                            href={publicOfferFile}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("publicOfferPage.openPdf")}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PublicOffer;