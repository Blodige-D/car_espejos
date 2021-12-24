<template>
  <div class="main-espejos">
    <carespejos :imagen="ruta_imagen" />
    <slider-1
      :imagenSlider1="imagen_Espejos"
      :EnunciadoSlider1="Enunciado_Espejos"
    />
    <listaproductos
      :imagenList="imagen_Espejos"
      :EnunciadoList="Enunciado_Espejos"
    />

    <slider-1
      :imagenSlider1="imagen_Farolas"
      :EnunciadoSlider1="Enunciado_Farolas"
    />
    <listaproductos
      :imagenList="imagen_Farolas"
      :EnunciadoList="Enunciado_Farolas"
    />

    <slider-1
      :imagenSlider1="imagen_Stops"
      :EnunciadoSlider1="Enunciado_Stops"
    />
    <listaproductos
      :imagenList="imagen_Stops"
      :EnunciadoList="Enunciado_Stops"
    />

    <slider-1
      :imagenSlider1="imagen_Seguros"
      :EnunciadoSlider1="Enunciado_Seguros"
    />
    <listaproductos
      :imagenList="imagen_Seguros"
      :EnunciadoList="Enunciado_Seguros"
    />
  </div>
</template>

<script>
import Carespejos from "../components/Carespejos.vue";
import Listaproductos from "../components/Listaproductos.vue";
import Parallax from '../components/Parallax.vue';
import Slider1 from "../components/Slider1.vue";

export default {
  components: { Carespejos, Slider1, Listaproductos, Parallax },
  data() {
    return {
      ruta_imagen: "assets/img/CarEspejos.png",
      imagen_Espejos: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
      ],
      Enunciado_Espejos: [
        "Espejos",
        "Espejos Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "espejos"
      ],
      imagen_Farolas: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
      ],
      Enunciado_Farolas: [
        "Farolas",
        "Farolas Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "farolas",
      ],
      imagen_Stops: [
        "A",
        "stop1",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
      ],
      Enunciado_Stops: [
        "STOPS",
        "Stops Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "stops",
      ],
      imagen_Seguros: [
        'B',
        'A',
        'C',
        'D',
        'E',
        'F'
      ],
      Enunciado_Seguros: [
        "Seguros para Espejos",
        "Seguros de Espejos, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "segum",
      ],
    };
  },
};
</script>

<style scoped>
</style>