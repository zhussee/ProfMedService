import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import photo from "../assets/pms_photo.jpg";
import yandexIcon from "../assets/yandexmap_icon.svg";
import twogisIcon from "../assets/2gismap_icon.svg";
import googleIcon from "../assets/googlemap_icon.svg";

import "../styles/home.css";

const REVIEWS = [
  {
    id: 1,
    nameKey: "reviews.items.review1.name",
    textKey: "reviews.items.review1.text",
    dateKey: "reviews.items.review1.date",
    initials: "Л",
  },
  {
    id: 2,
    nameKey: "reviews.items.review2.name",
    textKey: "reviews.items.review2.text",
    dateKey: "reviews.items.review2.date",
    initials: "К",
  },
  {
    id: 3,
    nameKey: "reviews.items.review3.name",
    textKey: "reviews.items.review3.text",
    dateKey: "reviews.items.review3.date",
    initials: "Т",
  },
];

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
      <div className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero_left">
            <div className="hero_content">
              <h1 className="hero_title">
                <span className="blue">PROF</span>
                <span className="red">MED</span>
                <span className="blue">SERVICE</span>
              </h1>

              <p className="hero_subtitle">
                {t("footer_text")}
              </p>

              <a
                  href="https://wa.me/77081030303"
                  target="_blank"
                  rel="noreferrer"
                  className="hero_btn"
              >
                {t("appointment")}
              </a>
            </div>
          </div>

          <div className="hero_right">
            <img
                src={photo}
                alt="Клиника ProfMedService"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="about">
          <div className="home-container">
            <h2>{t("about")}</h2>

            <div className="about_content">
              <p className="about_text">
                {t("about_full")}
              </p>

              <ul className="about_list">
                <li>{t("aboutBenefits.medicalCare")}</li>
                <li>{t("aboutBenefits.diagnostics")}</li>
                <li>{t("aboutBenefits.equipment")}</li>
                <li>{t("aboutBenefits.analyses")}</li>
                <li>{t("aboutBenefits.hospital")}</li>
                <li>{t("aboutBenefits.schedule")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="advantages">
          <div className="home-container">
            <h2>{t("advantages")}</h2>

            <div className="advantages_grid">
              <article className="adv_card">
                <div className="adv_card__icon">
                  01
                </div>

                <h3>{t("adv1")}</h3>

                <p>
                  {t("advantagesText.adv1")}
                </p>
              </article>

              <article className="adv_card">
                <div className="adv_card__icon">
                  02
                </div>

                <h3>{t("adv2")}</h3>

                <p>
                  {t("advantagesText.adv2")}
                </p>
              </article>

              <article className="adv_card">
                <div className="adv_card__icon">
                  03
                </div>

                <h3>{t("adv3")}</h3>

                <p>
                  {t("advantagesText.adv3")}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location">
          <div className="home-container">
            <h2>{t("location")}</h2>

            <div className="location_content">
              <div className="location_left">
                <p>{t("address_full")}</p>

                <div className="map_icons">
                  <a
                      href="https://yandex.kz/maps/org/profmedservice/87674931987/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Открыть в Яндекс Картах"
                  >
                    <img
                        src={yandexIcon}
                        alt="Яндекс Карты"
                    />
                  </a>

                  <a
                      href="https://2gis.kz/shymkent"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Открыть в 2GIS"
                  >
                    <img
                        src={twogisIcon}
                        alt="2GIS"
                    />
                  </a>

                  <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Открыть в Google Maps"
                  >
                    <img
                        src={googleIcon}
                        alt="Google Maps"
                    />
                  </a>
                </div>
              </div>

              <div className="location_right">
                <iframe
                    src="https://yandex.kz/map-widget/v1/?ll=69.617146%2C42.313365&mode=poi&poi%5Bpoint%5D=69.616781%2C42.313517&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D87674931987&z=17.89"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="ProfMedService на карте"
                    loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews">
          <div className="home-container">
            <div className="reviews_header">
              <div className="reviews_header__text">
                <h2>{t("reviews.title")}</h2>

                <p>
                  {t("reviews.description")}
                </p>
              </div>

              <div className="reviews_rating">
                <div className="reviews_rating__value">
                  5.0
                </div>

                <div>
                  <div
                      className="reviews_stars"
                      aria-label="5 из 5"
                  >
                    ★★★★★
                  </div>

                  <span>
                                    {t("reviews.ratingText")}
                                </span>
                </div>
              </div>
            </div>

            <div className="reviews_grid">
              {REVIEWS.map((review) => (
                  <article
                      className="review_card"
                      key={review.id}
                  >
                    <div className="review_card__top">
                      <div className="review_author">
                        <div className="review_avatar">
                          {review.initials}
                        </div>

                        <div>
                          <h3>
                            {t(review.nameKey)}
                          </h3>

                          <span>
                                                {t(review.dateKey)}
                                            </span>
                        </div>
                      </div>

                      <div
                          className="review_card__stars"
                          aria-label="5 из 5"
                      >
                        ★★★★★
                      </div>
                    </div>

                    <p className="review_card__text">
                      “{t(review.textKey)}”
                    </p>

                    <div className="review_card__footer">
                                    <span className="review_verified">
                                        <span
                                            className="review_verified__icon"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>

                                      {t("reviews.verified")}
                                    </span>

                      <span className="review_source">
                                        ProfMedService
                                    </span>
                    </div>
                  </article>
              ))}
            </div>

            <div className="reviews_bottom">
              <p>
                {t("reviews.bottomText")}
              </p>

              <a
                  className="reviews_button"
                  href="https://yandex.kz/maps/org/profmedservice/87674931987/reviews/"
                  target="_blank"
                  rel="noreferrer"
              >
                {t("reviews.button")}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;