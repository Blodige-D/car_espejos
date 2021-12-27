<template>
  <div class="main-espejos">
    <carespejos :imagen="ruta_imagen" />
    <slider-1
      :imagenSlider1="data_Espejos"
      :EnunciadoSlider1="Enunciado_Espejos"
    />
    <listaproductos
      :imagenList="data_Espejos"
      :EnunciadoList="Enunciado_Espejos"
    />

    <slider-1
      :imagenSlider1="data_Farolas"
      :EnunciadoSlider1="Enunciado_Farolas"
    />
    <listaproductos
      :imagenList="data_Farolas"
      :EnunciadoList="Enunciado_Farolas"
    />

    <slider-1 :imagenSlider1="data_Stops" :EnunciadoSlider1="Enunciado_Stops" />
    <listaproductos :imagenList="data_Stops" :EnunciadoList="Enunciado_Stops" />

    <slider-1
      :imagenSlider1="data_Seguros"
      :EnunciadoSlider1="Enunciado_Seguros"
    />
    <listaproductos
      :imagenList="data_Seguros"
      :EnunciadoList="Enunciado_Seguros"
    />
  </div>
</template>

<script>
import Carespejos from "../components/Carespejos.vue";
import Listaproductos from "../components/Listaproductos.vue";
import Parallax from "../components/Parallax.vue";
import Slider1 from "../components/Slider1.vue";
import axios from "axios";

export default {
  components: { Carespejos, Slider1, Listaproductos, Parallax },
  data() {
    return {
      ruta_imagen: "assets/img/CarEspejos.png",
      data_Espejos: [],
      Enunciado_Espejos: [
        "Espejos",
        "Espejos Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "espejos",
      ],
      data_Farolas: [],
      Enunciado_Farolas: [
        "Farolas",
        "Farolas Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "farolas",
      ],
      data_Stops: [],
      Enunciado_Stops: [
        "STOPS",
        "Stops Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "stops",
      ],
      data_Seguros: [],
      Enunciado_Seguros: [
        "Seguros para Espejos",
        "Seguros de Espejos, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "segum",
      ],
    };
  },
  methods: {
    get_Espejos() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/espejos/")
        .then((result) => {
          this.data_Espejos = result.data;
        });
    },
    get_Farolas() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/farolas/")
        .then((result) => {
          this.data_Farolas = result.data;
        });
    },
    get_Stops() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/stops/")
        .then((result) => {
          this.data_Stops = result.data;
        });
    },
    get_Seguros() {
      axios
        .get("https://apicarespejos.herokuapp.com/data/segum/")
        .then((result) => {
          this.data_Seguros = result.data;
        });
    },
  },
  mounted() {
    this.get_Espejos();
    this.get_Farolas();
    this.get_Stops();
    this.get_Seguros();},
};
</script>

<style scoped>
</style>