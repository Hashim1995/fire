import Link from 'next/link';
import React from 'react';

const CountryThree = () => {
    const data = [
        {
            img: "flag-aus.jpg",
            title: "Australia",
            sub: "Fusce pretium sem eget mattis"
        },
        {
            img: "flag-usa.jpg",
            title: "United States",
            sub: "Fusce pretium sem eget mattis"
        },
        {
            img: "flag-dub.jpg",
            title: "Dubai",
            sub: "Fusce pretium sem eget mattis"
        },
        {
            img: "flag-la.jpg",
            title: "Los Angeles",
            sub: "Fusce pretium sem eget mattis"
        },
        {
            img: "flag-in.jpg",
            title: "India",
            sub: "Fusce pretium sem eget mattis"
        },
        {
            img: "flag-turkey.jpg",
            title: "Turkey",
            sub: "Fusce pretium sem eget mattis"
        },
    ];
    return (
        <>
            <section className="countries-section-three">
                <div className="anim-icons">
                    <span className="icon icon-object-1" />
                </div>
                <div className="outer-box pt-0">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <span className="sub-title">Countries we offer</span>
                            <h2>Countries We Support <br />for Immigration.</h2>
                        </div>
                        {/*  Countries Carousel */}
                        <div className="row">
                            {data.map((item, i) => (
                                <div className="country-block-three col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="content">
                                            <div className="flag"><img alt="img " src={`/images/resource/${item.img}`} title="Vixoz" /></div>
                                            <h5 className="title"><Link href="page-country-details">{item.title}</Link></h5>
                                            <div className="text">{item.sub}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bottom-text">Top Rated By Customers &amp; Immigration Firms With 100% Success Rate.</div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountryThree;