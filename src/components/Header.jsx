import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo_icon.svg";
import aboutIcon from "../assets/about_icon.svg";
import contactIcon from "../assets/contact_icon.svg";
import doctorIcon from "../assets/doctor_icon.svg";
import serviceIcon from "../assets/service_icon.svg";
import languageIcon from "../assets/language_icon.svg";

import "../styles/header.css";

const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const [languageOpen, setLanguageOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentLanguage =
        i18n.resolvedLanguage === "kz" ? "KZ" : "RU";

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const closeLanguageMenu = () => {
        setLanguageOpen(false);
    };

    const toggleLanguageMenu = (event) => {
        event.stopPropagation();
        setLanguageOpen((previous) => !previous);
    };

    const handleLanguageChange = async (language) => {
        try {
            await i18n.changeLanguage(language);
            setLanguageOpen(false);
        } catch (error) {
            console.error("Не удалось изменить язык:", error);
        }
    };

    useEffect(() => {
        const handleWindowClick = () => {
            closeLanguageMenu();
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeLanguageMenu();
                closeMobileMenu();
            }
        };

        window.addEventListener("click", handleWindowClick);
        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("click", handleWindowClick);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <div className="top-bar">
                <div className="top-bar_container">
                    <div className="top-left">
                        <span>{t("address")}</span>
                        <span>{t("schedule")}</span>
                    </div>

                    <div className="top-right">
                        <a
                            href="tel:+77081030303"
                            className="top-phone"
                        >
                            +7 708 103 03 03
                        </a>

                        <a href="mailto:profmedservice.kz@mail.ru">
                            profmedservice.kz@mail.ru
                        </a>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="header_container">
                    <div className="header_body">
                        <div className="left-group">
                            <Link
                                to="/"
                                className="logo"
                                aria-label="Перейти на главную страницу"
                            >
                                <img
                                    src={logo}
                                    alt="ProfMedService"
                                />
                            </Link>

                            <nav className="nav desktop-nav">
                                <Link
                                    to="/"
                                    className={`nav-link ${
                                        isActive("/") ? "nav-link--active" : ""
                                    }`}
                                >
                                    <img
                                        src={aboutIcon}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    <span>{t("about")}</span>
                                </Link>

                                <Link
                                    to="/catalog"
                                    className={`nav-link ${
                                        isActive("/catalog")
                                            ? "nav-link--active"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={serviceIcon}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    <span>{t("services")}</span>
                                </Link>

                                <Link
                                    to="/doctors"
                                    className={`nav-link ${
                                        isActive("/doctors")
                                            ? "nav-link--active"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={doctorIcon}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    <span>{t("doctors")}</span>
                                </Link>

                                <Link
                                    to="/contacts"
                                    className={`nav-link ${
                                        isActive("/contacts")
                                            ? "nav-link--active"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={contactIcon}
                                        alt=""
                                        className="nav-icon"
                                    />
                                    <span>{t("contacts")}</span>
                                </Link>
                            </nav>
                        </div>

                        <div className="right-group">
                            <a
                                href="https://wa.me/77081030303"
                                target="_blank"
                                rel="noreferrer"
                                className="header_buttons"
                            >
                                {t("appointment")}
                            </a>

                            <div
                                className="lang"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className="lang-selected"
                                    onClick={toggleLanguageMenu}
                                    aria-expanded={languageOpen}
                                    aria-haspopup="listbox"
                                    aria-label="Выбрать язык"
                                >
                                    <img
                                        src={languageIcon}
                                        alt=""
                                        className="lang-selected__icon"
                                    />

                                    <span>{currentLanguage}</span>

                                    <span
                                        className={`lang-arrow ${
                                            languageOpen ? "lang-arrow--open" : ""
                                        }`}
                                    />
                                </button>

                                {languageOpen && (
                                    <div
                                        className="lang-dropdown"
                                        role="listbox"
                                        aria-label="Доступные языки"
                                    >
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={currentLanguage === "RU"}
                                            className={
                                                currentLanguage === "RU"
                                                    ? "lang-option lang-option--active"
                                                    : "lang-option"
                                            }
                                            onClick={() => {
                                                void handleLanguageChange("ru");
                                            }}
                                        >
                                            <span className="lang-option__code">RU</span>
                                            <span className="lang-option__name">Русский</span>
                                            <span className="lang-option__check" />
                                        </button>

                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={currentLanguage === "KZ"}
                                            className={
                                                currentLanguage === "KZ"
                                                    ? "lang-option lang-option--active"
                                                    : "lang-option"
                                            }
                                            onClick={() => {
                                                void handleLanguageChange("kz");
                                            }}
                                        >
                                            <span className="lang-option__code">KZ</span>
                                            <span className="lang-option__name">Қазақша</span>
                                            <span className="lang-option__check" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <button
                type="button"
                className={`mobile-menu-overlay ${
                    mobileMenuOpen
                        ? "mobile-menu-overlay--visible"
                        : ""
                }`}
                onClick={closeMobileMenu}
                aria-label="Закрыть мобильное меню"
            />

            <aside
                className={`mobile-menu ${
                    mobileMenuOpen ? "mobile-menu--open" : ""
                }`}
                aria-hidden={!mobileMenuOpen}
            >
                <div className="mobile-menu__header">
                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        aria-label="Перейти на главную страницу"
                    >
                        <img
                            src={logo}
                            alt="ProfMedService"
                            className="mobile-menu__logo"
                        />
                    </Link>

                    <button
                        type="button"
                        className="mobile-menu__close"
                        onClick={closeMobileMenu}
                        aria-label="Закрыть мобильное меню"
                    >
                        <span />
                        <span />
                    </button>
                </div>

                <nav className="mobile-menu__nav">
                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className={`mobile-menu__link ${
                            isActive("/")
                                ? "mobile-menu__link--active"
                                : ""
                        }`}
                    >
                        <img src={aboutIcon} alt="" />
                        <span>{t("about")}</span>
                    </Link>

                    <Link
                        to="/catalog"
                        onClick={closeMobileMenu}
                        className={`mobile-menu__link ${
                            isActive("/catalog")
                                ? "mobile-menu__link--active"
                                : ""
                        }`}
                    >
                        <img src={serviceIcon} alt="" />
                        <span>{t("services")}</span>
                    </Link>

                    <Link
                        to="/doctors"
                        onClick={closeMobileMenu}
                        className={`mobile-menu__link ${
                            isActive("/doctors")
                                ? "mobile-menu__link--active"
                                : ""
                        }`}
                    >
                        <img src={doctorIcon} alt="" />
                        <span>{t("doctors")}</span>
                    </Link>

                    <Link
                        to="/contacts"
                        onClick={closeMobileMenu}
                        className={`mobile-menu__link ${
                            isActive("/contacts")
                                ? "mobile-menu__link--active"
                                : ""
                        }`}
                    >
                        <img src={contactIcon} alt="" />
                        <span>{t("contacts")}</span>
                    </Link>
                </nav>

                <div className="mobile-menu__language">
                    <button
                        type="button"
                        className={
                            currentLanguage === "RU"
                                ? "mobile-language mobile-language--active"
                                : "mobile-language"
                        }
                        onClick={() => {
                            void handleLanguageChange("ru");
                        }}
                    >
                        <span>RU</span>
                        <small>Русский</small>
                    </button>

                    <button
                        type="button"
                        className={
                            currentLanguage === "KZ"
                                ? "mobile-language mobile-language--active"
                                : "mobile-language"
                        }
                        onClick={() => {
                            void handleLanguageChange("kz");
                        }}
                    >
                        <span>KZ</span>
                        <small>Қазақша</small>
                    </button>
                </div>

                <div className="mobile-menu__contacts">
                    <a href="tel:+77081030303">
                        +7 708 103 03 03
                    </a>

                    <a href="mailto:profmedservice.kz@mail.ru">
                        profmedservice.kz@mail.ru
                    </a>

                    <span>{t("address")}</span>
                    <span>{t("schedule")}</span>
                </div>

                <a
                    href="https://wa.me/77081030303"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-menu__appointment"
                >
                    {t("appointment")}
                </a>
            </aside>

            <nav className="mobile-bottom-nav">
                <Link
                    to="/"
                    className={`mobile-bottom-nav__item ${
                        isActive("/")
                            ? "mobile-bottom-nav__item--active"
                            : ""
                    }`}
                >
                    <img src={aboutIcon} alt="" />
                    <span>{t("about")}</span>
                </Link>

                <Link
                    to="/catalog"
                    className={`mobile-bottom-nav__item ${
                        isActive("/catalog")
                            ? "mobile-bottom-nav__item--active"
                            : ""
                    }`}
                >
                    <img src={serviceIcon} alt="" />
                    <span>{t("services")}</span>
                </Link>

                <Link
                    to="/"
                    className="mobile-bottom-nav__logo"
                    aria-label="Перейти на главную страницу"
                >
                    <img
                        src={logo}
                        alt="ProfMedService"
                    />
                </Link>

                <Link
                    to="/doctors"
                    className={`mobile-bottom-nav__item ${
                        isActive("/doctors")
                            ? "mobile-bottom-nav__item--active"
                            : ""
                    }`}
                >
                    <img src={doctorIcon} alt="" />
                    <span>{t("doctors")}</span>
                </Link>

                <button
                    type="button"
                    className={`mobile-bottom-nav__item mobile-bottom-nav__menu ${
                        mobileMenuOpen
                            ? "mobile-bottom-nav__item--active"
                            : ""
                    }`}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Открыть мобильное меню"
                >
          <span className="mobile-bottom-nav__burger">
            <span />
            <span />
            <span />
          </span>

                    <span>Меню</span>
                </button>
            </nav>
        </>
    );
};

export default Header;