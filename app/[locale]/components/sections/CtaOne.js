import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const CtaOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="call-to-action">
                <div className="auto-container">
                    <div className="inner-container">
                        <h5 className="title">Are you Looking for Visa Applications Just Call us!</h5>
                        <a href="tel:+928800683000" className="info-btn"><i className="fa fa-phone" /> +92 (8800) 6830 00</a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CtaOne;
