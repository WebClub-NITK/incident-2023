import React from "react";

import styles from "./style";
import {
  Navbar,
  Hero,
  Events,
  Competitions,
  Sponsors,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
          <Navbar />

      

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
          <Events />
          <Competitions />
          <Sponsors />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
