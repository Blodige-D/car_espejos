<template>
  <div class="main-sevicios seccion__servicios">
    <div class="seccion__texto">
      <h1>Servicios</h1>
      <p>
        <span>Contactanos para mas </span
        ><a href="https://api.whatsapp.com/send?phone=+573017068179"
          >Click Aqui!</a
        >
      </p>
      <div class="seccion__separadas">
        <div class="seccion__div">
          <article class="quote-boxed">
            <span></span><span></span><span></span><span></span>
            <p class="quote-boxed__title">Venta y Reparaciones</p>
            <div class="quote-boxed__text">
              <p>Bombillos</p>
              <p>Copas</p>
              <p>Electricidad</p>
              <p>Lamparas</p>
              <p>Plumillas</p>
              <p>Lujos-Vidrios y peliculas de seguridad</p>
            </div>
            <ul class="quote-boxed__meta">
              <li>
                <div class="unit unit-horizontal unit-middle">
                  <div class="unit__body">
                    <cite class="quote-boxed__cite font">Ricardo Moreno </cite>
                  </div>
                </div>
              </li>
              <li>
                <a class="list-contact-link font" href="https://api.whatsapp.com/send?phone=+573132639099&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!">+57313 639099</a>
              </li>
            </ul>
          </article>
        </div>
        <div class="seccion__div">
          <article class="quote-boxed">
            <span></span><span></span><span></span><span></span>
            <p class="quote-boxed__title">Cerrajeria Automotriz!</p>
            <div class="quote-boxed__text">
              <p>Alarmas</p>
              <p>Bloqueos</p>
              <p>Elevavidrios</p>
              <p>Puertas Corredizas</p>
              <p>Toda Clase de Llaves</p>
              <p>Arreglo de Chapas y Cremalleras</p>
            </div>
            <ul class="quote-boxed__meta">
              <li>
                <div class="unit unit-horizontal unit-middle">
                  <div class="unit__body">
                    <cite class="quote-boxed__cite font"
                      >Yeferson Santillana</cite
                    >
                  </div>
                </div>
              </li>
              <li>
                <a class="list-contact-link font" href="https://api.whatsapp.com/send?phone=+573106871844&text=Hola, Necesito mas informacion de los productos que vimos en tu pagina!">+573106871844</a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.seccion__servicios {
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  padding: 80px 0;
}

.seccion__texto {
  display: block;
  text-align: center;
}
.seccion__texto h1 {
  font-size: 50px;
}

.seccion__separadas {
  display: flex;
  justify-content: center;
}

.seccion__div {
  margin: 0 30px;
}

.quote-boxed {
  position: relative;
  z-index: 1;
  padding: 25px 20px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  text-align: left;
  transition: 0.33s;
  position: relative;
}

.quote-boxed > span {
  position: absolute;
  width: 57px;
  height: 57px;
  vertical-align: middle;
  border: 0 solid #e8e8e8;
  background-color: transparent;
  pointer-events: none;
  transition: height 0.5s, width 0.5s, color 0.08s;
}

.quote-boxed > span:nth-child(1) {
  top: 0;
  left: 0;
  border-width: 1px 0 0 1px;
}

.quote-boxed > span:nth-child(2) {
  top: 0;
  right: 0;
  border-width: 1px 1px 0 0;
}

.quote-boxed > span:nth-child(3) {
  bottom: 0;
  right: 0;
  border-width: 0 1px 1px 0;
}

.quote-boxed > span:nth-child(4) {
  bottom: 0;
  left: 0;
  border-width: 0 0 1px 1px;
}

html:not(.tablet):not(.mobile) .quote-boxed:hover > span {
  border-color: red;
}

html:not(.tablet):not(.mobile) .quote-boxed:hover > span:nth-child(1) {
  width: 100%;
}

html:not(.tablet):not(.mobile) .quote-boxed:hover > span:nth-child(2) {
  height: 100%;
}

html:not(.tablet):not(.mobile) .quote-boxed:hover > span:nth-child(3) {
  width: 100%;
}

html:not(.tablet):not(.mobile) .quote-boxed:hover > span:nth-child(4) {
  height: 100%;
}

