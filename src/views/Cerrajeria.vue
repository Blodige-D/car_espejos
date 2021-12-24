<template>
  <div class="main-cerrajeria">
    <carespejos :imagen="ruta_imagen" />
    <parallax :imagenParallax="imagen_parallax" />

    <slider-1
      :imagenSlider1="imagen_Llaves"
      :EnunciadoSlider1="Enunciado_Llaves"
    />
    <listaproductos
      :imagenList="imagen_Llaves"
      :EnunciadoList="Enunciado_Llaves"
    />

    <slider-1
      :imagenSlider1="imagen_Manijas"
      :EnunciadoSlider1="Enunciado_Manijas"
    />
    <listaproductos
      :imagenList="imagen_Manijas"
      :EnunciadoList="Enunciado_Manijas"
    />

    <slider-1
      :imagenSlider1="imagen_Parabrisas"
      :EnunciadoSlider1="Enunciado_Parabrisas"
    />
    <listaproductos
      :imagenList="imagen_Parabrisas"
      :EnunciadoList="Enunciado_Parabrisas"
    />

    <slider-1
      :imagenSlider1="imagen_Direccionales"
      :EnunciadoSlider1="Enunciado_Direccionales"
    />
    <listaproductos
      :imagenList="imagen_Direccionales"
      :EnunciadoList="Enunciado_Direccionales"
    />
  </div>
</template>

<script>
import Carespejos from "../components/Carespejos.vue";
import Listaproductos from "../components/Listaproductos.vue";
import Slider1 from "../components/Slider1.vue";
import Parallax from "../components/Parallax.vue";
export default {
  components: { Carespejos, Slider1, Listaproductos, Parallax },
  data() {
    return {
      ruta_imagen: "assets/img/CarEspejos.png",
      imagen_parallax: "Banner_Cerrajeria",
      imagen_Llaves: [
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
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
      ],
      Enunciado_Llaves: [
        "Llaves Codificadas",
        "Llaves Codificadas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "llaves",
      ],
      imagen_Manijas: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      Enunciado_Manijas: [
        "Manijas",
        "Manijas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "manijas",
      ],
      imagen_Parabrisas: ["A", "B", "C", "D", "E"],
      Enunciado_Parabrisas: [
        "Parabrisas",
        "Parabrisas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "parabrisas",
      ],
      imagen_Direccionales: ["A", "B", "C", "D", "E", "F", "G", "H"],
      Enunciado_Direccionales: [
        "Direccionales",
        "Direccionales, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
        "direccionales",
      ],
    };
  },
};
</script>

<style scoped>
</style>