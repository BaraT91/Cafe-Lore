import './style.css';

export const Drink = (props) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={props.image} />
        </div>
        <div className="drink__info">
          <h3>{props.name}</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            ></div>
            <div className="layer__label">espresso</div>
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
