import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const NewsOne = ({ data }) => {
  const t = useTranslations();

  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="row ">
            {data?.map((item, i) => (
              <div
                key={item.id}
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/news-grid/${item.slug}/${item?.id}`}>
                        <div className="custom-image-wrapper">
                          <Image
                            className="image"
                            alt="img "
                            height={400}
                            width={375}
                            src={`https://ivisavmlinux.azurewebsites.net/${item?.imageUrl}`}
                            title="Vixoz"
                          />
                        </div>
                      </Link>
                    </figure>
                    <span className="date">{item?.date}</span>
                  </div>
                  <div className="content-box m-0">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle" /> {item?.author}
                      </li>
                    </ul>
                    <h5 className="title">
                      <Link href={`/news-grid/${item.slug}/${item?.id}`}>
                        {item?.title}
                      </Link>
                    </h5>

                    <Link
                      href={`/news-grid/${item.slug}/${item?.id}`}
                      className="read-more"
                    >
                      {t("ReadMore")}{" "}
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsOne;
