import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/menu';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
