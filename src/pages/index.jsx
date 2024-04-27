import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';

const drinkList = await fetch('http://localhost:4000/api/drinks');
const json = await drinkList.json();
const drinks = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu nápoj={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const showNav = () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
};

const order = async (e) => {
  console.log(e.target.dataset);
  const ordered = e.target.dataset.ordered === 'true';
  console.log(ordered);

  const response = await fetch(
    `http://localhost:4000/api/drinks/${e.target.dataset.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/ordered',
          value: !ordered,
        },
      ]),
    },
  );
  console.log(response);
  window.location.reload();
};

document.querySelector('.nav-btn').addEventListener('click', showNav);
document.querySelector('.rollout-nav').addEventListener('click', showNav);

const objednavkaForm = document.querySelectorAll('.drink__controls');

objednavkaForm.forEach((form) => {
  form.addEventListener('submit', order);
});
