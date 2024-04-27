import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/menu';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';

const drinkList = await fetch('http://localhost:4000/api/drinks');
const json = await drinkList.json();
const drinks = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true}/>
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

document.querySelector('.nav-btn').addEventListener('click', showNav);
document.querySelector('.rollout-nav').addEventListener('click', showNav);
