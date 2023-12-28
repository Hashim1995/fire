import React from 'react';
import CountrySliderOne from '../slider/CountrySliderOne';
import { useTranslations } from 'next-intl';

const CountryOne = () => {
    const t = useTranslations()
    return (
        <>
            <section className="countries-section">
                <div className="auto-container">
                    <div className="bg-layer" />
                    <div className="sec-title text-center light">
                        <span className="sub-title">{t("CountriesWeOffer")}</span>
                        <h2>{t("CountriesWeSupport")} <br />{t("ForImmigration")}.</h2>

                    </div>
                    <div className="carousel-outer">
                        <div className="countries-carousel">
                            <CountrySliderOne />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountryOne;