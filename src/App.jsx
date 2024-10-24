import Masonry from "./components/Masonry/Masonry";
import Timeline from "./components/Timeline/Timeline";
import data from "../data/masonry";

function App() {
    return (
      <main>
        <h1>test text</h1>
        <Timeline posts={data} />
        <Masonry images={data} />
      </main>
    );
  }
  
  export default App;
  