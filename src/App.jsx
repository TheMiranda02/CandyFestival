import './App.css';
import React, { useEffect } from 'react';

function App() {

  //Flecha
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  //MODALES
  useEffect(() => {
    // Código de los modales -
    document.querySelector('.btn-login').onclick = function() {
      document.getElementById('loginModal').style.display = 'block';
    }
    
    document.getElementById('closeLogin').onclick = function() {
      document.getElementById('loginModal').style.display = 'none';
    }
  
    document.querySelector('.btn-register').onclick = function() {
      document.getElementById('registerModal').style.display = 'block';
    }
    
    document.getElementById('closeRegister').onclick = function() {
      document.getElementById('registerModal').style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target === document.getElementById('loginModal') || event.target === document.getElementById('registerModal')) {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('registerModal').style.display = 'none';
      }
    }
  
    return () => {
      // Limpiar event handlers si es necesario
      window.onclick = null;
    };
  }, []);

  //CARRUSEL DEL BANNER
  useEffect(() => {
    // Copia exacta de tu código sin cambios
    let currentIndex1 = 0; 
    const images1 = document.querySelectorAll('.img-banners img');
    const indicators1 = document.querySelectorAll('.bola');
    const totalImages1 = images1.length;

    function showImage1(index) {
      const offset = -index * 100;
      document.querySelector('.img-banners').style.transform = `translateX(${offset}%)`;

      indicators1.forEach((indicator, i) => {
        indicator.classList.toggle('activa', i === index);
      });
    }

    function nextImage1() {
      currentIndex1 = (currentIndex1 + 1) % totalImages1;
      showImage1(currentIndex1);
    }

    indicators1.forEach(indicator => {
      indicator.addEventListener('click', () => {
        currentIndex1 = parseInt(indicator.dataset.index);
        showImage1(currentIndex1);
      });
    });

    const intervalId = setInterval(nextImage1, 3000); 
    showImage1(currentIndex1);

    // Limpieza básica (opcional pero recomendada)
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //CARRUSEL
  useEffect(() => {
    // Tu código original EXACTO
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const imagesContainer = document.querySelector('.imagen');
    const totalImages2 = document.querySelectorAll('.image').length;
    let currentIndex2 = 0;
  
    nextButton.addEventListener('click', () => {
      if (currentIndex2 < totalImages2 - 3) { 
        currentIndex2++;
        updateCarousel();
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (currentIndex2 > 0) { 
        currentIndex2--;
        updateCarousel();
      }
    });
  
    function updateCarousel() {
      const offset = -currentIndex2 * (100 / 3); 
      imagesContainer.style.transform = `translateX(${offset}%)`;
      updateButtonStates(); 
    }
  
    function updateButtonStates() {
      if (currentIndex2 === 0) {
        prevButton.classList.add('disabled');
        prevButton.style.backgroundImage = "url('')"; 
      } else {
        prevButton.classList.remove('disabled');
        prevButton.style.backgroundImage = "url('./img/Izquierda.png')"; 
      }
  
      if (currentIndex2 >= totalImages2 - 3) {
        nextButton.classList.add('disabled');
        nextButton.style.backgroundImage = "url('')";
      } else {
        nextButton.classList.remove('disabled');
        nextButton.style.backgroundImage = "url('./img/Derecha.png')"; 
      }
    }
  
    updateButtonStates();
  
    // Limpieza (opcional pero recomendada)
    return () => {
      nextButton.removeEventListener('click', () => {});
      prevButton.removeEventListener('click', () => {});
    };
  }, []); // <-- Array vacío para que solo se ejecute una vez


  //cARTA
  useEffect(() => {
    // Tu código original SIN MODIFICACIONES
    const targets = document.querySelectorAll('[data-target]'); // Corregí el selector (faltaba cerrar el corchete)
    const content = document.querySelectorAll('[data-content]'); // Corregí el selector (faltaba cerrar el corchete)
  
    targets.forEach(target => {
      target.addEventListener('click', () => {
        content.forEach(c => {
          c.classList.remove('active');
        });
  
        const t = document.querySelector(target.dataset.target);
        t.classList.add('active');
      });
    });
  
    // Limpieza básica (opcional pero recomendada)
    return () => {
      targets.forEach(target => {
        target.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="menu">
        <div className="logo">
          <img src="img/Logo.png" alt="Candy Festival" />
          <a href="#"></a>
        </div>
        <ul className="menu-items">
          <li><a href="#recetas"><img src="img/Recetas.png" alt="Recetas" /> Recetas</a></li>
          <li><a href="#recetarios"><img src="img/Recetarios.png" alt="Recetarios" /> Recetarios</a></li>
          <li className="submenu">
            <a href="#"><img src="img/Consejos.png" alt="Consejos" /> Consejos</a>
            <ul className="submenu-items">
              <li><a href="#consejos-generales">Consejos Generales</a></li>
              <li><a href="#consejos-textura">Consejos de Textura</a></li>
              <li><a href="#consejos-decoracion">Consejos de Decoración</a></li>
              <li><a href="#consejos-seguridad">Consejos de Seguridad</a></li>
            </ul>
          </li>
          <li><a href="#nosotros"><img src="img/Nosotros.png" alt="Nosotros" /> Nosotros</a></li>
        </ul>        
        <div className="menu-buttons">
          <a href="#" className="btn-login">Iniciar sesión</a>
          <a href="#" className="btn-register">Registrarse</a>
        </div>

        {/* Modals */}
        <div id="loginModal" className="modal">
          <div className="modal-content">
            <span className="close" id="closeLogin">&times;</span>
            <h2>Iniciar Sesión</h2>
            <form>
              <label htmlFor="username">Usuario:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>
        
        <div id="registerModal" className="modal">
          <div className="modal-content">
            <span className="close" id="closeRegister">&times;</span>
            <h2>Registrarse</h2>
            <form>
              <label htmlFor="regUsername">Usuario:</label>
              <input type="text" id="regUsername" name="regUsername" required />
              <label htmlFor="regPassword">Contraseña:</label>
              <input type="password" id="regPassword" name="regPassword" required />
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      </nav> <br/><br/><br/><br/><br/>

      {/* Main Content */}
      <div className="content">
        {/* Banner Carousel */}
        <section>
          <div className="carrusel-banners">
            <div className="img-banners">
              <img src="img/Banner1.jpg" alt="Banner 1" />
              <img src="img/Banner2.jpg" alt="Banner 2" />
              <img src="img/Banner3.jpg" alt="Banner 3" />
            </div>
            <div className="indicadores">
              <span className="bola" data-index="0"></span>
              <span className="bola" data-index="1"></span>
              <span className="bola" data-index="2"></span>
            </div>
          </div><br/><br/>
        </section>

        {/* Recipes Section */}
        <section className="recetas" id="recetas">
          <section className="title-container">
            <b><p className="title">Buen Día.</p></b><br/>
            <b><p className="subtitle">Postres para tí.</p></b>
          </section><br/><br/>

          <div className="recetas-menu">
            <p data-target="#postresA">Postres Horneados</p>
            <p data-target="#postresB">Postres Fritos</p>
            <p data-target="#postresC">Postres Fríos</p>
            <p data-target="#postresD">Postres Congelados</p>
          </div><br/>

          <div data-content id="postresA">
            <div className="carrusel-container">
              <button className="prev"></button>
              <div className="carrusel">
                <div className="imagen">
                  <div className="image">
                    <a>
                      <img className="img" src="img/Pasteles.png" alt="Pasteles" />
                    </a>
                    <div className="info">
                      <p className="descripcion">Un pastel es más que solo un postre; es un pedazo
                        de felicidad que nos une en momentos especiales. Ya sea para celebrar
                        un cumpleaños o simplemente para endulzar un día cualquiera, siempre
                        será la opción perfecta.</p><br/>
                      <button className="btn-recetas">¡Recetas Aquí!</button>
                    </div>
                  </div>

                  <div className="image">
                    <a>
                      <img className="img" src="img/Cupcakes.png" alt="Cupcakes" />
                    </a>
                    <div className="info">
                      <p className="descripcion">Los cupcakes son como pequeños regalos de amor,
                        decorados con creatividad y sabor en cada bocado. Perfectos para
                        cualquier ocasión, son el toque personal que hace que todo momento
                        sea único.</p><br/>
                      <button className="btn-recetas">¡Recetas Aquí!</button>
                    </div>
                  </div>

                  <div className="image">
                    <a>
                      <img className="img" src="img/Galletas.png" alt="Paquete 3" />
                    </a>
                    <div className="info">
                      <p className="descripcion">Las galletas, con su crujiente encanto y sus
                        infinitas combinaciones de sabores, son pequeñas delicias que nos
                        llenan de nostalgia y alegría. ¡Son el abrazo dulce que todos
                        necesitamos!</p><br />
                      <button className="btn-recetas">¡Recetas Aquí!</button>
                    </div>
                  </div>

                  <div className="image">
                    <a>
                      <img className="img" src="img/Tartas.png" alt="Tartas" />
                    </a>
                    <div className="info">
                      <p className="descripcion">Las tartas son una obra de arte culinaria, donde
                        cada capa, cada ingrediente, cuenta una historia. Perfectas para
                        sorprender en cualquier ocasión, son el equilibrio entre la elegancia
                        y el sabor irresistible.</p><br />
                      <button className="btn-recetas">¡Recetas Aquí!</button>
                    </div>
                  </div>

                  <div className="image">
                    <a>
                      <img className="img" src="img/MilHojas.png" alt="Mil Hojas" />
                    </a>
                    <div className="info">
                      <p className="descripcion">El mil hojas, con su delicada textura crujiente y
                        su dulce relleno, es un postre que conquista a cada bocado. Cada capa
                        es una sorpresa que hará que te enamores aún más de los sabores
                        refinados.</p><br />
                      <button className="btn-recetas">¡Recetas Aquí!</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="next"></button>
            </div>

            <div data-content id="postresA">
              <div className="carrusel-container">
                <button className="prev"></button>
                <div className="carrusel">
                  <div className="imagen">
                    <div className="image">
                      <a>
                        <img className="img" src="img/Pasteles.png" alt="Pasteles" />
                      </a>
                      <div className="info">
                        <p className="descripcion">Un pastel es más que solo un postre; es un pedazo
                          de felicidad que nos une en momentos especiales. Ya sea para celebrar
                          un cumpleaños o simplemente para endulzar un día cualquiera, siempre
                          será la opción perfecta.</p><br />
                        <button className="btn-recetas">¡Recetas Aquí!</button>
                      </div>
                    </div>

                    <div className="image">
                      <a>
                        <img className="img" src="img/Cupcakes.png" alt="Cupcakes" />
                      </a>
                      <div className="info">
                        <p className="descripcion">Los cupcakes son como pequeños regalos de amor,
                          decorados con creatividad y sabor en cada bocado. Perfectos para
                          cualquier ocasión, son el toque personal que hace que todo momento
                          sea único.</p><br />
                        <button className="btn-recetas">¡Recetas Aquí!</button>
                      </div>
                    </div>

                    <div className="image">
                      <a>
                        <img className="img" src="img/Galletas.png" alt="Paquete 3" />
                      </a>
                      <div className="info">
                        <p className="descripcion">Las galletas, con su crujiente encanto y sus
                          infinitas combinaciones de sabores, son pequeñas delicias que nos
                          llenan de nostalgia y alegría. ¡Son el abrazo dulce que todos
                          necesitamos!</p><br />
                        <button className="btn-recetas">¡Recetas Aquí!</button>
                      </div>
                    </div>

                    <div className="image">
                      <a>
                        <img className="img" src="img/Tartas.png" alt="Tartas" />
                      </a>
                      <div className="info">
                        <p className="descripcion">Las tartas son una obra de arte culinaria, donde
                          cada capa, cada ingrediente, cuenta una historia. Perfectas para
                          sorprender en cualquier ocasión, son el equilibrio entre la elegancia
                          y el sabor irresistible.</p><br />
                        <button className="btn-recetas">¡Recetas Aquí!</button>
                      </div>
                    </div>

                    <div className="image">
                      <a>
                        <img className="img" src="img/MilHojas.png" alt="Mil Hojas" />
                      </a>
                      <div className="info">
                        <p className="descripcion">El mil hojas, con su delicada textura crujiente y
                          su dulce relleno, es un postre que conquista a cada bocado. Cada capa
                          es una sorpresa que hará que te enamores aún más de los sabores
                          refinados.</p><br />
                        <button className="btn-recetas">¡Recetas Aquí!</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="next"></button>
              </div>
            </div>
          </div>
        </section>

        <section className="title-container">
          <p className="titleB"><strong>Descubre Nuestros Recetarios:</strong></p>
        </section>


        {/* Recipe Books Section */}
        <section className="recetarios" id="recetarios">
          <div className="item">
            <img src="img/RecetarioA.png" alt="Recetario Fresas con Crema" className="cover-image" />
            <a
              href="https://www.recetasnestle.com.mx/sites/default/files/2022-05/Recetario_FresasConCrema.pdf"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
          <div className="item">
            <img src="img/RecetarioB.png" alt="Recetario Postres sin Horno" className="cover-image" />
            <a
              href="https://www.recetasnestle.com.mx/sites/default/files/2022-02/RN_Recetario_Postres_sin_horno.pdf"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
          <div className="item">
            <img src="img/RecetarioC.png" alt="Recetario Especial" className="cover-image" />
            <a
              href="descargar3.pdf"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
          <div className="item">
            <img src="img/RecetarioD.png" alt="Recetario Premium" className="cover-image" />
            <a
              href="descargar4.pdf"
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar PDF
            </a>
          </div>
        </section>

        <section className="title-container">
          <p className="title"><strong>Consejos.</strong></p>
          <p className="subtitle"><strong>Consejos Generales.</strong></p>
        </section>

        <section className="consejos-generales" id="consejos-generales">
          <div className="consejos-container">
            <p className="intro-text">Aquí tienes algunos consejos prácticos para hacer tu experiencia de cocina mucho más fácil y deliciosa:</p>

            <ul className="consejos-list">
              <li>
                <h3 className="consejo-title">Lee la receta completa antes de empezar</h3>
                <p className="consejo-text">Antes de comenzar a cocinar, asegúrate de leer toda la receta de principio a fin. Así evitarás sorpresas y sabrás qué pasos seguir.</p>
              </li>
              <li>
                <h3 className="consejo-title">Prepara todos los ingredientes primero (mise en place)</h3>
                <p className="consejo-text">Ten todos los ingredientes listos antes de comenzar a cocinar. Esto hará que todo el proceso sea más fluido y rápido.</p>
              </li>
              <li>
                <h3 className="consejo-title">Usa utensilios de buena calidad</h3>
                <p className="consejo-text">Un buen cuchillo, una batidora potente o una espátula flexible marcan una gran diferencia en la calidad del trabajo y la facilidad al cocinar.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="title-container">
          <b><p className="subtitle">Consejos de Textura.</p></b>
        </section>

        <section className="consejos-textura" id="consejos-textura">
          <div className="consejos-container">
            <p className="intro-text">Aquí tienes algunos consejos específicos para mejorar la cocción y textura de tus postres según el método de preparación:</p>

            <div className="consejos-category">
              <h3 className="category-title">A. Consejos para la Cocción en el Horno (Postres Horneados)</h3>
              <ul className="consejos-list">
                <li>
                  <h4 className="consejo-title">Precalienta el horno</h4>
                  <p className="consejo-text">Asegúrate de precalentar siempre el horno antes de meter tus postres. Esto garantiza que se cocinen de manera uniforme desde el principio.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Evita abrir el horno durante la cocción</h4>
                  <p className="consejo-text">Cada vez que abres la puerta del horno, se pierde calor. Esto puede hacer que tu postre se derrumbe (especialmente en soufflés y pasteles). Solo abre el horno cuando sea estrictamente necesario.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Usa papel pergamino o moldes adecuados</h4>
                  <p className="consejo-text">Para evitar que los postres se peguen, usa papel pergamino o enmanteca y enharina tus moldes, especialmente para pasteles o tartas.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Coloca los postres en el centro del horno</h4>
                  <p className="consejo-text">Esto asegura una cocción más uniforme, ya que el calor se distribuye mejor en esa posición.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Usa un termómetro de horno</h4>
                  <p className="consejo-text">Si tienes dudas sobre la precisión de tu horno, un termómetro de horno puede ayudarte a controlar la temperatura exacta y evitar que los postres se cocinen demasiado o muy poco.</p>
                </li>
              </ul>
            </div>

            <div className="consejos-category">
              <h3 className="category-title">B. Consejos para Cocción en Aceite (Postres Fritos)</h3>
              <ul className="consejos-list">
                <li>
                  <h4 className="consejo-title">Temperatura del aceite</h4>
                  <p className="consejo-text">La temperatura del aceite es clave para una cocción adecuada. Si el aceite está demasiado frío, los postres absorberán mucho aceite y quedarán grasosos; si está demasiado caliente, se dorarán demasiado rápido por fuera y quedarán crudos por dentro. La temperatura ideal para freír es entre 170-180°C.</p>
                </li>
                <li>
                  <h4 className="consejo-title">No sobrecargar la sartén</h4>
                  <p className="consejo-text">Cuando frías postres, no pongas demasiados a la vez. Si abarrotas la sartén, la temperatura del aceite bajará y los postres no se freirán correctamente.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Seca los postres después de freír</h4>
                  <p className="consejo-text">Después de freír, coloca los postres sobre papel absorbente para eliminar el exceso de grasa. Esto es fundamental para que no queden pesados o grasosos.</p>
                </li>
              </ul>
            </div>

            <div className="consejos-category">
              <h3 className="category-title">C. Consejos para los Postres Fríos</h3>
              <ul className="consejos-list">
                <li>
                  <h4 className="consejo-title">No sobrecargues las cremas con líquidos</h4>
                  <p className="consejo-text">En postres como mousse o panna cotta, no añadas demasiados líquidos a la mezcla. La gelatina o las claras de huevo son las que dan estructura, así que asegúrate de no aligerar la mezcla demasiado.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Deja que los postres fríos se asienten</h4>
                  <p className="consejo-text">Algunos postres, como cheesecakes o tartas de frutas, requieren tiempo de reposo en el refrigerador. No apresures este paso; la textura y el sabor mejoran después de varias horas o incluso un día.</p>
                </li>
              </ul>
            </div>

            <div className="consejos-category">
              <h3 className="category-title">D. Consejos para Cocción en Congelador (Postres Congelados)</h3>
              <ul className="consejos-list">
                <li>
                  <h4 className="consejo-title">Enfriar antes de congelar</h4>
                  <p className="consejo-text">Si estás haciendo postres congelados como helados o semifreddos, asegúrate de que la mezcla esté completamente fría antes de meterla al congelador. Esto evitará la formación de cristales de hielo.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Revuelve la mezcla de helado</h4>
                  <p className="consejo-text">Si estás haciendo helado casero sin una máquina, revuelve la mezcla cada 30 minutos durante las primeras 2-3 horas de congelación para evitar la formación de cristales de hielo grandes. Esto hace que el helado tenga una textura más suave.</p>
                </li>
                <li>
                  <h4 className="consejo-title">Usa un recipiente adecuado</h4>
                  <p className="consejo-text">Para postres congelados como helados, usa un recipiente que cierre bien y que esté hecho para resistir temperaturas bajas para evitar que el postre se seque o absorba olores del congelador.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="nosotros" id="nosotros">
          <div className="nosotros-container">
            <div className="nosotros-texto">
              <h2>¿Quiénes Somos?</h2>
              <p>En <strong>Candy Festival</strong>, nuestra pasión por la repostería se mezcla con la magia de los sabores y la creatividad. Nacimos de la idea de un grupo de amigos unidos por un amor compartido por los postres y la búsqueda de ese momento perfecto en cada bocado. Después de muchos años experimentando, probando recetas y compartiendo risas en la cocina, decidimos crear un espacio donde todos pudieran disfrutar de nuestros dulces favoritos y aprender a preparar los suyos.</p>
              <p>Nuestro viaje comenzó con pequeñas pruebas de recetas caseras que transformaban cada postre en una obra de arte, hasta convertirnos en un referente para aquellos que buscan algo más que simples recetas: buscamos que cada creación sea una celebración. Desde tortas espectaculares hasta postres más sencillos pero igualmente deliciosos, en <strong>Candy Festival</strong> creemos que cada momento merece ser endulzado con un toque especial.</p>
              <p>Hoy, nos sentimos orgullosos de compartir con ustedes nuestra colección de recetas, consejos y trucos, esperando inspirar a cada uno de ustedes a explorar el mundo de la repostería, a experimentar y, por supuesto, a disfrutar de la magia de los postres. Porque para nosotros, cada postre tiene una historia que contar, y en <strong>Candy Festival</strong> nos encanta ser parte de la tuya.</p>
            </div>
            <div className="nosotros-imagen">
              <img src="img/Imagen.png" alt="Candy Festival" />
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-container">
            <div className="logo">
              <img src="./img/Logo.png" alt="Logo - Candy Festival" />
            </div>
            <div className="social-media">
              <ul>
                <li><a href="#"><img src="./img/Facebook.png" alt="Facebook" /></a></li>
                <li><a href="#"><img src="./img/Pinterest.png" alt="Pinterest" /></a></li>
                <li><a href="#"><img src="./img/Instagram.png" alt="Instagram" /></a></li>
                <li><a href="#"><img src="./img/TikTok.png" alt="TikTok" /></a></li>
              </ul>
            </div>
          </div><br />
          <div className="footer-menu">
            <ul>
              <li><a href="#"><span>Términos y Condiciones</span></a></li>
              <li><a href="#"><span>Política de Privacidad</span></a></li>
              <li><a href="#"><span>Blogs</span></a></li>
              <li><a href="#"><span>Testimonios de Clientes</span></a></li>
            </ul>
          </div>
        </footer>

      </div>

      <button 
        onClick={scrollToTop}
        className="scroll-top-button"
        aria-label="Volver al inicio"
      >
        ↑
      </button>

    </div>
  );
}

export default App;