import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../assets/logo_icon.svg";
import instagramIcon from "../assets/instagram_icon.svg";
import whatsappIcon from "../assets/whatsapp_icon.svg";
import yandexmapIcon from "../assets/yandexmap_icon.svg";
import twogismapIcon from "../assets/2gismap_icon.svg";
import googlemapIcon from "../assets/googlemap_icon.svg";

import "../styles/footer.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const foundationYear = 2026;
  const currentYear = new Date().getFullYear();

  const copyrightYear =
      currentYear > foundationYear
          ? `${foundationYear} - ${currentYear}`
          : foundationYear;

  const currentLanguage =
      i18n.resolvedLanguage === "kz" ? "kz" : "ru";

  const publicOfferFile =
      currentLanguage === "kz"
          ? "/documents/public-offer-kz.pdf"
          : "/documents/public-offer-ru.pdf";

  return (
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_left">
            <Link
                to="/"
                className="footer_logo-link"
                aria-label="Перейти на главную страницу"
            >
              <img
                  src={logo}
                  alt="ProfMedService"
                  className="footer_logo"
              />
            </Link>

            <p className="footer_text">
              {t("footer_text")}
            </p>
          </div>

          <div className="footer_right">
            <nav
                className="footer_nav"
                aria-label="Навигация в футере"
            >
              <Link to="/" className="footer_nav-link">
                {t("about")}
              </Link>

              <Link
                  to="/catalog"
                  className="footer_nav-link"
              >
                {t("services")}
              </Link>

              <Link
                  to="/doctors"
                  className="footer_nav-link"
              >
                {t("doctors")}
              </Link>

              <Link
                  to="/contacts"
                  className="footer_nav-link"
              >
                {t("contacts")}
              </Link>
            </nav>

            <div className="footer_icons">
              <a
                  href="https://www.instagram.com/profmedservice.kz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" />
              </a>

              <a
                  href="https://wa.me/77081030303"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="" />
              </a>

              <a
                  href="https://yandex.kz/maps/ru/-/CPRafOyt"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Яндекс Карты"
              >
                <img src={yandexmapIcon} alt="" />
              </a>

              <a
                  href="https://go.2gis.com/b3TPb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="2GIS"
              >
                <img src={twogismapIcon} alt="" />
              </a>

              <a
                  href="https://maps.app.goo.gl/UzJHTjvyfY8mWRsw5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Maps"
              >
                <img src={googlemapIcon} alt="" />
              </a>
            </div>

            <div className="footer_contacts">
              <p>{t("city_address")}</p>

              <a href="tel:+77081030303">
                +7 708 103 03 03
              </a>

              <a href="mailto:profmedservice.kz@mail.ru">
                profmedservice.kz@mail.ru
              </a>
            </div>

            <Link
                to="/public-offer"
                className="footer_link"
            >
              {t("public_offer")}
            </Link>
          </div>
        </div>

        <div className="footer_bottom">
          <div>{t("license")}</div>

          <div className="footer_copyright">
            © {copyrightYear} ProfMedService.{" "}
            {t("all_rights_reserved")}
          </div>
        </div>
      </footer>
  );
};

export default Footer;