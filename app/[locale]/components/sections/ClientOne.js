import React from "react";
import ClientSliderOne from "../slider/ClientSliderOne";

const ClientOne = ({ addClass }) => {
  return (
    <>
      <section className={`clients-section ${addClass}`}>
        <div className="auto-container">
          {/* Sponsors Outer */}
          <div className="sponsors-outer">
            {/*clients carousel*/}
            <div className="clients-carousel">
              <ClientSliderOne />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientOne;
