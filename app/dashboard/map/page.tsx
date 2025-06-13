"use client";

import { useEffect } from "react";

export default function MapPage() {
  useEffect(() => {
    // Any client-side effects related to the map can be added here if needed
  }, []);

  return (
    <main className="map-page">
      <div className="map-container">
        <h1>Community Map</h1>
        <p>
          This map shows the communities and your current location. Hover over
          the markers for more details!
        </p>
        {/* Replace src with your desired map location */}
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.6998%2C13.0368&layer=mapnik"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
          loading="lazy"
        ></iframe>
        <p>
          <a href="https://www.openstreetmap.org/" target="_blank">
            View on OpenStreetMap
          </a>
        </p>
      </div>
      <style jsx>{`
        .map-page {
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        .map-container {
          max-width: 800px;
          margin: 0 auto;
        }
        iframe {
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
