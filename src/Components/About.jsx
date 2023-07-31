import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../styles";

export default function About() {
  return (
    <div>
      <motion.div>
        <h3 className={styles.sectionHeadText}>About me</h3>
      </motion.div>

      <motion.p className="text-[18px] tracking-normal text-left mt-2 text-paragraph">
        Self-description Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </motion.p>

      <div></div>
    </div>
  );
}
