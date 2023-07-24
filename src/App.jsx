import { BrowserRouter } from "react-router-dom";

import Navbar from "../src/Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-cover bg-center bg-no-repeat">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
