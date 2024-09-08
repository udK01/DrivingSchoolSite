import { useEffect } from "react";

export default function Locations() {
  const API_KEY = import.meta.env.VITE_MAPS_API;

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.google) {
          const map = new window.google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              center: { lat: 51.6198, lng: -3.9396 }, // Swansea as the center
              zoom: 10,
            }
          );

          map.data.loadGeoJson("/AreaCovered.geojson");

          map.data.setStyle({
            fillColor: "#FFCD38",
            strokeWeight: 1,
            fillOpacity: 0.6,
          });
        }
      };
    };

    loadGoogleMapsScript();
  }, [API_KEY]);

  return (
    <div>
      <div className="text-center font-robot font-black text-[100px] text-white bg-primary_red">
        Areas Covered
      </div>
      <div
        id="map"
        style={{ height: "500px", width: "100%" }}
        className="mx-auto"
      />
    </div>
  );
}
