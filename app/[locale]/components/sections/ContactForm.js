'use client'


const ContactForm = () => {
    return <div className="col-xl-7 col-lg-6">
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
};

export default ContactForm;
