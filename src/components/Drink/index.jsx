import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  let objednavka = null;
  let trida = '';
  if (props.ordered === true) {
    objednavka = 'Zrušit';
    trida = 'order-btn--ordered';
  } else {
    objednavka = 'Objednat';
    trida = '';
  }

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={props.image} />
        </div>
        <div className="drink__info">
          <h3>{props.name}</h3>
          {props.layers.map(({ color, label }) => (
            <Layer key={label} color={color} label={label} />
          ))}
        </div>
      </div>
      <form
        className="drink__controls"
        data-id={props.id}
        data-ordered={String(props.ordered)}
      >
        <input type="hidden" className="order-id" value="0" />
        <button className={`order-btn ${trida}`}>{objednavka}</button>
      </form>
    </div>
  );
};
