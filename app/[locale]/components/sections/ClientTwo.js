import React from "react";
import ClientSliderOne from "../slider/ClientSliderOne";
import ClientSliderTwo from "../slider/ClientSliderTwo";

const ClientTwo = () => {
  return (
    <>
      <section className="clients-section style-two">
        {/* Sponsors Outer */}
        <div className="sponsors-outer">
          {/*clients carousel*/}
          <div className="clients-carousel-two">
            <ClientSliderTwo />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTwo;
