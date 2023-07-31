import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { roles } from "../constants/index";

const RoleCard = ({ icon, title }) => {
  return (
    <Tilt>
      <motion.div>
        <div>
          <img src={icon} alt={title} />
          <h3></h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default function About() {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>About me</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[15px] sm:text-[18px] lg:text-[25px] tracking-normal text-left mt-2 text-paragraph"
      >
        Self-description Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </motion.p>

      <div>{roles.map((role) => CARD)}</div>
    </div>
  );
}
