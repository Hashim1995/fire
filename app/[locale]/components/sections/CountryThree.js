import Link from "next/link";
import React from "react";
import { returnCurrentLangId } from "../../../../utils/currentLang";
import { truncate } from "../../../../utils/truncate";
import { getLocale, getTranslations } from "next-intl/server";

async function getData() {
  const t = await getLocale();
  const res = await fetch(
    `https://ivisavmlinux.azurewebsites.net/api/v1/country?Language=${returnCurrentLangId(
      t
    )}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

const CountryThree = async () => {
  const res = await getData();
  const data = res?.data;
  const t = await getTranslations();

  return (
    <>
      <section className="countries-section-three">
        <div className="anim-icons">
          <span className="icon icon-object-1" />
        </div>
        <div className="outer-box pt-0">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">{t("CountriesWeOffer")}</span>
              <h2>
                {t("CountriesWeSupport")} <br />
                {t("ForImmigration")}.
              </h2>
            </div>
            {/*  Countries Carousel */}
            <div className="row">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="country-block-three col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="inner-box">
                    <div className="content">
                      <div className="flag">
                        {" "}
                        <img
                          alt="img"
                          style={{
                            width: "53px",
                            height: "53px",
                          }}
                          src={`https://ivisavmlinux.azurewebsites.net/${item?.flagUrl}`}
                          title="Vixoz"
                        />
                      </div>
                      <h5 className="title">{item.title}</h5>
                      <div style={{ minHeight: "72px" }} className="text">
                        {truncate(item.description, 100, 80)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-text">
              {t("TopRatedCustomersImmigrationRate")}.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryThree;
