import React from "react";
import ClientSliderThree from "../slider/ClientSliderThree";

const ClientThree = () => {
  return (
    <>
      <section className="clients-section style-three">
        {/* Sponsors Outer */}
        <div className="auto-container">
          <div className="sponsors-outer">
            {/*clients carousel*/}
            <div className="clients-carousel-three">
              <ClientSliderThree />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientThree;
