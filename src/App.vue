<template>
  <v-app>
    <v-app-bar app height="80">
      <figure class="navbar__figure">
        <img
          src="@/assets/img/logo_peque.png"
          alt="Logo de CarEspejos"
          class="navbar__img"
        />
        <span class="brand__slogan">Para todo tipo de Carros</span>
      </figure>
      <v-spacer></v-spacer>
      <nav class="nav">
        <router-link class="nav__item" to="/"><span>Inicio</span></router-link>
        <router-link class="nav__item" to="/espejos"
          ><span>Espejos</span></router-link
        >
        <router-link class="nav__item" to="/cerrajeria"
          ><span>Cerrajería</span></router-link
        >
      </nav>
      <v-spacer></v-spacer>
      <div class="social">
        <div class="social__item">
          <a class="icon icon-sm fa fa-facebook social__icon" href="#"></a>
        </div>
        <div class="social__item">
          <a
            class="icon icon-sm fa fa-whatsapp social__icon"
            href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!"
          ></a>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <footer>
      <div class="footer-content">
        <!--add all information -->
        <figure class="navbar__figure">
          <img
            src="@/assets/img/logo_peque.png"
            alt="Logo de CarEspejos"
            class="navbar__img"
          />
          <span class="brand__slogan">Para todo tipo de Carros</span>
        </figure>
        <p>
          Bienvenidos a CarEspejos, donde encontraras la mejor opcion de compra
          e instalacion de repuestos automotrices, y servicios de cerrajeria
          automotriz. Somos un equipo de trabajo ameno y comprometido con cada
          uno de nuestros clientes, y trabajos. Estamos ubicados en el barrio 7
          de agosto de la ciudad de Bogotá, Te esperamos.
        </p>
        <ul class="socials">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!"><i class="fa fa-whatsapp"></i></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2021 <a href="https://ls2d.com">LS2D CODERS</a></p>
        <div class="footer-menu">
        <ul class="f-menu">
          <li><a href="">Inicio</a></li>
          <li><a href="">Espejos</a></li>
          <li><a href="">Cerrajeria</a></li>
        </ul>
      </div>
      </div>
    </footer>
    <a
      href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!"
      class="whatsapp"
      target="_blank"
    >
      <i class="fa fa-whatsapp whatsapp-icon"></i
    ></a>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.navbar__figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navbar__img {
  padding-left: 30px;
}
.brand__slogan {
  color: #a3a3a3;
  font-size: 14px;
  letter-spacing: 0.16em;
}
.nav {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.nav__item {
  letter-spacing: 0.02px;
  cursor: pointer;
  background: transparent;
  border: 1px solid currentColor;
  padding: 0.4rem 0.5rem;
  font-size: 14px;
  color: var(--color-rojo);
  position: relative;
  transition: color 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.nav__item:hover {
  color: var(--color-rojo1);
}
.nav__item:hover::before {
  width: 0;
}
.nav__item:hover::after {
  height: 0;
}
.nav__item:active {
  border-width: 0.25px;
}
.nav__item span {
  position: relative;
  z-index: 99;
}
.nav__item::before,
.nav__item::after {
  content: "";
  position: absolute;
  background: #f5f5f5;
  z-index: 1;
  transition: all 0.3s;
}
.nav__item::before {
  width: calc(100% - 1rem);
  height: calc(101% + 1rem);
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.nav__item::after {
  height: calc(100% - 1rem);
  width: calc(101% + 1rem);
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.social {
  display: flex;
  justify-content: space-evenly;
  width: 7%;
}

.social__item {
  cursor: pointer;
  background: transparent;
  border: 1px solid currentColor;
  padding: 0.4rem 0.5rem;
  font-size: 14px;
  color: #d3d3d6;
  position: relative;
  transition: color 0.3s;
  text-decoration: none;
  width: 35px;
  height: 35px;
  text-align: center;
}
.social__item:hover .social__icon,
.social__item:hover {
  color: var(--color-rojo1);
}
.social__item:hover::before {
  width: 0;
}
.social__item:hover::after {
  height: 0;
}
.social__item:active {
  border-width: 0.25px;
}
.social__item a {
  position: relative;
  z-index: 99;
}
.social__item::before,
.social__item::after {
  content: "";
  position: absolute;
  background: #f5f5f5;
  z-index: 1;
  transition: all 0.3s;
}
.social__item::before {
  width: calc(100% - 1rem);
  height: calc(101% + 1rem);
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.social__item::after {
  height: calc(100% - 1rem);
  width: calc(101% + 1rem);
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.social__icon {
  text-decoration: none;
  color: #d3d3d6;
}

.social__icon:hover {
  color: var(--color-rojo1);
}

nav a.router-link-exact-active {
  border: 2px solid var(--color-rojo2);
  color: var(--color-rojo2);
}

.whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.whatsapp-icon {
  margin-top: 13px;
}

footer {
  bottom: 0;
  left: 0;
  right: 0;
  background: #111;
  height: auto;
  width: 100vw;
  padding-top: 40px;
  color: #fff;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.footer-content p {
  max-width: 500px;
  margin: 25px auto 0;
  line-height: 28px;
  font-size: 14px;
  color: #cacdd2;
}

.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials li {
  margin: 0 10px;
}

.socials a {
  text-decoration: none;
  color: #fff;
  border: 1.1px solid white;
  padding: 5px;
  border-radius: 50%;
}

.socials a i {
  font-size: 1.1rem;
  width: 20px;
  transition: color 0.4s ease;
}

.socials a:hover i {
  color: aqua;
}

.footer-bottom {
  background: #000;
  width: 100vw;
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
}

.footer-bottom p {
  float: left;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}
.footer-bottom p a {
  color: #44bae8;
  font-size: 16px;
  text-decoration: none;
}
.footer-bottom span {
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}
.footer-menu {
  float: right;
}

.footer-menu ul {
  display: flex;
}

.footer-menu ul li {
  padding-right: 10px;
  display: block;
}

.footer-menu ul li a {
  color: #cfd2d6;
  text-decoration: none;
}

.footer-menu ul li a:hover {
  color: #27bcda;
}

@media (max-width:500px) {
.footer-menu ul{
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}
}
</style>
