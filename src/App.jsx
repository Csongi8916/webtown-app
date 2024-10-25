import { Helmet } from "react-helmet";
import { useState } from "react";
import Masonry from "./components/Masonry/Masonry";
import Timeline from "./components/Timeline/Timeline";
import data from "../data/masonry";
import RtlToggle from "./components/RtlToggle.jsx/RtlToggle";

function App() {
  const [isRtl, setIsRtl] = useState(true);
  
  const handleToggleRtl = () => {
    setIsRtl(!isRtl);
  }

  return (
    <>
      <Helmet>
        <html lang="en" dir="rtl" />
      </Helmet>
      <header className="m-3" /> {/* Placeholder instead if header or nav */}
      <div className="app d-flex flex-column">
        <button onClick={handleToggleRtl}
          className="mx-auto m-3 btn btn-primary">
          Change Language
        </button>
        <RtlToggle isRtl={isRtl} />
        <Timeline posts={data} />
        <Masonry images={data} />
      </div>
    </>
  );
  }
  
  export default App;
  