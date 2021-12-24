<template>
    <div class="main-inicio">
        <banner :imagen="ruta_imagen"/>
        <slider-2 :imagenSlider2="imagen_varias"/>
        <parallax :imagenParallax="imagen_parallax[0]"/>
        <slider-1 :imagenSlider1="imagen_Espejos" :EnunciadoSlider1="Enunciado_Espejos"/>
        <slider-1 :imagenSlider1="imagen_Direccionales" :EnunciadoSlider1="Enunciado_Direccionales"/>
        <parallax :imagenParallax="imagen_parallax[1]"/>
        <slider-1 :imagenSlider1="imagen_Llaves" :EnunciadoSlider1="Enunciado_Llaves"/>
        <servicios/>
        <mapa/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Parallax from '../components/Parallax.vue'
import Slider2 from '../components/Slider2.vue'
import Slider1 from '../components/Slider1.vue'
import Servicios from '../components/Servicios.vue'
import Mapa from '../components/Mapa.vue'

export default {
  components: { Banner, Slider2, Parallax, Slider1, Servicios, Mapa},
    data() {
        return {
            ruta_imagen:'assets/img/Banner.png',
            imagen_varias:[
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H'
            ],
            imagen_parallax:[
                'Banner_Espejos',
                'Banner_Cerrajeria'
            ],
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
            imagen_Direccionales:[
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H'
            ],
            Enunciado_Direccionales:[
                "Direccionales",
                "Direccionales, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
                "direccionales"
            ],
            imagen_Llaves:[
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W'
            ],
            Enunciado_Llaves:[
                "Llaves Codificadas",
                "Llaves Codificadas, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto",
                "llaves"
            ],
        }
    },
}
</script>

<style scoped>

</style>