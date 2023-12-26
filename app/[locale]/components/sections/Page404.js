import Link from 'next/link';
import React from 'react';

const Page404 = () => {
    return (
        <>
            <section>
                <div className="auto-container pt-100 pb-150">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <img alt="img " src="/images/resource/404.jpg" title='Vizox' />
                                    <h3 className="error-page__sub-title">Page not found!</h3>
                                </div>
                                <p className="error-page__text">Sorry we can't find that page! The page you are looking  for
                                    was never existed.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Page404;