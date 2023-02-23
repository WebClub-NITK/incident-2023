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
import Loading from "./components/Loading";
import { heart } from "./assets/index.js";

const App = () => {
  const [isLoading,setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)},1600);
  },[])

  if(isLoading){
    return (
      <div className="bg-background w-full overflow-hidden">
        <Flames/>
        <Loading/>
      </div>
    ) 
  }else{
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
      <Footer />
      <div className="bg-background w-full text-secondary text-lg flex flex-nowrap p-2  justify-center gap-2 items-center">
        Made with &#10084; by WEC-NITK
      </div>
    </div>
  )};
};

export default App;
