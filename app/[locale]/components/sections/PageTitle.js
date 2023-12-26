import Link from 'next/link';
import React from 'react';


const PageTitle = ({ title, bg }) => {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${bg?.src})` }}>
            <div className="auto-container">
                <div className="title-outer">
                    <h1 className="title">{title}</h1>

                </div>
            </div>
        </section>
    );
};

export default PageTitle;