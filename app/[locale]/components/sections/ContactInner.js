import Link from "next/link";
import React from "react";

const ContactInner = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>
              <form id="contact_form" name="contact_form" className="" action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-3">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="theme-btn btn-style-one mr-15" data-loading-text="Please wait...">
                    <span className="btn-title">Send message</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one bg-theme-color5">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon bg-theme-color2">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <Link href="tel:980089850">
                        <span>Free</span> +92 (020)-9850
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Write email</h6>
                      <Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Visit anytime</h6>
                      <span>66 broklyn golden street. New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
