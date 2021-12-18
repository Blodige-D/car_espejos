<template>
    <div class="main-inicio">
        <banner :imagen="ruta_imagen"/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  components: { Banner },
    data() {
        return {
            ruta_imagen:'assets/img/Banner.png'
        }
    },
}
</script>

<style scoped>

</style>