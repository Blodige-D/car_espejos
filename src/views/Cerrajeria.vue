<template>
  <div class="main-cerrajeria">
    <carespejos :imagen="ruta_imagen" />

    <slider-1
      :imagenSlider1="data_Llaves"
      :EnunciadoSlider1="Enunciado_Llaves"
    />
    <listaproductos
      :imagenList="data_Llaves"
      :EnunciadoList="Enunciado_Llaves"
    />

    <slider-1
      :imagenSlider1="data_Manijas"
      :EnunciadoSlider1="Enunciado_Manijas"
    />
    <listaproductos
      :imagenList="data_Manijas"
      :EnunciadoList="Enunciado_Manijas"
    />

    <slider-1
      :imagenSlider1="data_Parabrisas"
      :EnunciadoSlider1="Enunciado_Parabrisas"
    />
    <listaproductos
      :imagenList="data_Parabrisas"
      :EnunciadoList="Enunciado_Parabrisas"
    />

    <slider-1
      :imagenSlider1="data_Direccionales"
      :EnunciadoSlider1="Enunciado_Direccionales"
    />
    <listaproductos
      :imagenList="data_Direccionales"
      :EnunciadoList="Enunciado_Direccionales"
    />
  </div>
</template>

<script>
import Carespejos from "../components/Carespejos.vue";
import Listaproductos from "../components/Listaproductos.vue";
import Slider1 from "../components/Slider1.vue";
import Parallax from "../components/Parallax.vue";
import axios from "axios";
export default {
  components: { Carespejos, Slider1, Listaproductos, Parallax },
  data() {
    return {
      ruta_imagen: "assets/img/CarEspejos.png",
      data_Llaves:[],
      Enunciado_Llaves: [
        "Llaves Codificadas",
        "Llaves Codificadas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "llaves",
      ],
      data_Manijas:[],
      Enunciado_Manijas: [
        "Manijas",
        "Manijas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "manijas",
      ],
      data_Parabrisas:[],
      Enunciado_Parabrisas: [
        "Parabrisas",
        "Parabrisas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "parabrisas",
      ],
      data_Direccionales:[],
      Enunciado_Direccionales: [
        "Direccionales",
        "Direccionales, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "direccionales",
      ],
    };
  },
  methods: {
    get_Llaves() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/llaves/")
        .then((result) => {
          this.data_Llaves = result.data;
        });
    },
    get_Manijas() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/manijas/")
        .then((result) => {
          this.data_Manijas = result.data;
        });
    },
    get_Parabrisas() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/parabrisas/")
        .then((result) => {
          this.data_Parabrisas = result.data;
        });
    },
    get_Direccionales() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/direccionales/")
        .then((result) => {
          this.data_Direccionales = result.data;
        });
    },
  },
  mounted() {
    this.get_Llaves();
    this.get_Manijas();
    this.get_Parabrisas();
    this.get_Direccionales();
  },
};
</script>

<style scoped>
</style>