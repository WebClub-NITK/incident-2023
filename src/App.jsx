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
  Flames,
  About,
} from "./components";
import Icare from "./components/Icare";
import Loading from "./components/Loading";
import { heart } from "./assets/index.js";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 1600);
  }, [])

  if (isLoading) {
    return (
      <div className="bg-background w-full overflow-hidden">
        <Flames />
        <Loading />
      </div>
    )
  } else {
    return (
      <div className="bg-background w-full overflow-hidden">
        <Flames />
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
            <About />
            {/* <Events /> */}
            <Competitions />
            <FAQ />
            {/* <Sponsors /> */}
          </div>
        </div>
        <div className={`bg-background ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Icare />
        </div>
        <Footer />

        <div className="bg-background w-full text-secondary text-lg flex flex-nowrap p-2  justify-center gap-2 items-center">
          Made with <img src={heart} className="w-5"/> by <a href="https://webclub.nitk.ac.in/" target="_blank" className="no-underline hover:text-primary">WEC-NITK</a>
        </div>
      </div>
      </div>
    );
  }
};


export default App;
