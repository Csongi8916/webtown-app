import { Helmet } from "react-helmet";
import { useState } from "react";
import MasonryDesktop from "./components/Masonry/MasonryDesktop";
import MasonryMobile from "./components/Masonry/MasonryMobile";
import Timeline from "./components/Timeline/Timeline";
import RtlToggle from "./components/RtlToggle.jsx/RtlToggle";

import data from "../data/data";
import masonryData from "../data/masonryData";

function App() {
  const [isRtl, setIsRtl] = useState(true);

  const isDesktop = window.innerWidth >= 412;
  
  const handleToggleRtl = () => {
    setIsRtl(!isRtl);
  }

  return (
    <>
      <Helmet>
        <html lang="en" dir="rtl" />
      </Helmet>
      <header className="m-3" /> {/* Placeholder instead if header or nav */}
      <main className="app d-flex flex-column">
        <button onClick={handleToggleRtl}
          className="mx-auto m-3 btn btn-primary">
          Change Language
        </button>
        <RtlToggle isRtl={isRtl} />
        <Timeline posts={data.elements} isDesktop={isDesktop} />
        {isDesktop ? (
          <MasonryDesktop data={masonryData} isDesktop={isDesktop} />
        ) : (
          <MasonryMobile data={data} isDesktop={isDesktop} />
        )}
      </main>
    </>
  );
  }
  
  export default App;
  