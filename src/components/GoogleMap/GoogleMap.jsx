import "./GoogleMap.css";

function GoogleMap() {
  return (
    <section className="google-map-section">
      <div className="container">
        <div className="map-wrapper">
          <iframe
            title="Googlee Map"
            src="https://maps.google.com/maps?q=7-A%20Maruthupandiar%20Nagar,%204th%20Main%20Road,%20Narimedu,%20Madurai%20-%20625002&z=17&output=embed"
            loading="lazy"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default GoogleMap;