import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
import { returnCurrentLangId } from '../../../../utils/currentLang';


async function getData() {
    const t = await getLocale();
    const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/blog/latest?Language=${returnCurrentLangId(t)}`, {
        method: 'GET'
    })
    if (!res.ok) {
        return null
    }
    return res.json()
}

const NewsThree = async () => {
    const res = await getData();
    let data = res?.data
    const t = await getTranslations()


    return (
        <>
            <section className="news-section-three">
                <div className="anim-icons">
                    <span className="icon icon-object-2" />
                </div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="sec-title">
                                <span className="sub-title">{t("RecentNewsFeed")}</span>
                                <h2> {t("LatestNews")} &amp; {t("Articles")} </h2>
                            </div>
                        </div>
                        <div className="btn-column text-end col-lg-4">
                            <Link href="news-grid" className="theme-btn btn-style-one bg-theme-color4 mb-4"><span className="btn-title">{t("ViewAllNews")}</span></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column col-xl-6 col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="news-block-mobile news-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href={`/news-grid/${data[0]?.slug}/${data[0]?.id}`}><img alt="img " src={`https://ivisaapp.azurewebsites.net/${data[0]?.imageUrl}`} title="Vixoz" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <ul className="post-info">
                                                    <li><i className="fa fa-user-circle" /> by Admin</li>
                                                    <li><i className="fa fa-comments" /> 2 Comments</li>
                                                </ul> */}
                                        <h5 className="title"><Link href={`/news-grid/${data[0]?.slug}/${data[0]?.id}`}>{data[0]?.title}</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            {data?.slice(1).map((item,) => {
                                return <div className="news-block-mobile news-block-four">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href={`/news-grid/${item.slug}/${item?.id}`}><img alt="img " src={`https://ivisaapp.azurewebsites.net/${item?.imageUrl}`} title="Vixoz" /></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            {/* <ul className="post-info">
                                                    <li><i className="fa fa-user-circle" /> by Admin</li>
                                                    <li><i className="fa fa-comments" /> 2 Comments</li>
                                                </ul> */}
                                            <h5 className="title"><Link href={`/news-grid/${item.slug}/${item?.id}`}>{item?.title}</Link></h5>
                                        </div>
                                    </div>
                                </div>


                            })}
                        </div>



                    </div>
                </div>
            </section>


            {/* {data.map((item, i) => (
                1
            ))} */}
        </>
    );
};

export default NewsThree;