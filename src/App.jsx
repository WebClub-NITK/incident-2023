import React from "react";

import styles from "./style";
import {
  Navbar,
  Hero,
  Events,
  Competitions,
  Sponsors,
  Footer,
  FAQ,
} from "./components";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* <div className={`bg-background ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div> */}
      <div className={`bg-background ${styles.flexStart}`}>
        <Hero />
      </div>

      <div className={`bg-background ${styles.flexCenter} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <About />
          {/* <Events /> */}
          <Competitions />
          <FAQ/>
          {/* <Sponsors /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
