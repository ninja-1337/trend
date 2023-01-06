import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import countries from "./../../data.json";
const ReactGlobe = dynamic(import("react-globe.gl"), { ssr: false });
import Head from "next/head";

function Globe() {
  const [arcsData, setArcsData] = useState([]);
  //const [generatedData, setGeneratedData] = useState([]);

  useEffect(() => {
    //setGeneratedData(gData);

    setArcsData(countries.features);
  }, []);

  return (
    <>
      <Head>
        <title>PayTrends</title>
        <meta name="description" content="Paytrends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-1/2 w-1/2">
        <ReactGlobe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          hexPolygonsData={arcsData}
          hexPolygonResolution={({ properties: d, id: f }) => {
            if (d.name == "Cyprus") {
              return 4;
            } else {
              return 3;
            }
          }}
          hexPolygonMargin={0.05}
          hexPolygonColor={() =>
            `#${Math.round(Math.random() * Math.pow(2, 18))
              .toString(12)
              .padStart(6, "0")}`
          }
          hexPolygonLabel={({ properties: d, id: f }) => `
      <b>${d.name} ${f}</b> <br /><b>Salary 1337</b>
     `}
        />
        <div>Hello</div>
      </div>
    </>
  );
}

export default Globe;
