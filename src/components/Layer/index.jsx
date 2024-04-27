import './style.css';

export const Layer = (props) => {
  return (
    <div className="layer">
      <div
        className="layer__color"
        style={{ backgroundColor: props.color }}
      ></div>
      <div className="layer__label">{props.label}</div>
    </div>
  );
};
