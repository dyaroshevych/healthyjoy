import React from "react";

import "./MapSection.scss";

const MapSection = () => (
  <div className="Map">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.4571381617984!2d24.02740251570915!3d49.83386747939498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add8ae6235d7d%3A0x518d2ddfc21784ca!2sHealthy%20Joy!5e0!3m2!1sua!2sru!4v1615025752897!5m2!1ua!2sru"
      width="100%"
      height="430"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  </div>
);
export default MapSection;
