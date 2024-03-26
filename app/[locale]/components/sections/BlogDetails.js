import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { returnCurrentLangId } from "../../../../utils/currentLang";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

async function getData() {
  try {
    const t = await getLocale();
    const res = await fetch(
      `https://ivisavmlinux.azurewebsites.net/api/v1/blog/latest?Language=${returnCurrentLangId(
        t
      )}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      return null;
    }
    return res?.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null; // Indicate failure
  }
}

const BlogOne = async ({ item }) => {
  const res = await getData();
  let data = res?.data;

  const t = await getTranslations();
  // const sanitizedDescription = DOMPurify.sanitize(item?.description);

  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img
                    alt="img "
                    style={{
                      objectFit: "cover",
                    }}
                    height={500}
                    src={`https://ivisavmlinux.azurewebsites.net/${item?.imageUrl}`}
                    title="Vixoz"
                  />

                  <div className="blog-details__date">{item?.date}</div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li>
                      <Link href="/news-details">
                        <i className="fas fa-user-circle"></i> {item?.author}
                      </Link>{" "}
                    </li>
                  </ul>
                  <h3 className="blog-details__title font-weight-600">
                    {item?.title}
                  </h3>
                  <div
                    className="custom-blog-content-wrapper"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify(
                        new JSDOM("<!DOCTYPE html>").window
                      ).sanitize(item?.description),
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">{t("LatestNews")}</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {data?.map((z) => {
                      return (
                        <li key={z?.id}>
                          <div className="sidebar__post-image">
                            {" "}
                            <img
                              style={{
                                height: "70px",
                                width: "60px",
                                objectFit: "cover",
                              }}
                              alt="img "
                              src={`https://ivisavmlinux.azurewebsites.net/${z?.imageUrl}`}
                              title="Vizox"
                            />{" "}
                          </div>
                          <div className="sidebar__post-content">
                            <h3>
                              {" "}
                              <span className="sidebar__post-content-meta">
                                <i className="fas fa-user-circle"></i>
                                {z?.author}
                              </span>{" "}
                              <Link href={`/news-grid/${z.slug}/${z?.id}`}>
                                {z?.title}
                              </Link>
                            </h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">{t("Tags")}</h3>
                  <div className="sidebar__tags-list">
                    {" "}
                    {item?.tags?.map((z) => (
                      <p key={z}>{z}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogOne;
