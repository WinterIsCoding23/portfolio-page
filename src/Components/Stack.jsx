import styles from "../styles";
import { technologies } from "../constants";

export default function Stack() {
  return (
    <div>
      <h3 className={`${styles.sectionHeadText} mt-8`}>My Tech Stack</h3>
      <div>
        {technologies.map((technology) => (
          <div key={technology.name}>
            <h5>{technology.name}</h5>
            <img src={technology.icon} alt="technology.name" />
          </div>
        ))}
      </div>
    </div>
  );
}
