import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
