import Link from 'next/link';
import React from 'react';

const NewsThree = () => {
    const data = [
        {
            img: "news-1.jpg",
            title: "We very careful handling the valuable goods",
            comment: 2
        },
        {
            img: "news-2.jpg",
            title: "Why is supply chain visibility so important?",
            comment: 10
        },
        {
            img: "news-3.jpg",
            title: "Cargo flow through better supply in UK",
            comment: 5
        }
    ];
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
                                <span className="sub-title">recent news feed</span>
                                <h2>Latest News &amp; Articles <br />From the Blog.</h2>
                            </div>
                        </div>
                        <div className="btn-column text-end col-lg-4">
                            <Link href="news-grid" className="theme-btn btn-style-one bg-theme-color4 mb-4"><span className="btn-title">View All news</span></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column col-xl-6 col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
                            {/* News Block */}
                            <div className="news-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="news-details"><img alt="img " src="/images/resource/news-7.jpg" title="Vixoz" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <ul className="post-info">
                                            <li><i className="fa fa-user-circle" /> by Admin</li>
                                            <li><i className="fa fa-comments" /> 2 Comments</li>
                                        </ul>
                                        <h4 className="title"><Link href="news-details">The Human Rights and Democracy Study Visa Programms</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            {/* News Block */}
                            <div className="news-block-four">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="news-details"><img alt="img " src="/images/resource/news-8.jpg" title="Vixoz" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <ul className="post-info">
                                            <li><i className="fa fa-user-circle" /> by Admin</li>
                                            <li><i className="fa fa-comments" /> 2 Comments</li>
                                        </ul>
                                        <h5 className="title"><Link href="news-details">The Common Mistakes you Make in Application</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {/* News Block */}
                            <div className="news-block-four">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="news-details"><img alt="img " src="/images/resource/news-9.jpg" title="Vixoz" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <ul className="post-info">
                                            <li><i className="fa fa-user-circle" /> by Admin</li>
                                            <li><i className="fa fa-comments" /> 2 Comments</li>
                                        </ul>
                                        <h5 className="title"><Link href="news-details">The Common Mistakes you Make in Application</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {/* News Block */}
                            <div className="news-block-four">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="news-details"><img alt="img " src="/images/resource/news-10.jpg" title="Vixoz" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <ul className="post-info">
                                            <li><i className="fa fa-user-circle" /> by Admin</li>
                                            <li><i className="fa fa-comments" /> 2 Comments</li>
                                        </ul>
                                        <h5 className="title"><Link href="news-details">The Common Mistakes you Make in Application</Link></h5>
                                    </div>
                                </div>
                            </div>
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