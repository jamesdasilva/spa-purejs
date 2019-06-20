import Link from './components/link';

const render = () => {
  const link = Link({ 
    count: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo",
    url: "google.com",
    category: "UX Design"
  });
  const conatiner = document.querySelector('#LinkComponent');
  const component = document.createRange().createContextualFragment(link);
  conatiner.appendChild(component);
}

export default render;
