import css from "./Description.module.css";

const Description = ({ name, descr }) => {
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
