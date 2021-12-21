<template>
  <div class="main-espejos">
      <carespejos :imagen="ruta_imagen"/>
      <slider-1 :imagenSlider1="imagen_Espejos" :EnunciadoSlider1="Enunciado_Espejos"/>
      <listaproductos/>
      <slider-1 :imagenSlider1="imagen_Farolas" :EnunciadoSlider1="Enunciado_Farolas"/>
      <listaproductos/>
      <slider-1 :imagenSlider1="imagen_Stops" :EnunciadoSlider1="Enunciado_Stops"/>
      <listaproductos/>
  </div>
</template>

<script>
import Carespejos from '../components/Carespejos.vue'
import Listaproductos from '../components/Listaproductos.vue'
import Slider1 from '../components/Slider1.vue'


export default {
  components: { Carespejos, Slider1, Listaproductos },
  data() {
      return {
          ruta_imagen: "assets/img/CarEspejos.png",
          imagen_Espejos :[ 
                'A',
                'B', 
                'C', 
                'D', 
                'E',
                'F'
            ],
          Enunciado_Espejos:[
              'Espejos',
              'Espejos Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto',
              'Espejos_retrovisores'
          ],
          imagen_Farolas: [
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
            'P'
          ],
          Enunciado_Farolas:[
            'Farolas',
            'Farolas Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto',
            'farolas'
          ],
          imagen_Stops:[
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
            'M'
          ],
          Enunciado_Stops:[
            'STOPS',
            'Stops Retrovisores, Contactanos para todos los productos y servicios a tu orden, Para todo tipo de Carro, Camioneta, Deportivo o Moto',
            'stops'
          ]
      }
  },

}
</script>

<style scoped>

</style>