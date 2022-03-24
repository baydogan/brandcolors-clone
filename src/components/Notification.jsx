
const Notification = ({ props }) => {
  return (
    <div className="notification">
      <span>
        Copied <strong>{props.value}</strong> to clipboard
      </span>
    </div>
  );
};

export default Notification;
