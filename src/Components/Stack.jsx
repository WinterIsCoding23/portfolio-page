import { technologies } from "../constants";

export default function Stack() {
  return (
    <div>
      {technologies.map((technology) => (
        <div key={technology.name}>
          <h3>{technology.name}</h3>
          <img src={technology.icon} alt="technology.name" />
        </div>
      ))}
    </div>
  );
}
