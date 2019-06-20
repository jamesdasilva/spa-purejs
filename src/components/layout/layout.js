const Layout = ({ Credits, FooterBrand, Link }) => `
  <div id="app">
    <div id="header">       
      <div class="header__container">
        <div class="header__box-left">

          <div class="logo">
            <div class="logo__hexagon"></div>
            <div class="logo__text">UX</div>
          </div>

          <div class="hamburguer-button">
            <div class="hamburguer-button__bar"></div>
            <div class="hamburguer-button__bar"></div>
            <div class="hamburguer-button__bar"></div>
          </div>

          <div class="wrap">
            <div class="search">
              <button type="submit" class="searchButton">
                P
              </button> 
              <input type="text" class="searchTerm" placeholder="">
            </div>
          </div>
        </div>

        <div class="header__box-right">
          <div class="user">
            <img class="user__image" src="https://picsum.photos/id/237/40/40" alt="" />
            <div class="user__count"></div>
          </div>

          <div class="add-post-button">
            <div class="add-post-button__icon">+</div>
            <div class="add-post-button__text">Add Post</div>
          </div>
        </div>
        
      </div>
    </div>
    <div id="body">       
      <div class="body__container">
        ${Link({
          count: 4,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo',
          url: 'google.com',
          category: 'UX Design',
          comments: '',
          author: '',
          time: '',
        })}
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
