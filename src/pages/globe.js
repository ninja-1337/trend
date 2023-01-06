import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import countries from "./../../data.json";
const ReactGlobe = dynamic(import("react-globe.gl"), { ssr: false });

function Globe() {
  const [arcsData, setArcsData] = useState([]);
  //const [generatedData, setGeneratedData] = useState([]);

  useEffect(() => {
    //setGeneratedData(gData);
    setArcsData(countries.features);
  }, []);

  return (
    <ReactGlobe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      hexPolygonsData={arcsData}
      hexPolygonResolution={2}
      hexPolygonMargin={0.05}
      hexPolygonColor={() =>
        `#${Math.round(Math.random() * Math.pow(2, 18))
          .toString(16)
          .padStart(6, "0")}`
      }
      hexPolygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
      Population: <i>${d.POP_EST}</i>
    `}
    />
  );
}

export default Globe;
