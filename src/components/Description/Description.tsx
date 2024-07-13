import css from "./Description.module.css";
import { propsDescription } from "./Description.types";

const Description: React.FC<propsDescription> = ({ name, descr }) => {
  return (
    <>
      <div className={css.wrap}>
        <h1 className={css.title}>{name}</h1>
      </div>
      <p className={css.descr}>{descr}</p>
    </>
  );
};

export default Description;
