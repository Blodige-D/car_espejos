<template>
  <div class="main__mapa">
    <section class="section section-md bg-white">
      <div class="shell">
        <div
          class="
            range
            range-50
            range-sm-center
            range-md-left
            range-md-middle
            range-md-reverse
          "
        >
          <div class="box">
            <div class="thumb-line">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.592656082572!2d-74.08060777730715!3d4.656676542893079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacad656428b9d433!2scar%20espejos!5e0!3m2!1ses!2sco!4v1639172089284!5m2!1ses!2sco"
                width="531"
                height="440"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="seccion_palabras">
            <div class="">
              <p class="q">Encuentranos</p>
              <article class="box_shadow" data-wow-delay=".1s">
                <p class="parra">
                  Repuestos, chapas, espejos todo lo que quieras lo puedes
                  encontrar aqui Cra 07. 26 #63G, Barrios Unidos
                </p>
              </article>
              <div class="" data-wow-delay=".2s"></div>
              <p class="" data-wow-delay=".3s">
                Somos CarEspejos, uno de los mejores negocios de Carros
              </p>
              <a class="whatsapp" href="https://api.whatsapp.com/send?phone=+573017068179">Contacto con WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.shell{
    margin: 0px 55.5px;
    padding: 0px 15px;
}

.seccion_palabras{
    max-width: 570px;
}

.parra{
    font-size: 30px;
}
.q{
    margin-bottom: 90px;
    font-size: 60px;
}

.box_shadow{
    border-bottom: 3px solid rgb(0 0 0 / 0.2);
}

.whatsapp{
    display: table;
                  font-family: sans-serif;
                  text-decoration: none;
                  margin: 1em auto;
                  color: #fff;
                  font-size: 0.9em;
                  padding: 1em 2em 1em 3.5em;
                  border-radius: 2em;
                  font-weight: bold;
                  background: #25d366
                    url('https://tochat.be/click-to-chat-directory/css/whatsapp.svg')
                    no-repeat 1.5em center;
                  background-size: 1.6em;
}

.thumb-line {
  position: relative;
  padding: 20px;
}

.thumb-line::before,
.thumb-line::after {
  content: "";
  position: absolute;
  border: 2px solid #e8e8e8;
  width: 80px;
  height: 80px;
  pointer-events: none;
}

.thumb-line::before {
  top: 0;
  left: 0;
  border-width: 1px 0 0 1px;
}

.thumb-line::after {
  bottom: 0;
  right: 0;
  border-width: 0 1px 1px 0;
}

.thumb-line img {
  position: relative;
  z-index: 2;
  width: 100%;
}

.breadcrumbs-custom .range-custom-bordered [class*="cell-"],
.context-dark .range-custom-bordered [class*="cell-"],
.bg-gray-darker .range-custom-bordered [class*="cell-"],
.bg-primary .range-custom-bordered [class*="cell-"] {
  border-color: rgba(255, 255, 255, 0.4);
}

.breadcrumbs-custom .box-counter,
.context-dark .box-counter,
.bg-gray-darker .box-counter,
.bg-primary .box-counter {
  color: #ffffff;
}

.breadcrumbs-custom .box-bordered,
.context-dark .box-bordered,
.bg-gray-darker .box-bordered,
.bg-primary .box-bordered {
  border-color: rgba(255, 255, 255, 0.52);
}

.breadcrumbs-custom .box-award__divider::before,
.context-dark .box-award__divider::before,
.bg-gray-darker .box-award__divider::before,
.bg-primary .box-award__divider::before {
  background: #ffffff;
}

.breadcrumbs-custom .box-award__time,
.context-dark .box-award__time,
.bg-gray-darker .box-award__time,
.bg-primary .box-award__time {
  color: #ffffff;
}

.breadcrumbs-custom .form-label,
.context-dark .form-label,
.bg-gray-darker .form-label,
.bg-primary .form-label,
.breadcrumbs-custom .form-label-outside,
.context-dark .form-label-outside,
.bg-gray-darker .form-label-outside,
.bg-primary .form-label-outside,
.breadcrumbs-custom .form-input,
.context-dark .form-input,
.bg-gray-darker .form-input,
.bg-primary .form-input {
  color: #ffffff;
}

.breadcrumbs-custom .form-input,
.context-dark .form-input,
.bg-gray-darker .form-input,
.bg-primary .form-input {
  border-color: rgba(255, 255, 255, 0.4);
}

.breadcrumbs-custom .form_inline .form-wrap::before,
.context-dark .form_inline .form-wrap::before,
.bg-gray-darker .form_inline .form-wrap::before,
.bg-primary .form_inline .form-wrap::before {
  border-color: rgba(255, 255, 255, 0.4);
}

.breadcrumbs-custom .form_inline .form-wrap.has-error::before,
.context-dark .form_inline .form-wrap.has-error::before,
.bg-gray-darker .form_inline .form-wrap.has-error::before,
.bg-primary .form_inline .form-wrap.has-error::before {
  border-color: #f5543f;
}

.breadcrumbs-custom .divider-small::before,
.context-dark .divider-small::before,
.bg-gray-darker .divider-small::before,
.bg-primary .divider-small::before {
  background: #ffffff;
}

.breadcrumbs-custom .divider-small.divider-primary::before,
.context-dark .divider-small.divider-primary::before,
.bg-gray-darker .divider-small.divider-primary::before,
.bg-primary .divider-small.divider-primary::before {
  background: red;
}

.breadcrumbs-custom .button.button-link,
.context-dark .button.button-link,
.bg-gray-darker .button.button-link,
.bg-primary .button.button-link {
  color: #ffffff;
}

.breadcrumbs-custom .button.button-link:hover,
.context-dark .button.button-link:hover,
.bg-gray-darker .button.button-link:hover,
.bg-primary .button.button-link:hover {
  color: red;
}