html:not(.mobile):not(.tablet) .quote-boxed::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: red;
  transform: scale3d(0.94, 0.94, 0.94);
  opacity: 0;
  transition: 0.4s 0.1s;
}

html:not(.mobile):not(.tablet) .quote-boxed .quote-boxed__title,
html:not(.mobile):not(.tablet) .quote-boxed .quote-boxed__cite,
html:not(.mobile):not(.tablet) .quote-boxed .quote-boxed__time,
html:not(.mobile):not(.tablet) .quote-boxed .quote-boxed__shape {
  transition: 0.22s 0.1s;
}

html:not(.mobile):not(.tablet) .quote-boxed:hover {
  color: #ffffff;
}

html:not(.mobile):not(.tablet) .quote-boxed:hover::before {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}

html:not(.mobile):not(.tablet) .quote-boxed:hover .quote-boxed__title,
html:not(.mobile):not(.tablet) .quote-boxed:hover .quote-boxed__cite,
html:not(.mobile):not(.tablet) .quote-boxed:hover .quote-boxed__time {
  color: #ffffff;
}

html:not(.mobile):not(.tablet) .quote-boxed:hover .quote-boxed__shape {
  fill: #ffffff;
}

.quote-boxed__title {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.35;
  color: #151515;
}

.quote-boxed__text {
  position: relative;
  padding-left: 50px;
}

.quote-boxed__shape {
  position: absolute;
  left: 0;
  top: 9px;
  fill: #b7b7b7;
}

.quote-boxed__avatar {
  border-radius: 50%;
}

.quote-boxed__cite {
  color: #151515;
  text-transform: uppercase;
}

.quote-boxed__time {
  color: #9b9b9c;
  font-style: italic;
}

* + .quote-boxed__text {
  margin-top: 10px;
}

* + .quote-boxed__meta {
  margin-top: 15px;
}

@media (max-width: 479px) {
  .quote-boxed__meta > * + * {
    margin-top: 10px;
  }
  .quote-boxed__meta .unit.unit-horizontal .unit__body {
    padding-left: 15px;
  }
}

@media (min-width: 480px) {
  .quote-boxed__meta {
    transform: translateY(-15px);
    margin-left: -30px;
    margin-bottom: -15px;
  }
  .quote-boxed__meta > * {
    display: inline-block;
    vertical-align: middle;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
  }
  .quote-boxed__meta > *:not(:last-child) {
    position: relative;
  }
  .quote-boxed__meta > *:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    display: inline-block;
    width: 1px;
    height: 18px;
    background: #ebebeb;
  }
}

@media (min-width: 768px) {
  * + .quote-boxed__text {
    margin-top: 22px;
  }
}

@media (min-width: 768px) {
  .quote-boxed__title {
    font-size: 24px;
  }
}

@media (min-width: 768px) {
  .quote-boxed {
    padding: 25px 40px 40px;
  }
}

@media (min-width: 1200px) {
  .quote-boxed {
    padding: 30px 60px 60px;
  }
}

@media (min-width: 1200px) and (max-width: 1799px) {
  .rd-navbar-sidebar-linked .quote-boxed {
    padding: 30px 30px 40px;
  }
}

.unit {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex: 0 1 100%;
  -webkit-flex: 0 1 100%;
  flex: 0 1 100%;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.unit__body {
  -ms-flex: 0 1 auto;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
}

.unit-middle {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.unit-horizontal {
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.unit-horizontal > .unit__left + .unit__right,
.unit-horizontal > .unit__left + .unit__body {
  padding-top: 0;
  padding-left: 30px;
}

.unit-horizontal > .unit__body + .unit__right {
  padding-top: 0;
  padding-left: 30px;
}

.range + .range {
  margin-top: 40px;
}

.range-50 {
  position: relative;
  transform: translateY(-35px);
  margin-bottom: -35px;
  pointer-events: none;
}

.range-50 > *:before {
  content: "";
  display: table;
  width: 0;
}

.range-50 > * {
  margin-top: 35px;
  pointer-events: auto;
}

.range-sm-center {
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.font {
  font-size: 15px;
}
</style>