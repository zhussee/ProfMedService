import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { serviceCategories } from "../data/servicesData";
import "../styles/services.css";

const ALL_CATEGORY_ID = "all";

const Services = () => {
    const { t, i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("");

    /*
     * Список категорий зависит только от статических данных.
     * Здесь useMemo безопасен, так как внутри нет функций,
     * изменяющихся при каждом рендере.
     */
    const categories = useMemo(() => {
        const allServices = serviceCategories.flatMap((category) =>
            category.services.map((service) => ({
                ...service,
                uniqueId: `${category.id}-${service.id}`,
            })),
        );

        return [
            {
                id: ALL_CATEGORY_ID,
                titleKey: "allServices",
                services: allServices,
            },
            ...serviceCategories,
        ];
    }, []);

    const categoryFromUrl = searchParams.get("category");

    /*
     * Не храним activeCategoryId в отдельном useState.
     * Единственным источником значения становится URL.
     */
    const activeCategoryId = useMemo(() => {
        const categoryExists = categories.some(
            (category) => category.id === categoryFromUrl,
        );

        return categoryExists
            ? categoryFromUrl
            : ALL_CATEGORY_ID;
    }, [categories, categoryFromUrl]);

    const activeCategory = useMemo(() => {
        return (
            categories.find(
                (category) => category.id === activeCategoryId,
            ) ?? categories[0]
        );
    }, [categories, activeCategoryId]);

    const currentLocale = i18n.resolvedLanguage?.startsWith("kk")
        ? "kk-KZ"
        : "ru-RU";

    const getCategoryTitle = (category) => {
        if (category.id === ALL_CATEGORY_ID) {
            return t("servicesPage.allServices");
        }

        return t(
            `servicesPage.categories.${category.titleKey}`,
        );
    };

    const getServiceName = (service) => {
        return t(
            `servicesPage.items.${service.translationKey}`,
        );
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat(currentLocale).format(
            Number(price),
        );
    };

    /*
     * Здесь useMemo не нужен.
     * Фильтрация недорогая, а отказ от useMemo устраняет:
     *
     * preserve-manual-memoization
     * exhaustive-deps для getServiceName
     */
    const normalizedSearch = searchValue
        .trim()
        .toLocaleLowerCase(currentLocale);

    const filteredServices = !normalizedSearch
        ? activeCategory.services
        : activeCategory.services.filter((service) => {
            const serviceName = getServiceName(service)
                .toLocaleLowerCase(currentLocale);

            return serviceName.includes(normalizedSearch);
        });

    /*
     * Один эффект прокрутки вместо двух.
     * Внутри эффекта больше нет setState.
     */
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [activeCategoryId]);

    const handleCategoryChange = (categoryId) => {
        setSearchValue("");

        if (categoryId === ALL_CATEGORY_ID) {
            setSearchParams({});
            return;
        }

        setSearchParams({
            category: String(categoryId),
        });
    };

    return (
        <>
            <Helmet>
                <title>
                    Медицинские услуги — ProfMedService
                </title>

                <meta
                    name="description"
                    content="Медицинские услуги клиники ProfMedService в Шымкенте."
                />

                <link
                    rel="canonical"
                    href="https://www.profmedservice.info/catalog"
                />
            </Helmet>

            <main className="services-page">
                <section className="services-heading">
                    <div className="services-container">
                        <nav
                            className="page-breadcrumbs"
                            aria-label={t(
                                "servicesPage.breadcrumbsAriaLabel",
                            )}
                        >
                            <Link to="/">
                                {t("servicesPage.home")}
                            </Link>

                            <span
                                className="page-breadcrumbs-separator"
                                aria-hidden="true"
                            >
                                ›
                            </span>

                            <span>
                                {t("servicesPage.pageTitle")}
                            </span>
                        </nav>

                        <h1>
                            {getCategoryTitle(activeCategory)}
                        </h1>
                    </div>
                </section>

                <section className="services-section">
                    <div className="services-container services-layout">
                        <aside className="services-sidebar">
                            <h2 className="services-sidebar__title">
                                {t("servicesPage.directions")}
                            </h2>

                            <div className="services-sidebar__list">
                                {categories.map((category) => {
                                    const isActive =
                                        category.id ===
                                        activeCategoryId;

                                    return (
                                        <button
                                            key={category.id}
                                            type="button"
                                            className={
                                                isActive
                                                    ? "services-category services-category--active"
                                                    : "services-category"
                                            }
                                            onClick={() =>
                                                handleCategoryChange(
                                                    category.id,
                                                )
                                            }
                                        >
                                            <span>
                                                {getCategoryTitle(
                                                    category,
                                                )}
                                            </span>

                                            <span className="services-category__count">
                                                {
                                                    category
                                                        .services
                                                        .length
                                                }
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        <div className="services-content">
                            <div className="services-content__top">
                                <div>
                                    <span className="services-content__label">
                                        {t(
                                            "servicesPage.priceList",
                                        )}
                                    </span>

                                    <h2>
                                        {getCategoryTitle(
                                            activeCategory,
                                        )}
                                    </h2>
                                </div>

                                <label className="services-search">
                                    <span
                                        className="services-search__icon"
                                        aria-hidden="true"
                                    >
                                        ⌕
                                    </span>

                                    <input
                                        type="search"
                                        value={searchValue}
                                        onChange={(event) =>
                                            setSearchValue(
                                                event.target.value,
                                            )
                                        }
                                        placeholder={t(
                                            "servicesPage.searchPlaceholder",
                                        )}
                                        aria-label={t(
                                            "servicesPage.searchAriaLabel",
                                        )}
                                    />

                                    {searchValue !== "" && (
                                        <button
                                            type="button"
                                            className="services-search__clear"
                                            onClick={() =>
                                                setSearchValue("")
                                            }
                                            aria-label={t(
                                                "servicesPage.clearSearchAriaLabel",
                                            )}
                                        >
                                            ×
                                        </button>
                                    )}
                                </label>
                            </div>

                            <div className="services-table-wrapper">
                                <table className="services-table">
                                    <thead>
                                    <tr>
                                        <th>
                                            {t(
                                                "servicesPage.serviceName",
                                            )}
                                        </th>

                                        <th>
                                            {t(
                                                "servicesPage.price",
                                            )}
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {filteredServices.map(
                                        (service) => (
                                            <tr
                                                key={
                                                    service.uniqueId ??
                                                    `${activeCategory.id}-${service.id}`
                                                }
                                            >
                                                <td
                                                    data-label={t(
                                                        "servicesPage.service",
                                                    )}
                                                >
                                                    {getServiceName(
                                                        service,
                                                    )}
                                                </td>

                                                <td
                                                    data-label={t(
                                                        "servicesPage.price",
                                                    )}
                                                >
                                                    {formatPrice(
                                                        service.price,
                                                    )}{" "}
                                                    {t(
                                                        "servicesPage.currency",
                                                    )}
                                                </td>
                                            </tr>
                                        ),
                                    )}
                                    </tbody>
                                </table>

                                {filteredServices.length === 0 && (
                                    <div className="services-empty">
                                        <strong>
                                            {t(
                                                "servicesPage.notFoundTitle",
                                            )}
                                        </strong>

                                        <span>
                                            {t(
                                                "servicesPage.notFoundText",
                                            )}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="services-note">
                                {t("servicesPage.note")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Services;