.breadcrumbs-custom .button-default,
.context-dark .button-default,
.bg-gray-darker .button-default,
.bg-primary .button-default,
.breadcrumbs-custom .button-default:focus,
.context-dark .button-default:focus,
.bg-gray-darker .button-default:focus,
.bg-primary .button-default:focus {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.breadcrumbs-custom .button-default:hover,
.context-dark .button-default:hover,
.bg-gray-darker .button-default:hover,
.bg-primary .button-default:hover,
.breadcrumbs-custom .button-default:active,
.context-dark .button-default:active,
.bg-gray-darker .button-default:active,
.bg-primary .button-default:active {
  color: #ffffff;
  background-color: red;
  border-color: red;
}

.breadcrumbs-custom .button-default.button-ujarak:hover,
.context-dark .button-default.button-ujarak:hover,
.bg-gray-darker .button-default.button-ujarak:hover,
.bg-primary .button-default.button-ujarak:hover {
  background-color: #ffffff;
}

.breadcrumbs-custom .button-default.button-ujarak::before,
.context-dark .button-default.button-ujarak::before,
.bg-gray-darker .button-default.button-ujarak::before,
.bg-primary .button-default.button-ujarak::before {
  background: green;
}

.breadcrumbs-custom .button-default.button-anis:hover,
.context-dark .button-default.button-anis:hover,
.bg-gray-darker .button-default.button-anis:hover,
.bg-primary .button-default.button-anis:hover {
  background-color: #ffffff;
}

.breadcrumbs-custom .button-default.button-anis::before,
.context-dark .button-default.button-anis::before,
.bg-gray-darker .button-default.button-anis::before,
.bg-primary .button-default.button-anis::before,
.breadcrumbs-custom .button-default.button-anis::after,
.context-dark .button-default.button-anis::after,
.bg-gray-darker .button-default.button-anis::after,
.bg-primary .button-default.button-anis::after {
  background: red;
}

.breadcrumbs-custom .button-primary,
.context-dark .button-primary,
.bg-gray-darker .button-primary,
.bg-primary .button-primary,
.breadcrumbs-custom .button-primary:focus,
.context-dark .button-primary:focus,
.bg-gray-darker .button-primary:focus,
.bg-primary .button-primary:focus {
  color: #ffffff;
  background-color: red;
  border-color: red;
}

.breadcrumbs-custom .button-primary:hover,
.context-dark .button-primary:hover,
.bg-gray-darker .button-primary:hover,
.bg-primary .button-primary:hover,
.breadcrumbs-custom .button-primary:active,
.context-dark .button-primary:active,
.bg-gray-darker .button-primary:active,
.bg-primary .button-primary:active {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.breadcrumbs-custom .button-primary.button-ujarak:hover,
.context-dark .button-primary.button-ujarak:hover,
.bg-gray-darker .button-primary.button-ujarak:hover,
.bg-primary .button-primary.button-ujarak:hover {
  background-color: green;
}

.breadcrumbs-custom .button-primary.button-ujarak::before,
.context-dark .button-primary.button-ujarak::before,
.bg-gray-darker .button-primary.button-ujarak::before,
.bg-primary .button-primary.button-ujarak::before {
  background: #ffffff;
}

.breadcrumbs-custom .button-primary.button-anis:hover,
.context-dark .button-primary.button-anis:hover,
.bg-gray-darker .button-primary.button-anis:hover,
.bg-primary .button-primary.button-anis:hover {
  background-color: red;
}

.breadcrumbs-custom .button-primary.button-anis::before,
.context-dark .button-primary.button-anis::before,
.bg-gray-darker .button-primary.button-anis::before,
.bg-primary .button-primary.button-anis::before,
.breadcrumbs-custom .button-primary.button-anis::after,
.context-dark .button-primary.button-anis::after,
.bg-gray-darker .button-primary.button-anis::after,
.bg-primary .button-primary.button-anis::after {
  background: #ffffff;
}

.breadcrumbs-custom .button-primary-outline,
.context-dark .button-primary-outline,
.bg-gray-darker .button-primary-outline,
.bg-primary .button-primary-outline,
.breadcrumbs-custom .button-primary-outline:focus,
.context-dark .button-primary-outline:focus,
.bg-gray-darker .button-primary-outline:focus,
.bg-primary .button-primary-outline:focus {
  color: green;
  background-color: transparent;
  border-color: green;
}

.breadcrumbs-custom .button-primary-outline:hover,
.context-dark .button-primary-outline:hover,
.bg-gray-darker .button-primary-outline:hover,
.bg-primary .button-primary-outline:hover,
.breadcrumbs-custom .button-primary-outline:active,
.context-dark .button-primary-outline:active,
.bg-gray-darker .button-primary-outline:active,
.bg-primary .button-primary-outline:active {
  color: green;
  background-color: #ffffff;
  border-color: #ffffff;
}

.breadcrumbs-custom .button-primary-outline.button-ujarak:hover,
.context-dark .button-primary-outline.button-ujarak:hover,
.bg-gray-darker .button-primary-outline.button-ujarak:hover,
.bg-primary .button-primary-outline.button-ujarak:hover {
  background-color: transparent;
}

.breadcrumbs-custom .button-primary-outline.button-ujarak::before,
.context-dark .button-primary-outline.button-ujarak::before,
.bg-gray-darker .button-primary-outline.button-ujarak::before,
.bg-primary .button-primary-outline.button-ujarak::before {
  background: #ffffff;
}

.breadcrumbs-custom .button-primary-outline.button-anis:hover,
.context-dark .button-primary-outline.button-anis:hover,
.bg-gray-darker .button-primary-outline.button-anis:hover,
.bg-primary .button-primary-outline.button-anis:hover {
  background-color: transparent;
}

.breadcrumbs-custom .button-primary-outline.button-anis::before,
.context-dark .button-primary-outline.button-anis::before,
.bg-gray-darker .button-primary-outline.button-anis::before,
.bg-primary .button-primary-outline.button-anis::before,
.breadcrumbs-custom .button-primary-outline.button-anis::after,
.context-dark .button-primary-outline.button-anis::after,
.bg-gray-darker .button-primary-outline.button-anis::after,
.bg-primary .button-primary-outline.button-anis::after {
  background: #ffffff;
}

.breadcrumbs-custom .button-default-outline,
.context-dark .button-default-outline,
.bg-gray-darker .button-default-outline,
.bg-primary .button-default-outline,
.breadcrumbs-custom .button-default-outline:focus,
.context-dark .button-default-outline:focus,
.bg-gray-darker .button-default-outline:focus,
.bg-primary .button-default-outline:focus {
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
}

.breadcrumbs-custom .button-default-outline:hover,
.context-dark .button-default-outline:hover,
.bg-gray-darker .button-default-outline:hover,
.bg-primary .button-default-outline:hover,
.breadcrumbs-custom .button-default-outline:active,
.context-dark .button-default-outline:active,
.bg-gray-darker .button-default-outline:active,
.bg-primary .button-default-outline:active {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.breadcrumbs-custom .button-default-outline.button-ujarak:hover,
.context-dark .button-default-outline.button-ujarak:hover,
.bg-gray-darker .button-default-outline.button-ujarak:hover,
.bg-primary .button-default-outline.button-ujarak:hover {
  background-color: transparent;
}

.breadcrumbs-custom .button-default-outline.button-ujarak::before,
.context-dark .button-default-outline.button-ujarak::before,
.bg-gray-darker .button-default-outline.button-ujarak::before,
.bg-primary .button-default-outline.button-ujarak::before {
  background: #ffffff;
}

.breadcrumbs-custom .button-default-outline.button-anis:hover,
.context-dark .button-default-outline.button-anis:hover,
.bg-gray-darker .button-default-outline.button-anis:hover,
.bg-primary .button-default-outline.button-anis:hover {
  background-color: transparent;
}

.breadcrumbs-custom .button-default-outline.button-anis::before,
.context-dark .button-default-outline.button-anis::before,
.bg-gray-darker .button-default-outline.button-anis::before,
.bg-primary .button-default-outline.button-anis::before,
.breadcrumbs-custom .button-default-outline.button-anis::after,
.context-dark .button-default-outline.button-anis::after,
.bg-gray-darker .button-default-outline.button-anis::after,
.bg-primary .button-default-outline.button-anis::after {
  background: #ffffff;
}

.breadcrumbs-custom .rights,
.context-dark .rights,
.bg-gray-darker .rights,
.bg-primary .rights {
  color: #575757;
}

.breadcrumbs-custom .rights a:hover,
.context-dark .rights a:hover,
.bg-gray-darker .rights a:hover,
.bg-primary .rights a:hover {
  color: #ffffff;
}

.breadcrumbs-custom .countdown-section,
.context-dark .countdown-section,
.bg-gray-darker .countdown-section,
.bg-primary .countdown-section {
  border-color: #ffffff;
}

.breadcrumbs-custom .countdown-amount,
.context-dark .countdown-amount,
.bg-gray-darker .countdown-amount,
.bg-primary .countdown-amount {
  color: #ffffff;
}

.context-light {
  color: #9b9b9c;
}

.context-light h1,
.context-light h2,
.context-light h3,
.context-light h4,
.context-light h5,
.context-light h6,
.context-light .heading-1,
.context-light .heading-2,
.context-light .heading-3,
.context-light .heading-4,
.context-light .heading-5,
.context-light .heading-6 {
  color: #151515;
}

/*
* Light Backgrounds
*/
.bg-white {
  background-color: #ffffff;
}

.bg-white[class*="section-"] + .bg-white[class*="section-"] {
  padding-top: 0;
}

.bg-gray-lighter {
  background-color: #f2f3f8;
}

.bg-gray-lighter[class*="section-"] + .bg-gray-lighter[class*="section-"] {
  padding-top: 0;
}

.bg-gray-lighter .comment-group .comment-group .comment__image-wrap {
  border-color: #ffffff;
}

.bg-gray-lighter .post-boxed:not(:hover) {
  box-shadow: 0;
}

.bg-gray-lighter .post-creative__main {
  background: #ffffff;
}

/*
* Dark Backgrounds
*/
.bg-gray-darker {
  background-color: #2d2d2d;
}

.bg-gray-darker[class*="section-"] + .bg-gray-darker[class*="section-"] {
  padding-top: 0;
}

/*
* Primary Backgrounds
*/
.bg-primary {
  background-color: red;
}

.bg-primary[class*="section-"] + .bg-primary[class*="section-"] {
  padding-top: 0;
}

.bg-primary .range-custom-bordered [class*="cell-"] {
  border-color: #07b094;
}

.bg-primary .form-wrap.has-error .form-input {
  border-bottom-color: #ffffff;
}

.bg-primary .form-validation {
  color: #ffffff;
}

.bg-primary .button-primary-outline,
.bg-primary .button-primary-outline:focus {
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
}

.bg-primary .button-primary-outline:hover,
.bg-primary .button-primary-outline:active {
  color: green;
  background-color: #ffffff;
  border-color: #ffffff;
}

.bg-primary .button-primary-outline.button-ujarak:hover {
  background-color: transparent;
}

.bg-primary .button-primary-outline.button-ujarak::before {
  background: #ffffff;
}

.bg-primary .button-primary-outline.button-anis:hover {
  background-color: transparent;
}

.bg-primary .button-primary-outline.button-anis::before,
.bg-primary .button-primary-outline.button-anis::after {
  background: #ffffff;
}

/**
* Background Image
*/
.bg-image {
  background-size: cover;
  background-position: center center;
}

.bg-image-dark {
  color: #ffffff;
}

.bg-image-dark h1,
.bg-image-dark h2,
.bg-image-dark h3,
.bg-image-dark h4,
.bg-image-dark h5,
.bg-image-dark h6,
.bg-image-dark .heading-1,
.bg-image-dark .heading-2,
.bg-image-dark .heading-3,
.bg-image-dark .heading-4,
.bg-image-dark .heading-5,
.bg-image-dark .heading-6 {
  color: #ffffff;
}

.bg-image-dark .brand__slogan {
  color: #ffffff;
}

.bg-image-dark .text-decoration-2 span::before,
.bg-image-dark .text-decoration-2 span::after {
  border-bottom-color: #ffffff;
}

.bg-image-dark .range-custom-bordered [class*="cell-"] {
  border-color: rgba(255, 255, 255, 0.4);
}

.bg-image-dark .box-counter {
  color: #ffffff;
}

.bg-image-dark .box-bordered {
  border-color: rgba(255, 255, 255, 0.52);
}

.bg-image-dark .box-award__divider::before {
  background: #ffffff;
}

.bg-image-dark .box-award__time {
  color: #ffffff;
}

.bg-image-dark .form-label,
.bg-image-dark .form-label-outside,
.bg-image-dark .form-input {
  color: #ffffff;
}

.bg-image-dark .form-input {
  border-color: rgba(255, 255, 255, 0.4);
}

.bg-image-dark .form_inline .form-wrap::before {
  border-color: rgba(255, 255, 255, 0.4);
}

.bg-image-dark .form_inline .form-wrap.has-error::before {
  border-color: #f5543f;
}

.bg-image-dark .divider-small::before {
  background: #ffffff;
}

.bg-image-dark .divider-small.divider-primary::before {
  background: red;
}

.bg-image-dark .button.button-link {
  color: #ffffff;
}

.bg-image-dark .button.button-link:hover {
  color: red;
}

.bg-image-dark .button-default,
.bg-image-dark .button-default:focus {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.bg-image-dark .button-default:hover,
.bg-image-dark .button-default:active {
  color: #ffffff;
  background-color: red;
  border-color: red;
}

.bg-image-dark .button-default.button-ujarak:hover {
  background-color: #ffffff;
}

.bg-image-dark .button-default.button-ujarak::before {
  background: red;
}

.bg-image-dark .button-default.button-anis:hover {
  background-color: #ffffff;
}

.bg-image-dark .button-default.button-anis::before,
.bg-image-dark .button-default.button-anis::after {
  background: red;
}

.bg-image-dark .button-primary,
.bg-image-dark .button-primary:focus {
  color: #ffffff;
  background-color: red;
  border-color: red;
}

.bg-image-dark .button-primary:hover,
.bg-image-dark .button-primary:active {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.bg-image-dark .button-primary.button-ujarak:hover {
  background-color: red;
}

.bg-image-dark .button-primary.button-ujarak::before {
  background: #ffffff;
}

.bg-image-dark .button-primary.button-anis:hover {
  background-color: red;
}

.bg-image-dark .button-primary.button-anis::before,
.bg-image-dark .button-primary.button-anis::after {
  background: #ffffff;
}

.bg-image-dark .button-primary-outline,
.bg-image-dark .button-primary-outline:focus {
  color: green;
  background-color: transparent;
  border-color: green;
}

.bg-image-dark .button-primary-outline:hover,
.bg-image-dark .button-primary-outline:active {
  color: green;
  background-color: #ffffff;
  border-color: #ffffff;
}

.bg-image-dark .button-primary-outline.button-ujarak:hover {
  background-color: transparent;
}

.bg-image-dark .button-primary-outline.button-ujarak::before {
  background: #ffffff;
}

.bg-image-dark .button-primary-outline.button-anis:hover {
  background-color: transparent;
}

.bg-image-dark .button-primary-outline.button-anis::before,
.bg-image-dark .button-primary-outline.button-anis::after {
  background: #ffffff;
}

.bg-image-dark .button-default-outline,
.bg-image-dark .button-default-outline:focus {
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
}

.bg-image-dark .button-default-outline:hover,
.bg-image-dark .button-default-outline:active {
  color: red;
  background-color: #ffffff;
  border-color: #ffffff;
}

.bg-image-dark .button-default-outline.button-ujarak:hover {
  background-color: transparent;
}

.bg-image-dark .button-default-outline.button-ujarak::before {
  background: #ffffff;
}

.bg-image-dark .button-default-outline.button-anis:hover {
  background-color: transparent;
}

.bg-image-dark .button-default-outline.button-anis::before,
.bg-image-dark .button-default-outline.button-anis::after {
  background: #ffffff;
}

.bg-image-dark .rights {
  color: #575757;
}

.bg-image-dark .rights a:hover {
  color: #ffffff;
}

.bg-image-dark .countdown-section {
  border-color: #ffffff;
}

.bg-image-dark .countdown-amount {
  color: #ffffff;
}

.bg-image-dark .rights {
  color: rgba(255, 255, 255, 0.3);
}

@media (min-width: 992px) {
  html:not(.tablet):not(.mobile) .bg-fixed {
    background-attachment: fixed;
  }
}

.section-xs {
  padding: 25px 0;
}

.section-sm,
.section-md,
.section-lg,
.section-xl,
.section-xxl,
.section-variant-1,
.section-variant-2 {
  padding: 50px 0;
}

.section-collapse + .section-collapse {
  padding-top: 0;
}

.section-fullheight__inner {
  position: relative;
  padding: 60px 0 140px;
}

.section-fullheight .shell {
  position: relative;
}

.section-fullheight .section-link {
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
}

html [class*="section-"].section-bottom-0 {
  padding-bottom: 0;
}

@media (max-width: 767px) {
  section.section-sm:first-of-type,
  section.section-md:first-of-type,
  section.section-lg:first-of-type,
  section.section-xl:first-of-type,
  section.section-xxl:first-of-type {
    padding-top: 40px;
  }
}

@media (max-width: 767px) {
  .section_responsive {
    padding: 30px 0;
  }
}

@media (min-width: 768px) {
  .section-md {
    padding: 70px 0;
  }
  .section-lg {
    padding: 80px 0;
  }
  .section-xxl {
    padding: 115px 0;
  }
  .section-variant-1 {
    padding: 70px 0 50px;
  }
  .section-variant-2 {
    padding: 40px 0 50px;
  }
  .section-fullheight__inner {
    padding-bottom: 160px;
  }
}

@media (min-width: 992px) {
  .section-sm {
    padding: 80px 0;
  }
  .section-md {
    padding: 95px 0;
  }
  .section-lg {
    padding: 100px 0;
  }
  .section-xxl {
    padding: 110px 0 120px;
  }
  .section-variant-1 {
    padding: 95px 0 75px;
  }
  .section-variant-2 {
    padding: 60px 0 70px;
  }
}

@media (min-width: 1200px) {
  #page-divided .section-fullheight__inner {
    padding-top: 60px;
    padding-bottom: 160px;
  }
}

@media (min-width: 1200px) and (max-height: 1200px) {
  #page-divided .section-fullheight__inner {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: calc(100vh - 100px);
  }
  #page-divided .section-fullheight__inner > * {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1200px) and (min-height: 800px) {
  .section-lg {
    padding: 115px 0;
  }
  .section-xxl {
    padding: 200px 0 220px;
  }
  #page-divided .section-fullheight__inner {
    padding-top: 100px;
    padding-bottom: 200px;
  }
}

.section-single {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: center;
}

.section-single p {
  margin-left: auto;
  margin-right: auto;
}

.section-single * + .rights {
  margin-top: 35px;
}

.section-single * + .countdown-wrap {
  margin-top: 35px;
}

.section-single .countdown-wrap + * {
  margin-top: 35px;
}

@media (min-width: 992px) {
  .section-single * + .rights {
    margin-top: 60px;
  }
  .section-single .countdown-wrap + * {
    margin-top: 35px;
  }
}

.section-single .rd-mailform_inline {
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-single * + .rd-mailform {
  margin-top: 20px;
}

.section-single__header {
  padding: calc(1em + 3vh) 0 calc(1em + 2vh);
}

.section-single__main {
  padding: calc(1em + 4vh) 0;
}

.section-single__footer {
  padding: calc(1em + 2vh) 0 calc(1em + 3vh);
}

.section-single__inner {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
}

.section-single_center .section-single__inner {
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.section-single__inner > * {
  width: 100%;
}

@supports (display: grid) {
  .section-single__inner {
    display: grid;
    justify-items: center;
    align-content: space-between;
    grid-template-columns: 1fr;
  }
  .section-single_center .section-single__inner {
    align-content: center;
  }
}

.ie-10 .section-single,
.ie-11 .section-single {
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.ie-10 .section-single > *,
.ie-11 .section-single > * {
  vertical-align: middle;
  white-space: normal;
}

.section-layout-1 .section-layout-aside > * {
  margin-top: 15px;
  width: 100%;
}

@media (max-width: 767px) {
  .section-layout-1 .section-layout-aside > * {
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 768px) {
  .section-layout-1 .section-layout-aside {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding-left: 8px;
    padding-right: 8px;
  }
  .section-layout-1 .section-layout-aside > * {
    margin-top: 15px;
    width: 33.33333%;
    padding-left: 7px;
    padding-right: 7px;
  }
}

@media (min-width: 1200px) {
  .section-layout-1 {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .section-layout-1 .section-layout-main {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    width: 72%;
    transform: skew(10deg);
    transform-origin: 0 100%;
  }
  .section-layout-1 .section-layout-main > * {
    width: 100%;
    margin-top: 0;
    transform: skew(-10deg);
    transform-origin: 100% 100%;
  }
  .section-layout-1 .section-layout-aside {
    position: relative;
    z-index: 2;
    overflow: hidden;
    width: 35%;
    padding: 0 0 0 0;
    margin-left: 35px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    transform: skew(10deg);
    transform-origin: 100% 100%;
  }
  .section-layout-1 .section-layout-aside > * {
    margin-top: 35px;
  }
  .section-layout-1 .section-layout-aside > *:nth-child(1) {
    width: 100%;
    margin-top: 0;
  }
  .section-layout-1 .section-layout-aside > *:nth-child(2) {
    width: 90%;
  }
  .section-layout-1 .section-layout-aside > *:nth-child(3) {
    width: 80%;
  }
  .section-layout-1 .section-layout-aside > *:last-child {
    margin-bottom: 0;
  }
  .section-layout-1 .section-layout-aside__item {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    transform: skew(-10deg);
    transform-origin: 0 0;
    width: 100%;
    padding: 0;
    opacity: 0.99;
  }
  .section-layout-1 .section-layout-aside__item > * {
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1600px) {
  .section-layout-1 .section-layout-main {
    width: 76%;
  }
  .section-layout-1 .section-layout-aside {
    width: 32%;
  }
}

.section-banner {
  display: block;
  background-position: center right;
  background-size: cover;
  text-align: center;
}

.section-banner img {
  max-width: 100%;
  height: auto;
}

/*
*
* Offsets
* --------------------------------------------------
*/
* + p {
  margin-top: 14px;
}

p + p {
  margin-top: 20px;
}

img + p {
  margin-top: 20px;
}

h5 + img,
.heading-5 + img {
  margin-top: 30px;
}

* + .big {
  margin-top: 25px;
}

* + .button {
  margin-top: 30px;
}

* + .range {
  margin-top: 40px;
}

* + .rights {
  margin-top: 25px;
}

* + .text-block {
  margin-top: 30px;
}

* + .text-decoration-lines {
  margin-top: 30px;
}

* + .divider-small {
  margin-top: 20px;
}

* + .divider-medium {
  margin-top: 20px;
}

* + .divider-modern {
  margin-top: 17px;
}

* + .list-md {
  margin-top: 30px;
}

* + .list-terms {
  margin-top: 25px;
}

* + .list-ordered {
  margin-top: 15px;
}

* + .list-marked {
  margin-top: 15px;
}

* + .list-linked {
  margin-top: 20px;
}

* + .list-terms-inline {
  margin-top: 0;
}

* + .list-nav {
  margin-top: 20px;
}

* + .list-icons {
  margin-top: 22px;
}

* + .list-2-columns {
  margin-top: 30px;
}

* + .list-decorated {
  margin-top: 30px;
}

* + .privacy-link {
  margin-top: 30px;
}

* + .figure-light {
  margin-top: 25px;
}

* + .group {
  margin-top: 30px;
}

* + .group-sm {
  margin-top: 30px;
}

* + .group-md {
  margin-top: 30px;
}

* + .group-lg {
  margin-top: 30px;
}

* + .group-xl {
  margin-top: 35px;
}

* + .rd-mailform {
  margin-top: 30px;
}

* + .rd-mailform.rd-mailform_sm {
  margin-top: 15px;
}

* + .rd-mailform.form_centered {
  margin-top: 20px;
}

* + .rd-mailform.form_inline {
  margin-top: 35px;
}

* + .quote-primary {
  margin-top: 30px;
}

* + .quote-minimal {
  margin-top: 12px;
}

* + .quote-line {
  margin-top: 30px;
}

* + .quote-big {
  margin-top: 25px;
}

* + .box-info {
  margin-top: 23px;
}

* + .owl-carousel {
  margin-top: 30px;
}

.quote-line + * {
  margin-top: 20px;
}

.divider-modern + * {
  margin-top: 19px;
}

.divider-small + p {
  margin-top: 30px;
}

.divider + p {
  margin-top: 20px;
}

.box-info + p {
  margin-top: 15px;
}

* + h2,
* + .heading-2 {
  margin-top: 16px;
}

* + h4,
* + .heading-4 {
  margin-top: 22px;
}

h4 + p,
.heading-4 + p {
  margin-top: 25px;
}

h2 + p,
.heading-2 + p {
  margin-top: 14px;
}

h2 + h4,
.heading-2 + h4,
h2 + .heading-4,
.heading-2 + .heading-4 {
  margin-top: 10px;
}

h2 + h1,
.heading-2 + h1,
h2 + .heading-1,
.heading-2 + .heading-1 {
  margin-top: 20px;
}

h4 + h5,
.heading-4 + h5,
h4 + .heading-5,
.heading-4 + .heading-5 {
  margin-top: 0;
}

.range + .range {
  margin-top: 40px;
}

.shell + .shell {
  margin-top: 45px;
}

.shell-wide + .shell-fluid {
  margin-top: 40px;
}

.shell + .owl-carousel {
  margin-top: 30px;
}

.quote-big + .divider {
  margin-top: 18px;
}

@media (min-width: 768px) {
  * + .button {
    margin-top: 35px;
  }
  * + .list-terms {
    margin-top: 40px;
  }
  * + .list-decorated {
    margin-top: 40px;
  }
  * + .quote-primary {
    margin-top: 40px;
  }
  * + .quote-line {
    margin-top: 45px;
  }
  * + .quote-big {
    margin-top: 35px;
  }
  * + .group {
    margin-top: 40px;
  }
  * + .group-sm {
    margin-top: 45px;
  }
  * + .group-lg {
    margin-top: 40px;
  }
  * + .rd-mailform {
    margin-top: 45px;
  }
  * + .object-decorated {
    margin-top: 30px;
  }
  * + .owl-carousel {
    margin-top: 40px;
  }
  .quote-line + * {
    margin-top: 45px;
  }
  h2 + p,
  .heading-2 + p {
    margin-top: 20px;
  }
  * + h4,
  * + .heading-4 {
    margin-top: 32px;
  }
  .divider + p {
    margin-top: 30px;
  }
  .box-info + p {
    margin-top: 32px;
  }
  .shell + .owl-carousel {
    margin-top: 50px;
  }
  .quote-big + .divider {
    margin-top: 26px;
  }
  .divider-medium + .quote-big {
    margin-top: 25px;
  }
  .shell + .shell {
    margin-top: 50px;
  }
  .page * + .offset-1 {
    margin-top: 45px;
  }
}

@media (min-width: 992px) {
  * + .button {
    margin-top: 42px;
  }
  * + .figure-light {
    margin-top: 40px;
  }
  h1 + .divider-medium,
  .heading-1 + .divider-medium {
    margin-top: 40px;
  }
  h2 + .range {
    margin-top: 35px;
  }
}

@media (min-width: 1200px) {
  * + .quote-line {
    margin-top: 65px;
  }
  * + h4,
  * + .heading-4 {
    margin-top: 50px;
  }
  .page * + .offset-2 {
    margin-top: 70px;
  }
}

.range-20 {
  position: relative;
  transform: translateY(-20px);
  margin-bottom: -20px;
  pointer-events: none;
}

.range-20 > *:before {
  content: "";
  display: table;
  width: 0;
}

.range-20 > * {
  margin-top: 20px;
  pointer-events: auto;
}

.range-30 {
  position: relative;
  transform: translateY(-30px);
  margin-bottom: -30px;
  pointer-events: none;
}

.range-30 > *:before {
  content: "";
  display: table;
  width: 0;
}

.range-30 > * {
  margin-top: 30px;
  pointer-events: auto;
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

.range-90 {
  position: relative;
  transform: translateY(-45px);
  margin-bottom: -45px;
  pointer-events: none;
}

.range-90 > *:before {
  content: "";
  display: table;
  width: 0;
}

.range-90 > * {
  margin-top: 45px;
  pointer-events: auto;
}

@media (min-width: 768px) {
  .range-50 {
    transform: translateY(-50px);
    margin-bottom: -50px;
  }
  .range-50 > * {
    margin-top: 50px;
  }
  .range-90 {
    transform: translateY(-75px);
    margin-bottom: -75px;
  }
  .range-90 > * {
    margin-top: 75px;
  }
  .range-sm-0 {
    transform: translateY(0);
    margin-bottom: 0;
  }
  .range-sm-0 > * {
    margin-top: 0;
  }
  .isotope + .pagination-custom {
    margin-top: 50px;
  }
}

@media (min-width: 992px) {
  .range-md-30 {
    transform: translateY(-30px);
    margin-bottom: -30px;
  }
  .range-md-30 > * {
    margin-top: 30px;
  }
}

@media (min-width: 1200px) {
  .range-90 {
    transform: translateY(-90px);
    margin-bottom: -90px;
  }
  .range-90 > * {
    margin-top: 90px;
  }
}

/*
*
* Layouts
*
*/
/*
* Footer Centered
*/
.footer-centered {
  padding: 40px 0;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-centered {
    padding: 75px 0 50px;
  }
}

/**
* Footer Minimal
*/
.footer-minimal {
  text-align: center;
}

/**
* Layout bordered
*/
.layout-columns > * + * {
  margin-top: 50px;
}

.layout-columns__main {
  padding: 30px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.19);
}

.layout-columns__aside {
  color: #151515;
  text-align: left;
}

.layout-columns__aside a:not(.icon),
.layout-columns__aside a:not(.icon):active,
.layout-columns__aside a:not(.icon):focus {
  color: #151515;
}

.layout-columns__aside a:not(.icon):hover {
  color: red;
}

.layout-columns__aside-item {
  padding: 15px 0;
}

.layout-columns__aside-item h1,
.layout-columns__aside-item h2,
.layout-columns__aside-item h3,
.layout-columns__aside-item h4,
.layout-columns__aside-item h5,
.layout-columns__aside-item h6,
.layout-columns__aside-item .heading-1,
.layout-columns__aside-item .heading-2,
.layout-columns__aside-item .heading-3,
.layout-columns__aside-item .heading-4,
.layout-columns__aside-item .heading-5,
.layout-columns__aside-item .heading-6 {
  text-transform: uppercase;
}

@media (min-width: 480px) {
  .layout-columns__aside-item {
    margin: 0 15px;
  }
}

* + .layout-columns {
  margin-top: 35px;
}

@media (min-width: 480px) and (max-width: 767px) {
  .layout-columns__aside {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .layout-columns__aside > * {
    width: 50%;
    margin: 0;
    padding: 20px;
  }
}

@media (min-width: 768px) {
  .layout-columns {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .layout-columns > * + * {
    margin-top: 0;
  }
  .layout-columns__main {
    width: 58.7%;
    padding: 45px 40px 50px;
  }
  .layout-columns__main-inner {
    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
  }
  .layout-columns__aside {
    width: 41.3%;
  }
  .layout-columns__aside-item {
    padding: 22px 0;
    margin: 0 30px;
  }
  .layout-columns__aside-item:first-child {
    padding-top: 0;
  }
  .layout-columns__aside-item:last-child {
    padding-bottom: 0;
  }
  * + .layout-columns {
    margin-top: 65px;
  }
}

@media (min-width: 992px) {
  .layout-columns__aside {
    padding-left: 40px;
  }
  .layout-columns__aside-item {
    padding: 26px 0;
  }
}

@media (min-width: 1200px) {
  .layout-columns__aside {
    padding-left: 75px;
  }
}

.height-fill {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.height-fill > * {
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.object-inline > * {
  display: inline-block;
  vertical-align: middle;
}

.object-inline > * + * {
  margin-left: 4px;
}

.oh {
  position: relative;
  overflow: hidden;
}

.text-decoration-lines {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.text-decoration-lines__content {
  position: relative;
  display: inline-block;
  min-width: 170px;
  font-size: 13px;
  text-transform: uppercase;
}

.text-decoration-lines__content:before,
.text-decoration-lines__content:after {
  content: "";
  position: absolute;
  height: 1px;
  background: #f5f5f5;
  top: 50%;
  width: 100vw;
}

.text-decoration-lines__content:before {
  left: 0;
  transform: translate(-100%, -50%);
}

.text-decoration-lines__content:after {
  right: 0;
  transform: translate(100%, -50%);
}

.text-decoration-1 {
  position: relative;
  padding-right: 15px;
  padding-left: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: #151515;
}

.text-decoration-1::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  display: inline-block;
  width: 39px;
  height: 3px;
  vertical-align: middle;
  background: red;
}

@media (min-width: 768px) {
  .text-decoration-2 span {
    position: relative;
    padding-left: 160px;
    padding-right: 160px;
  }
  .text-decoration-2 span::before,
  .text-decoration-2 span::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 135px;
    border-bottom: 2px solid #9b9b9b;
  }
  .text-decoration-2 span::before {
    left: 0;
  }
  .text-decoration-2 span::after {
    right: 0;
  }
}

span[class*="box-width"] {
  display: inline-block;
}

.box-width-1 {
  max-width: 625px;
}

.box-width-2 {
  max-width: 570px;
}

.box-width-3 {
  max-width: 470px;
}

.box-width-4 {
  max-width: 400px;
}

* + .box-width-2 {
  margin-top: 40px;
}

.box-centered {
  margin-left: auto;
  margin-right: auto;
}

[style*="z-index: 1000"] {
  z-index: 1100 !important;
}

.profile-inline {
  text-align: center;
}

.profile-inline__image {
  border-radius: 50%;
}

.profile-inline__subtitle {
  font-size: 13px;
  line-height: 1.4;
}

* + .profile-inline__title {
  margin-top: 10px;
}

* + .profile-inline__subtitle {
  margin-top: 5px;
}

@media (max-width: 767px) {
  .navigation-custom {
    position: relative;
    z-index: 10;
  }
  .navigation-custom .navigation-custom__toggle {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    color: #ffffff;
    background: red;
    box-shadow: none;
    border: 0;
  }
  .navigation-custom .navigation-custom__toggle::after {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    content: "\f107";
    font-family: "FontAwesome";
    font-size: 14px;
    transition: 0.22s;
    will-change: transform;
  }
  .navigation-custom .navigation-custom__toggle.active::after {
    transform: scale(1, -1);
  }
  .navigation-custom__content {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    padding: 20px;
    min-width: 240px;
    transform-origin: 50% 0;
    transform: translate3d(-50%, 100%, 0) scale(1, 0.9);
    border: 1px solid #f5f5f5;
    opacity: 0;
    visibility: hidden;
    background: #ffffff;
    transition: transform 0.32s cubic-bezier(1, 0.54, 0.15, 0.86),
      opacity 0.2s ease;
    text-align: left;
  }
  .navigation-custom__content.active {
    opacity: 1;
    visibility: visible;
    transform: translate3d(-50%, 100%, 0) scale(1, 1);
  }
  .navigation-custom__content .inline-list li {
    display: block;
    width: 100%;
  }
  .navigation-custom__content .inline-list li a {
    display: block;
    width: 100%;
    padding-bottom: 0;
  }
  .navigation-custom__content .inline-list li a::after {
    display: none;
  }
  .navigation-custom__content .inline-list li a:hover {
    color: red;
  }
  .navigation-custom__content .inline-list li a.active {
    color: red;
  }
}

@media (min-width: 768px) {
  .navigation-custom .navigation-custom__toggle {
    display: none;
  }
}

.page .media-controls {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 200px;
}

.page .media-controls .swiper-button-prev,
.page .media-controls .swiper-button-next,
.page .media-controls .swiper-pagination,
.page .media-controls button.jp-btn {
  position: relative;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.52);
  transition: 0.33s;
  text-align: center;
}

.page .media-controls .swiper-button-prev,
.page .media-controls .swiper-button-next {
  left: auto;
  right: auto;
  top: auto;
  transform: none;
}

.page .media-controls .swiper-button-prev::before,
.page .media-controls .swiper-button-next::before {
  display: none;
}

.page .media-controls .swiper-button-prev,
.page .media-controls .swiper-button-next,
.page .media-controls .jp-btn {
  font-size: 0;
  line-height: 0;
}

.page .media-controls .swiper-button-prev svg,
.page .media-controls .swiper-button-next svg,
.page .media-controls .jp-btn svg {
  stroke: rgba(255, 255, 255, 0.48);
  transition: 0.22s;
}

.page .media-controls .swiper-button-prev:hover,
.page .media-controls .swiper-button-next:hover,
.page .media-controls .jp-btn:hover {
  border-color: #ffffff;
}

.page .media-controls .swiper-button-prev:hover svg,
.page .media-controls .swiper-button-next:hover svg,
.page .media-controls .jp-btn:hover svg {
  stroke: #ffffff;
}

.page .media-controls .swiper-pagination-bullet {
  font-size: 19px;
  color: #ffffff;
}

.page .media-controls .media-audio {
  position: relative;
  z-index: 11;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.page .media-controls .media-audio .jp-audio {
  position: absolute;
  overflow: hidden;
  right: -20px;
  top: -10px;
  z-index: 1;
  background: #313131;
  padding: 10px 20px;
  border-radius: 35px;
  width: 435px;
  opacity: 0;
  pointer-events: none;
  transition: 0.42s;
}

.page .media-controls .media-audio .jp-audio > * {
  z-index: 21;
}

.page .media-controls .media-audio .jp-interface {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: auto;
  box-shadow: none;
  background: transparent;
}

.page .media-controls .media-audio .jp-main {
  width: 275px;
  padding-right: 70px;
  padding-left: 15px;
}

.page .media-controls .media-audio .jp-full-info {
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  white-space: nowrap;
  color: #ffffff;
  text-overflow: ellipsis;
}

.page .media-controls .media-audio .jp-no-solution {
  position: absolute;
  top: -14px;
  right: 0;
  width: 300px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  color: #2d2d2d;
  transform: translateY(-100%);
}

.page .media-controls .media-audio .jp-time-rail {
  width: 100%;
  padding: 0;
  height: auto;
}

.page .media-controls .media-audio .jp-time-rail,
.page .media-controls .media-audio .jp-time-rail * {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.page .media-controls .media-audio * + .jp-time-rail {
  margin-top: 7px;
}

.page .media-controls .media-audio .jp-progress {
  height: auto;
}

.page .media-controls .media-audio .jp-seek-bar {
  height: 5px;
  background: #484848;
}

.page .media-controls .media-audio .jp-play-bar {
  height: inherit;
  background: #767676;
}

.page .media-controls .media-audio .jp-playlist {
  opacity: 0;
  visibility: hidden;
  height: 0;
  width: 0;
  position: absolute;
}

.page .media-controls .media-audio .jp-btn {
  margin-left: 5px;
  margin-right: 5px;
}

.page .media-controls .media-audio .jp-btn svg {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

.ie-10 .page .media-controls .media-audio .jp-btn svg,
.ie-11 .page .media-controls .media-audio .jp-btn svg {
  margin-left: 0;
  margin-right: 0;
}

.page .media-controls .media-audio .jp-controls {
  padding: 0;
}

.page .media-controls .media-audio .jp-btn {
  float: none;
  font-size: 0;
}

.page .media-controls .media-audio .jp-btn::before {
  display: none;
}

.page .media-controls .media-audio .jp-mute > svg,
.page .media-controls .media-audio .jp-play > svg {
  position: absolute;
}

.page .media-controls .media-audio .jp-mute {
  z-index: 20;
  overflow: visible;
}

.page .media-controls .media-audio .jp-mute > svg {
  top: 11px;
  left: 11px;
}

.page .media-controls .media-audio .jp-mute .jp-svg-mute-on {
  opacity: 0;
}

.page .media-controls .media-audio .jp-mute .jp-svg-mute-off {
  opacity: 1;
}

.page .media-controls .media-audio .jp-mute:hover ~ .jp-audio {
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}

.page .media-controls .media-audio .jp-audio:hover {
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}

.page .media-controls .media-audio .jp-play .jp-svg-play {
  opacity: 1;
  top: 12px;
  left: 15px;
}

.page .media-controls .media-audio .jp-play .jp-svg-pause {
  opacity: 0;
  top: 13px;
  left: 16px;
}

.page .media-controls .media-audio.jp-state-muted .jp-mute .jp-svg-mute-on {
  opacity: 1;
}

.page .media-controls .media-audio.jp-state-muted .jp-mute .jp-svg-mute-off {
  opacity: 0;
}

.page .media-controls .media-audio.jp-state-playing .jp-play .jp-svg-play {
  opacity: 0;
}

.page .media-controls .media-audio.jp-state-playing .jp-play .jp-svg-pause {
  opacity: 1;
}

.page .media-controls > * {
  margin-left: 5px;
  margin-right: 5px;
}

@media (min-width: 768px) {
  .page .media-controls .swiper-pagination {
    background: rgba(255, 255, 255, 0);
  }
}

.custom-modal {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  pointer-events: none;
  height: 100%;
  overflow-y: auto;
}

.custom-modal .modal-dialog {
  padding: 10px;
  margin: 0;
}

.custom-modal .modal-inner {
  position: relative;
  padding: 40px 30px 30px 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  max-width: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 23px 0px rgba(0, 0, 0, 0.15);
}

.custom-modal .modal-header,
.custom-modal .modal-body {
  padding: 0;
}

.custom-modal .modal-header {
  border: 0;
  text-align: center;
}

.custom-modal .modal-content {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0;
  box-shadow: none;
  border: 0;
}

.custom-modal .modal-title {
  line-height: 1.3;
  font-weight: 700;
  color: #151515;
}

.page .custom-modal .group {
  transform: translateY(-10px);
  margin-bottom: -10px;
  margin-left: -30px;
  color: #151515;
}

.page .custom-modal .group > * {
  display: inline-block;
  margin-top: 10px;
  margin-left: 30px;
}

.custom-modal button.close {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #9b9b9b;
  opacity: 1;
  transition: 0.33s;
}

.custom-modal button.close .icon {
  font-size: 22px;
}

.custom-modal button.close:hover {
  color: #151515;
}

.custom-modal * + .group {
  margin-top: 25px;
}

.custom-modal * + .modal-body {
  margin-top: 30px;
}

.custom-modal.in {
  pointer-events: auto;
}

@media (min-width: 768px) {
  .custom-modal .modal-inner {
    padding: 70px 30px;
    width: 630px;
  }
  .custom-modal * + .modal-body {
    margin-top: 60px;
  }
}

.modal-backdrop {
  opacity: 0.29;
}

.row-condensed {
  margin-left: 0;
  margin-right: 0;
}

.row-condensed > [class*="col"] {
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 1199px) {
  .row-gutter-custom {
    margin-left: -8px;
    margin-right: -8px;
  }
  .row-gutter-custom > [class*="col"] {
    padding-left: 8px;
    padding-right: 8px;
  }
}

.grid-demonstration {
  padding: 12px 8px;
  letter-spacing: 0;
  text-align: left;
}

.grid-demonstration h4,
.grid-demonstration .heading-4 {
  font-weight: 700;
}

@media (max-width: 991px) {
  .grid-demonstration h4,
  .grid-demonstration .heading-4 {
    font-size: 14px;
  }
}

@media (max-width: 1199px) {
  .grid-demonstration p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (max-width: 767px) {
  .container-fullwidth.grid-demonstration .row {
    margin-left: 0;
    margin-right: 0;
  }
}

.container-fullwidth.grid-demonstration [class*="col"] {
  padding: 5px;
}

@media (max-width: 767px) {
  .container-fullwidth.grid-demonstration [class*="col"] p {
    font-size: 14px;
  }
  .container-fullwidth.grid-demonstration [class*="col"] * + p {
    margin-top: 10px;
  }
}

@media (min-width: 768px) {
  .container-fullwidth.grid-demonstration [class*="col"] {
    padding: 15px 10px;
  }
}

@media (min-width: 992px) {
  .container-fullwidth.grid-demonstration [class*="col"] {
    padding: 25px 15px;
  }
}

@media (min-width: 1200px) {
  .container-fullwidth.grid-demonstration [class*="col"] {
    padding: 30px 15px 30px 30px;
  }
}

@media (min-width: 1800px) {
  .container-fullwidth.grid-demonstration [class*="col"] {
    padding: 50px 100px;
  }
  .container-fullwidth.grid-demonstration [class*="col"] * + p {
    margin-top: 24px;
  }
}

@media (min-width: 1800px) {
  .container-fullwidth.grid-demonstration .row {
    margin-left: -70px;
    margin-right: -70px;
  }
}

.grid-system-bordered [class*="col"] {
  padding-top: 15px;
  padding-bottom: 15px;
}

.grid-system-bordered .row {
  border-bottom: 1px solid #f5f5f5;
}

@media (min-width: 768px) {
  .grid-system-bordered [class*="col"] {
    padding-top: 25px;
    padding-bottom: 25px;
  }
}

@media (min-width: 1200px) {
  .grid-system-bordered [class*="col"] {
    padding-top: 45px;
    padding-bottom: 45px;
  }
}

.grid-system-outline .row {
  border: 1px solid #f5f5f5;
  border-width: 1px 1px 0 1px;
}

.grid-system-outline .row:last-child {
  border-bottom-width: 1px;
}

.grid-system-outline [class*="col"]:not(:last-child) {
  border-right: 1px solid #f5f5f5;
  margin-right: -1px;
}

.grid-system-outline [class*="col"]:not(:first-child) {
  border-left: 1px solid #f5f5f5;
}

.grid-system-outline * + .row {
  margin-top: 45px;
}

.grid-system-outline .row + .row {
  margin-top: 0;
}

.range-custom-bordered [class*="cell"] {
  border: 0 solid #e8e8e8;
}

.range-custom-bordered [class*="cell"]:nth-child(n + 2) {
  border-width: 1px 0 0 0;
}

@media (min-width: 480px) {
  .range-custom-bordered .cell-xs-6:nth-child(odd) {
    border-width: 0 1px 0 0;
  }
  .range-custom-bordered .cell-xs-6:nth-child(n + 3) {
    border-top-width: 1px;
  }
}

@media (min-width: 768px) {
  .range-custom-bordered .cell-sm-3:nth-child(n) {
    border-width: 0;
  }
  .range-custom-bordered .cell-sm-3:first-child,
  .range-custom-bordered .cell-sm-3:nth-child(5n) {
    border-left-width: 1px;
  }
  .range-custom-bordered .cell-sm-3:nth-child(n + 1) {
    border-right-width: 1px;
  }
  .range-custom-bordered .cell-sm-3:nth-child(4n) {
    border-right-width: 1px;
  }
  .range-custom-bordered .cell-sm-3:nth-child(n + 5) {
    border-top-width: 1px;
  }
}

@media (min-width: 1200px) {
  .range-custom-bordered .box-counter {
    padding: 30px 20px 40px;
  }
}

.range-inner-bordered [class*="cell"] {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  padding: 15px;
  margin: 0;
  border: 0 solid #e8e8e8;
}

.range-inner-bordered [class*="cell"] > * {
  width: 100%;
}

.range-inner-bordered [class*="cell"]:nth-child(n + 2) {
  border-width: 1px 0 0 0;
}

.range-inner-bordered .link-image {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 25px 15px;
}

@media (min-width: 480px) {
  .range-inner-bordered .cell-xs-6:nth-child(n) {
    border-width: 0;
  }
  .range-inner-bordered .cell-xs-6:nth-child(odd) {
    border-width: 0 1px 0 0;
  }
  .range-inner-bordered .cell-xs-6:nth-child(n + 3) {
    border-top-width: 1px;
  }
}

@media (min-width: 768px) {
  .range-inner-bordered .cell-sm-3:nth-child(n) {
    border-width: 0 0 0 1px;
  }
  .range-inner-bordered .cell-sm-3:nth-child(4n + 1) {
    border-width: 0;
  }
}

@media (min-width: 768px) {
  .range-inner-bordered .link-image {
    padding: 5px 15px;
  }
}

.grid-4 {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 370px;
}

.grid-4 > * {
  padding: 1px;
  width: 25%;
}

.range-custom-splitted {
  position: relative;
  position: relative;
  transform: translateY(-50px);
  margin-bottom: -50px;
  pointer-events: none;
}

.range-custom-splitted > *:before {
  content: "";
  display: table;
  width: 0;
}

.range-custom-splitted > * {
  margin-top: 50px;
  pointer-events: auto;
}

@media (max-width: 767px) {
  .range-custom-splitted [class*="cell"] + [class*="cell"] {
    position: relative;
  }
  .range-custom-splitted [class*="cell"] + [class*="cell"]::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -25px;
    width: 100%;
    border-top: 1px solid #dadada;
  }
}

@media (min-width: 992px) {
  .range-custom-splitted::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50px;
    bottom: 0;
    width: 1px;
    background: #dadada;
  }
}

.range-custom-layout {
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
}

.range-custom-layout > [class*="cell"] {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.range-custom-layout > [class*="cell"]:nth-child(odd) .box-award {
  background: #ebedf5;
}

.range-custom-layout > [class*="cell"]:nth-child(even) .box-award {
  background: #e4e6ef;
}

.range-custom-layout .box-award {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 30px;
  width: 100%;
}

.range-custom-layout .box-award .box-award__title,
.range-custom-layout .box-award .box-award__time {
  color: #a9abb5;
}

.range-custom-layout .box-award .box-award__divider::before {
  background: #a9abb5;
}

@media (min-width: 480px) and (max-width: 991px), (min-width: 1800px) {
  .range-custom-layout > [class*="cell"]:nth-child(4n + 1) .box-award,
  .range-custom-layout > [class*="cell"]:nth-child(4n + 4) .box-award {
    background: #ebedf5;
  }
  .range-custom-layout > [class*="cell"]:nth-child(4n + 2) .box-award,
  .range-custom-layout > [class*="cell"]:nth-child(3n) .box-award {
    background: #e4e6ef;
  }
}

/*
*
* Modules
* ==================================================
*/
/*
*
* Flex Grid system
* --------------------------------------------------
*/
.shell,
.shell-wide,
.shell-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.shell,
.shell-wide {
  min-width: 300px;
  max-width: 480px;
}

@media (min-width: 768px) {
  .shell,
  .shell-wide {
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .shell,
  .shell-wide {
    max-width: 970px;
  }
}

@media (min-width: 1200px) {
  .shell,
  .shell-wide {
    max-width: 1200px;
  }
}

@media (min-width: 1200px) {
  .shell-wide {
    max-width: 1800px;
  }
}

.shell-fluid {
  margin-top: -1px;
  margin-bottom: -1px;
}

@media (min-width: 1800px) {
  .shell-fluid {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.shell-condensed {
  padding-left: 0;
  padding-right: 0;
}

.rd-navbar-sidebar-linked .shell-sidebar-condensed {
  padding-left: 0;
  padding-right: 0;
}

.range {
  margin-left: -15px;
  margin-right: -15px;
}

.range > .range {
  margin-left: 0;
  margin-right: 0;
}

.range-center {
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.range-left {
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.range-right {
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.range-justify {
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.range-around {
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.range-top {
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.range-reverse {
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.range-middle {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.range-bottom {
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.range-spacer {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}

[class*="cell-"] {
  padding-left: 15px;
  padding-right: 15px;
}

html.lt-ie-10 .range-condensed,
.range-condensed {
  margin-left: 0;
  margin-right: 0;
}

html.lt-ie-10 .range-condensed > [class*="cell"],
.range-condensed > [class*="cell"] {
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 992px) {
  .shell.shell-smaller {
    max-width: 940px;
  }
}

@media (min-width: 1200px) {
  .shell.shell-smaller {
    max-width: 60vw;
  }
}

@media (min-width: 1800px) {
  .shell.shell-smaller {
    width: 50vw;
    max-width: 1100px;
  }
}

html.lt-ie-10 .range-narrow,
.range-narrow {
  margin-left: -5px;
  margin-right: -5px;
}

html.lt-ie-10 .range-narrow > [class*="cell"],
.range-narrow > [class*="cell"] {
  padding-left: 5px;
  padding-right: 5px;
}

html.lt-ie-10 .range-narrow > * + [class*="cell"],
.range-narrow > * + [class*="cell"] {
  padding-left: 5px;
  padding-right: 5px;
}

.range {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex: 0 1 auto;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.range > .range {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}

.range-vertical {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.range > [class*="cell"] {
  -ms-flex: 0 0 auto;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}

@media (min-width: 480px) {
  .range-xs-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-xs-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-xs-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-xs-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-xs-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-xs-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-xs {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-xs-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-xs-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-xs-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-xs-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-xs-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-xs-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-xs-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-xs-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-xs-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-xs-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-xs-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-xs-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-xs-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-xs-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-xs-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-xs-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-xs-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .range-sm-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-sm-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-sm-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-sm-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-sm-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-sm-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-sm {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-sm-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-sm-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-sm-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-sm-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-sm-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-sm-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-sm-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-sm-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-sm-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-sm-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-sm-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-sm-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-sm-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-sm-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-sm-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-sm-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-sm-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-sm-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .range-md-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-md-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-md-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-md-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-md-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-md-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-md {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-md-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-md-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-md-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-md-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-md-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-md-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-md-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-md-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-md-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-md-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-md-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-md-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-md-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-md-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-md-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-md-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-md-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-md-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .range-lg-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-lg-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-lg-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-lg-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-lg-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-lg-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-lg {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-lg-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-lg-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-lg-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-lg-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-lg-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-lg-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-lg-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-lg-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-lg-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-lg-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-lg-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-lg-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-lg-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-lg-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-lg-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-lg-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-lg-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-lg-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1600px) {
  .range-xl-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-xl-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-xl-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-xl-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-xl-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-xl-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-xl {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-xl-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-xl-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-xl-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-xl-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-xl-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-xl-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-xl-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-xl-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-xl-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-xl-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-xl-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-xl-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-xl-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-xl-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-xl-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-xl-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-xl-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-xl-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1800px) {
  .range-xxl-center {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .range-xxl-left {
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .range-xxl-right {
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .range-xxl-justify {
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .range-xxl-around {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .range-xxl-top {
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .range-xxl {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .range-xxl-reverse {
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .range-xxl-middle {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .range-xxl-bottom {
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .cell-xxl-top {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .cell-xxl-middle {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .cell-xxl-bottom {
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .range > .cell-xxl-1 {
    -webkit-flex-basis: 8.33333%;
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .range > .cell-xxl-2 {
    -webkit-flex-basis: 16.66667%;
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .range > .cell-xxl-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .range > .cell-xxl-4 {
    -webkit-flex-basis: 33.33333%;
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .range > .cell-xxl-5 {
    -webkit-flex-basis: 41.66667%;
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .range > .cell-xxl-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range > .cell-xxl-7 {
    -webkit-flex-basis: 58.33333%;
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .range > .cell-xxl-8 {
    -webkit-flex-basis: 66.66667%;
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .range > .cell-xxl-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .range > .cell-xxl-10 {
    -webkit-flex-basis: 83.33333%;
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .range > .cell-xxl-11 {
    -webkit-flex-basis: 91.66667%;
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .range > .cell-xxl-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 480px) {
  .range-ten > .cell-xs-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-xs-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-xs-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-xs-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-xs-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-xs-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-xs-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-xs-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-xs-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-xs-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .range-ten > .cell-sm-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-sm-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-sm-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-sm-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-sm-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-sm-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-sm-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-sm-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-sm-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-sm-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .range-ten > .cell-md-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-md-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-md-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-md-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-md-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-md-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-md-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-md-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-md-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-md-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .range-ten > .cell-lg-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-lg-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-lg-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-lg-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-lg-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-lg-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-lg-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-lg-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-lg-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-lg-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1600px) {
  .range-ten > .cell-xl-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-xl-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-xl-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-xl-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-xl-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-xl-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-xl-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-xl-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-xl-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-xl-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 1800px) {
  .range-ten > .cell-xxl-1 {
    -webkit-flex-basis: 10%;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    max-width: 10%;
  }
  .range-ten > .cell-xxl-2 {
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    max-width: 20%;
  }
  .range-ten > .cell-xxl-3 {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    max-width: 30%;
  }
  .range-ten > .cell-xxl-4 {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    max-width: 40%;
  }
  .range-ten > .cell-xxl-5 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .range-ten > .cell-xxl-6 {
    -webkit-flex-basis: 60%;
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%;
    max-width: 60%;
  }
  .range-ten > .cell-xxl-7 {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    max-width: 70%;
  }
  .range-ten > .cell-xxl-8 {
    -webkit-flex-basis: 80%;
    -ms-flex-preferred-size: 80%;
    flex-basis: 80%;
    max-width: 80%;
  }
  .range-ten > .cell-xxl-9 {
    -webkit-flex-basis: 90%;
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    max-width: 90%;
  }
  .range-ten > .cell-xxl-10 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

html.lt-ie-10 .range > .cell-xs-1 {
  margin-left: auto;
  margin-right: auto;
  max-width: 8.33333%;
}

html.lt-ie-10 .range > .cell-xs-2 {
  margin-left: auto;
  margin-right: auto;
  max-width: 16.66667%;
}

html.lt-ie-10 .range > .cell-xs-3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 25%;
}

html.lt-ie-10 .range > .cell-xs-4 {
  margin-left: auto;
  margin-right: auto;
  max-width: 33.33333%;
}

html.lt-ie-10 .range > .cell-xs-5 {
  margin-left: auto;
  margin-right: auto;
  max-width: 41.66667%;
}

html.lt-ie-10 .range > .cell-xs-6 {
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

html.lt-ie-10 .range > .cell-xs-7 {
  margin-left: auto;
  margin-right: auto;
  max-width: 58.33333%;
}

html.lt-ie-10 .range > .cell-xs-8 {
  margin-left: auto;
  margin-right: auto;
  max-width: 66.66667%;
}

html.lt-ie-10 .range > .cell-xs-9 {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

html.lt-ie-10 .range > .cell-xs-10 {
  margin-left: auto;
  margin-right: auto;
  max-width: 83.33333%;
}

html.lt-ie-10 .range > .cell-xs-11 {
  margin-left: auto;
  margin-right: auto;
  max-width: 91.66667%;
}

html.lt-ie-10 .range > .cell-xs-12 {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

html.lt-ie-10 .range > .cell-sm-1 {
  margin-left: auto;
  margin-right: auto;
  max-width: 8.33333%;
}

html.lt-ie-10 .range > .cell-sm-2 {
  margin-left: auto;
  margin-right: auto;
  max-width: 16.66667%;
}

html.lt-ie-10 .range > .cell-sm-3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 25%;
}

html.lt-ie-10 .range > .cell-sm-4 {
  margin-left: auto;
  margin-right: auto;
  max-width: 33.33333%;
}

html.lt-ie-10 .range > .cell-sm-5 {
  margin-left: auto;
  margin-right: auto;
  max-width: 41.66667%;
}

html.lt-ie-10 .range > .cell-sm-6 {
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

html.lt-ie-10 .range > .cell-sm-7 {
  margin-left: auto;
  margin-right: auto;
  max-width: 58.33333%;
}

html.lt-ie-10 .range > .cell-sm-8 {
  margin-left: auto;
  margin-right: auto;
  max-width: 66.66667%;
}

html.lt-ie-10 .range > .cell-sm-9 {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

html.lt-ie-10 .range > .cell-sm-10 {
  margin-left: auto;
  margin-right: auto;
  max-width: 83.33333%;
}

html.lt-ie-10 .range > .cell-sm-11 {
  margin-left: auto;
  margin-right: auto;
  max-width: 91.66667%;
}

html.lt-ie-10 .range > .cell-sm-12 {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

html.lt-ie-10 .range > .cell-md-1 {
  margin-left: auto;
  margin-right: auto;
  max-width: 8.33333%;
}

html.lt-ie-10 .range > .cell-md-2 {
  margin-left: auto;
  margin-right: auto;
  max-width: 16.66667%;
}

html.lt-ie-10 .range > .cell-md-3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 25%;
}

html.lt-ie-10 .range > .cell-md-4 {
  margin-left: auto;
  margin-right: auto;
  max-width: 33.33333%;
}

html.lt-ie-10 .range > .cell-md-5 {
  margin-left: auto;
  margin-right: auto;
  max-width: 41.66667%;
}

html.lt-ie-10 .range > .cell-md-6 {
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

html.lt-ie-10 .range > .cell-md-7 {
  margin-left: auto;
  margin-right: auto;
  max-width: 58.33333%;
}

html.lt-ie-10 .range > .cell-md-8 {
  margin-left: auto;
  margin-right: auto;
  max-width: 66.66667%;
}

html.lt-ie-10 .range > .cell-md-9 {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

html.lt-ie-10 .range > .cell-md-10 {
  margin-left: auto;
  margin-right: auto;
  max-width: 83.33333%;
}

html.lt-ie-10 .range > .cell-md-11 {
  margin-left: auto;
  margin-right: auto;
  max-width: 91.66667%;
}

html.lt-ie-10 .range > .cell-md-12 {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

html.lt-ie-10 .range > .cell-lg-1 {
  margin-left: auto;
  margin-right: auto;
  max-width: 8.33333%;
}

html.lt-ie-10 .range > .cell-lg-2 {
  margin-left: auto;
  margin-right: auto;
  max-width: 16.66667%;
}

html.lt-ie-10 .range > .cell-lg-3 {
  margin-left: auto;
  margin-right: auto;
  max-width: 25%;
}

html.lt-ie-10 .range > .cell-lg-4 {
  margin-left: auto;
  margin-right: auto;
  max-width: 33.33333%;
}

html.lt-ie-10 .range > .cell-lg-5 {
  margin-left: auto;
  margin-right: auto;
  max-width: 41.66667%;
}

html.lt-ie-10 .range > .cell-lg-6 {
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

html.lt-ie-10 .range > .cell-lg-7 {
  margin-left: auto;
  margin-right: auto;
  max-width: 58.33333%;
}

html.lt-ie-10 .range > .cell-lg-8 {
  margin-left: auto;
  margin-right: auto;
  max-width: 66.66667%;
}

html.lt-ie-10 .range > .cell-lg-9 {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

html.lt-ie-10 .range > .cell-lg-10 {
  margin-left: auto;
  margin-right: auto;
  max-width: 83.33333%;
}

html.lt-ie-10 .range > .cell-lg-11 {
  margin-left: auto;
  margin-right: auto;
  max-width: 91.66667%;
}

html.lt-ie-10 .range > .cell-lg-12 {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}
</style>