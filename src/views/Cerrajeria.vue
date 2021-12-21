<template>
  <div class="main-cerrajeria">
      <carespejos :imagen="ruta_imagen"/>
  </div>
</template>

<script>
import Carespejos from '../components/Carespejos.vue'
export default {
    components: { Carespejos },
    data() {
        return {
            ruta_imagen: 'assets/img/CarEspejos.png'
        }
    },
    }
</script>

<style scoped>

</style>