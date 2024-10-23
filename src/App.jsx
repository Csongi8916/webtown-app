import Masonry from "./Masonry";
import masonryData from "../data/masonry";

function App() {
    return (
      <main>
        <h1>test text</h1>
        <Masonry images={masonryData}></Masonry>
      </main>
    );
  }
  
  export default App;
  