<template>
  <div class="main-inicio">
    <banner :imagen="ruta_imagen" />
    <slider-2 :imagenSlider2="data_Varias" />
    <parallax :imagenParallax="imagen_parallax[0]" />
    <slider-1
      :imagenSlider1="data_Espejos"
      :EnunciadoSlider1="Enunciado_Espejos"
    />
    <slider-1
      :imagenSlider1="data_Direccionales"
      :EnunciadoSlider1="Enunciado_Direccionales"
    />
    <parallax :imagenParallax="imagen_parallax[1]" />
    <slider-1
      :imagenSlider1="data_Llaves"
      :EnunciadoSlider1="Enunciado_Llaves"
    />
    <servicios />
    <mapa />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Parallax from "../components/Parallax.vue";
import Slider2 from "../components/Slider2.vue";
import Slider1 from "../components/Slider1.vue";
import Servicios from "../components/Servicios.vue";
import Mapa from "../components/Mapa.vue";
import axios from "axios";
export default {
  components: { Banner, Slider2, Parallax, Slider1, Servicios, Mapa },
  data() {
    return {
      ruta_imagen: "assets/img/Banner.png",
      data_Varias: [],
      imagen_parallax: ["Banner_Espejos", "Banner_Cerrajeria"],
      data_Espejos: [],
      Enunciado_Espejos: [
        "Espejos",
        "Espejos Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "espejos",
      ],
      data_Direccionales: [],
      Enunciado_Direccionales: [
        "Direccionales",
        "Direccionales, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "direccionales",
      ],
      data_Llaves: [],
      Enunciado_Llaves: [
        "Llaves Codificadas",
        "Llaves Codificadas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "llaves",
      ],
    };
  },
  methods: {
    get_Varias() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/variedades/")
        .then((result) => {
          this.data_Varias = result.data;
        });
    },
    get_Espejos() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/espejos/")
        .then((result) => {
          this.data_Espejos = result.data;
        });
    },
    get_Direccionales() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/direccionales/")
        .then((result) => {
          this.data_Direccionales = result.data;
        });
    },
    get_Llaves() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/llaves/")
        .then((result) => {
          this.data_Llaves = result.data;
        });
    },
  },
  mounted() {
      this.get_Varias(),
      this.get_Espejos(),
      this.get_Direccionales(),
      this.get_Llaves();
  },
};
</script>

<style scoped>
</style>