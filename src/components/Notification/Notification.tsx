import css from "./Notification.module.css";
import { notificationProps } from "./Notification.types";

const Notification: React.FC<notificationProps> = ({ message }) => {
  return (
    <div className={css.box}>
      <p className={css.txt}>{message}</p>
    </div>
  );
};

export default Notification;
