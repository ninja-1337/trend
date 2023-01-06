import React from "react";
import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";

const ReactGlobe = dynamic(import("react-globe.gl"), { ssr: false });
import Head from "next/head";
const countries = dynamic(import("./../../data.json"), { ssr: false });
function Globe() {
  const [arcsData, setArcsData] = useState([]);
  //const [generatedData, setGeneratedData] = useState([]);

  useLayoutEffect(() => {
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
        <div>Hello</div>
      </div>
    </>
  );
}

export default Globe;
