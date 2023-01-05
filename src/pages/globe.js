import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactGlobe = dynamic(import("react-globe.gl"), { ssr: false });

function Globe() {
  const [arcsData, setArcsData] = useState([]);
  //const [generatedData, setGeneratedData] = useState([]);

  useEffect(() => {
    const N = 20;
    const gData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ],
    }));

    //setGeneratedData(gData);
    setArcsData(gData);
  }, []);

  return (
    <ReactGlobe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      showGraticules={true}
      arcsData={arcsData}
      arcColor={"color"}
      arcStroke={1.2}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
    />
  );
}

export default Globe;
