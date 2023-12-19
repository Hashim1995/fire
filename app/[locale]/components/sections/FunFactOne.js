import React from "react";
import CounterUp from "../elements/CounterUp";
const FunFactOne = () => {
  const data = [
    {
      title: "STUDENT ENROLLED",
      count: 45,
    },
    {
      title: "CLASSES COMPLETED",
      count: 32,
    },
    {
      title: "TOP INSTRUCTORS",
      count: 354,
    },
    {
      title: "SATISFACTION RATE",
      count: 99,
    },
  ];
  return (
    <>
      <section className="fun-fact-section">
        <div className="bg-layer" />
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {/* Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner">
                  <i className="icon flaticon-passport-16" />
                  <div className="count-box">
                    <CounterUp className="count-text" count={30} time={3} />+
                  </div>
                  <h6 className="counter-title">Visa Categories</h6>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner">
                  <i className="icon flaticon-group" />
                  <div className="count-box">
                    <CounterUp className="count-text" count={389} time={3} />+
                  </div>
                  <h6 className="counter-title">Team Members</h6>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner">
                  <i className="icon flaticon-life-insurance" />
                  <div className="count-box">
                    <CounterUp className="count-text" count={4.9} time={3} />k
                  </div>
                  <h6 className="counter-title">Visa Process</h6>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                <div className="inner">
                  <i className="icon flaticon-cooperation" />
                  <div className="count-box">
                    <CounterUp className="count-text" count={98} time={3} />%
                  </div>
                  <h6 className="counter-title">Success Rates</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFactOne;
