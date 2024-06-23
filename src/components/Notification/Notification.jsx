import css from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={css.box}>
      <p className={css.txt}>{message}</p>
    </div>
  );
};

export default Notification;
