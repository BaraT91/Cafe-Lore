import { render } from '@czechitas/render';
import '../global.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OrderItems } from '../components/OrderItem';
const response = await fetch(
  `http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify([
    //   {
    //     op: 'replace',
    //     path: '/ordered',
    //     value: !ordered,
    //   },
    // ]),
  },
);
const json = await response.json();
const drinks = json.data;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />

      <main className="order">
        <div className="order__content container">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order empty-order--hide">
            Zatím nemáte nic objednáno
          </p>
          <div className="order__items">
            <>
              {drinks.map(({ id, name, image }) => (
                <OrderItems key={id} name={name} image={image} />
              ))}
            </>
          </div>
        </div>
      </main>
      <Footer />
      {/* <footer>
        <div className="container">
          <div className="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
          </div>
        </div>
      </footer>  */}
    </div>
  </div>,
);
