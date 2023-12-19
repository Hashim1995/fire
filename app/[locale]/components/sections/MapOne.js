import React from "react";

const MapOne = () => {
  return (
    <>
      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd"
              data-tm-width="100%"
              height="500"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapOne;
