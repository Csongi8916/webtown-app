import Masonry from "./components/Masonry/Masonry";
import Timeline from "./components/Timeline/Timeline";
import data from "../data/masonry";
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState, memo } from "react";
import RtlToggleRender from "./components/RtlToggle.jsx/RtlToggleRender";

function App() {
  const [isRtl, setIsRtl] = useState(true);
  
  const handleToggleRtl = () => {
    setIsRtl(!isRtl);
  }

  return (
    <main>
      <Helmet>
        <html lang="en" dir="rtl" />
      </Helmet>
      <button onClick={handleToggleRtl} className="m-3 btn btn-primary">Change Language</button>
      <RtlToggleRender isRtl={isRtl} />
      <Timeline posts={data} />
      <Masonry images={data} />
    </main>
  );
  }
  
  export default App;
  