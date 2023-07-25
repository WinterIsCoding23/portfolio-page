import { BrowserRouter } from "react-router-dom";

import Navbar from "../src/Components/Navbar";
import About from "../src/Components/About";
import Stack from "../src/Components/Stack";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-cover bg-center bg-no-repeat">
          <Navbar />
        </div>
        <div className="pt-32">
          <About />
          <Stack />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
