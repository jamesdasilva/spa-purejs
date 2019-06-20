import Link from './components/link';
import FooterBrand from './components/footer-brand';

const render = () => {
  const link = Link({ 
    count: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo",
    url: "google.com",
    category: "UX Design",
    comments: "",
    author: "",
    time: ""
  });
  const conatiner = document.querySelector('#LinkComponent');
  const component = document.createRange().createContextualFragment(link);
  conatiner.appendChild(component);

  const footerBrand = FooterBrand();
  const conatiner2 = document.querySelector('#FooterBrand');
  const component2 = document.createRange().createContextualFragment(footerBrand);
  conatiner2.appendChild(component2);
}

export default render;
