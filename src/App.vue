<template>
  <v-app>
    <v-app-bar
      app
      height="80"
    >
      <figure class="navbar__figure">
        <img src="@/assets/img/logo_peque.png" alt="Logo de CarEspejos" class="navbar__img">
        <span class="brand__slogan">Para todo tipo de Carros</span>
      </figure>
      <v-spacer></v-spacer>
      <nav class="nav">
        <router-link class="nav__item" to="/"><span>Inicio</span></router-link>
        <router-link class="nav__item" to="/espejos"><span>Espejos</span></router-link>
        <router-link class="nav__item" to="/cerrajeria"><span>Cerrajería</span></router-link>
      </nav>
      <v-spacer></v-spacer>
      <div class="social">
        <div class="social__item"><a class="icon icon-sm fa fa-facebook social__icon" href="#"></a></div>
        <div class="social__item"><a class="icon icon-sm fa fa-whatsapp social__icon" href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!"></a></div>
      </div>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <a href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.navbar__figure{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navbar__img{
  padding-left: 30px;
  
}
.brand__slogan{
  color: #a3a3a3;
  font-size: 14px;
  letter-spacing: .16em;
}
.nav{
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
.nav__item::before, .nav__item::after {
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


.social{
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
.social__item:hover .social__icon, .social__item:hover {
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
.social__item::before, .social__item::after {
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

.social__icon{
  text-decoration: none;
  color: #d3d3d6;
}

.social__icon:hover{
  color:var(--color-rojo1);
}

nav a.router-link-exact-active{
  border: 2px solid var(--color-rojo2);
  color:var(--color-rojo2);
}

.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}

.whatsapp-icon {
  margin-top:13px;
}

</style>
