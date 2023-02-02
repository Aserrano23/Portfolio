import "./separator.scss";

const Separator = ({ color = "purple" }) => {
  return (
    <div className="container">
      <div
        className={
          color === "white" ? "as-separator white" : "as-separator purple"
        }
      ></div>
    </div>
  );
};

export default Separator;
