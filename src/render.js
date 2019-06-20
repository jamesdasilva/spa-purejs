import Link from './components/link/link';
import FooterBrand from './components/footer-brand/footer-brand';
import Credits from './components/credits/credits';
import Layout from './components/layout/layout';
import User from './components/user/user';

const render = () => {

  const layout = Layout({
    Link,
    FooterBrand,
    Credits,
    User
  });
  const conatiner = document.querySelector('#root');
  const component = document.createRange().createContextualFragment(layout);
  conatiner.appendChild(component);
};

export default render;
