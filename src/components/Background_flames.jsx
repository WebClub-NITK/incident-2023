import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import data from "../constants/particle_options";
const Background_flames = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" options={data} init={particlesInit} />;
};
export default Background_flames;
