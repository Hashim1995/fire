import { getToken } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {


    return (
        <>
            <footer className="main-footer">
                <div className="auto-container">
                    <div className="upper-box">
                        <div className="logo"><Link href="/"><img alt="img " src="/images/logo-2.png" title="Vixoz" /></Link></div>
                        <div className="subscribe-form">
                            <h5 className="title">Subscribe to Newsletter</h5>
                            <form method="post" action="#">
                                <div className="form-group">
                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                    <button type="button" className="theme-btn btn-style-one"><span className="btn-title">Subscribe</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4">
                                <div className="footer-widget about-widget">
                                    <h5 className="widget-title">Contact</h5>
                                    <div className="text">66 Road Broklyn Street, 600 <br />New York, USA</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@potisen.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-phone-square" /> <Link href="tel:+926668880000">+92 666 888 0000</Link><br />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-6 col-lg-8 col-md-12 mb-0">
                                <div className="footer-widget links-widget">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Explore</h5>
                                            <ul className="user-links">
                                                <li><Link href="#">About Company</Link></li>
                                                <li><Link href="#">Meet the Team</Link></li>
                                                <li><Link href="#">News &amp; Media</Link></li>
                                                <li><Link href="#">Our Projects</Link></li>
                                                <li><Link href="#">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Visa</h5>
                                            <ul className="user-links">
                                                <li><Link href="#">Students Visa</Link></li>
                                                <li><Link href="#">Business Visa</Link></li>
                                                <li><Link href="#">Family Visa</Link></li>
                                                <li><Link href="#">Travel Visa</Link></li>
                                                <li><Link href="#">Work Visa</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Services</h5>
                                            <ul className="user-links">
                                                <li><Link href="#">PR Applicants</Link></li>
                                                <li><Link href="#">Visa Consultancy</Link></li>
                                                <li><Link href="#">Travel Insurance</Link></li>
                                                <li><Link href="#">Work Permits</Link></li>
                                                <li><Link href="#">Abroad Study</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget gallery-widget">
                                    <h5 className="widget-title">Gallery</h5>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-1.jpg" title="Vixoz" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-2.jpg" title="Vixoz" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-3.jpg" title="Vixoz" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-4.jpg" title="Vixoz" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-5.jpg" title="Vixoz" /></Link>
                                            </figure>
                                            <figure className="image">
                                                <Link href="#"><img alt="img " src="/images/resource/project-thumb-6.jpg" title="Vixoz" /></Link>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2022 by <Link href="/">Company.com</Link>
                            </div>
                            <ul className="social-icon-two">
                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;