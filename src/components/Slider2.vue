<template>
  <div class="main-slide2">
    <section class="seccion__slider2">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in imagenSlider2" :key="i">
          <v-sheet :imagenes="imagenSlider2[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <img
                class="slider__img"
                :src="require(`@/assets/img/variedades/${slide.fields.img}`)"
                alt="2"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: "Slider2",
  data() {
    return {
      model: null,
    };
  },
  props: {
    imagenSlider2: [],
  },
};
</script>

<style scoped>
.main-slide2 {
  margin: 80px 0;
  padding: 60px;
  box-shadow: 0 3px 100px rgb(0 0 0 / 0.2);
}
.slider__img {
  width: 700px;
  height: 400px;
  object-fit: cover;
}
</style>