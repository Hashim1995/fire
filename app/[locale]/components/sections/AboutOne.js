import Link from 'next/link';
import React from 'react';
import { getLocale } from "next-intl/server";
import { returnCurrentLangId } from '../../../../utils/currentLang'

async function getData() {
    const t = await getLocale();

    const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/settings?languages=${returnCurrentLangId(t)}`, {
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }


    return res.text()
}


const AboutOne = async () => {
    const res = await getData()

    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About our company</span>
                                    <h2>Immigration Services From Experienced Lawyers.</h2>
                                    {/* <h4>Canada Based Immigration Consultant Agency.</h4> */}
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a
                                        tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                                </div>
                                {/* <div className="row">
                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner">
                                            <i className="icon flaticon-worldwide" />
                                            <h5 className="title">Best Immigration<br /> Resources</h5>
                                        </div>
                                    </div>
                                    <div className="about-block col-lg-6 col-md-6">
                                        <div className="inner">
                                            <i className="icon flaticon-passport-16" />
                                            <h5 className="title">Return Visas <br />Availabile</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="btm-box">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                                </div> */}
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img alt="img " src="/images/resource/about-1.jpg" title="Vixoz" /></figure>
                                {/* <figure className="image-2 overlay-anim wow fadeInRight"><img alt="img " src="/images/resource/about-2.jpg" title="Vixoz" /></figure>
                                <figure className="image-3 overlay-anim wow fadeInLeft"><img alt="img " src="/images/resource/about-3.jpg" title="Vixoz" /></figure>
                                <figure className="stemp"><img alt="img " src="/images/resource/stemp.png" title="Vixoz" /></figure> */}
                                {/* <div className="experience bounce-y">
                                    <div className="inner">
                                        <i className="icon flaticon-increase" />
                                        <div className="text"><strong>36+</strong> Work Experience</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default AboutOne;