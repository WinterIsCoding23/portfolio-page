import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { roles } from "../constants/index";

const RoleCard = ({ icon, title, index }) => {
  return (
    <Tilt className="max-w-[20%] max-h-[20%] xs:w-[250px] w-full">
      {/* <div className="max-w-xs"> */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full shadow-xl rounded-lg p-[1px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-emerald-800 rounded-[20px] py-3 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
      {/* </div> */}
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

      <div className="mt-10 flex flex-wrap gap-10 ">
        {roles.map((role, index) => (
          <RoleCard key={role.title} index={index} {...role} />
        ))}
      </div>
    </div>
  );
}
