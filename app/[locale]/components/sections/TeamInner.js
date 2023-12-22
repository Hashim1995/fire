import Link from 'next/link';
import React from 'react';

const TeamOne = () => {
    return (
        <>
            <section className="team-section">
                <div className="anim-icons">
                    <span className="icon icon-lines bounce-x" />
                    <span className="icon icon-dots bounce-y" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-1.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Kevin Hardson</Link></h5>
                                    <span className="designation">designer</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-2.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Jessica Brown</Link></h5>
                                    <span className="designation">developer</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-3.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">michale smith</Link></h5>
                                    <span className="designation">co founder</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-3.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">michale smith</Link></h5>
                                    <span className="designation">co founder</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-1.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Kevin Hardson</Link></h5>
                                    <span className="designation">designer</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img alt="img " src="/images/resource/team-2.jpg" title='Vizox' /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Jessica Brown</Link></h5>
                                    <span className="designation">developer</span>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
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

export default TeamOne;