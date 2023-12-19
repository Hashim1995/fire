import React from 'react';
import Link from 'next/link';

const TeamOne = () => {
    const data = [
        {
            img: "team-1.jpg",
            title: "Edward norton",
            desig: "Manager"
        },
        {
            img: "team-2.jpg",
            title: "Jane seymour",
            desig: "Marketing"
        },
        {
            img: "team-3.jpg",
            title: "Mike hardson",
            desig: "Developer"
        },
        {
            img: "team-4.jpg",
            title: "Mike hardson",
            desig: "Developer"
        },
    ];
    return (
        <>


            <section className="team-section">
                <div className="anim-icons">
                    <span className="icon icon-object-1" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Professional people</span>
                        <h2>Meet Our Expert Visa <br />Consultants.</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href="page-team-details">
                                                <img src={`images/resource/${item.img}`} title="Vixoz" />
                                            </Link>
                                        </figure>
                                        <span className="share-icon fa fa-share-alt" />
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><Link href="page-team-details">{item.title}</Link></h4>
                                        <span className="designation">{item.desig}</span>
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

export default TeamOne;