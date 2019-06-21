const Layout = ({ Logo, Credits, FooterBrand, Link, User, AddPostButton, HamburguerButton, Search }) => `
  <div id="app">
    <div id="header">       
      <div class="header__container">
        <div class="header__box-left">
          ${Logo()}
          ${HamburguerButton()}
          ${Search()}
        </div>
        <div class="header__box-right">
          ${User()}
          ${AddPostButton()}
        </div>
      </div>
    </div>
    <div id="body">       
      <div class="body__container">
        ${Link({
          count: 4,
          title: 'Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo',
          url: 'google.com',
          category: 'UX Design',
          comments: '',
          author: '',
          time: '',
        })}
        ${Link({
          count: 4,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo',
          url: 'google.com',
          category: 'UX Design',
          comments: '',
          author: '',
          time: '',
        })}
        ${Link({
          count: 6,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          url: 'google.com',
          category: 'UX Design',
          comments: '',
          author: '',
          time: '',
        })}
        <div class="reload-button">
          Load more
        </div>
      </div>
    </div>
    <div id="footer"> 
      <div class="footer__container">
        <div class="footer__box-left">
          ${FooterBrand()}
        </div>
        <div class="footer__box-right">
          ${Credits()}
        </div>
      </div>
    </div>
  </div>`;

export default Layout;
