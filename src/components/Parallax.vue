<template>
  <div class="main-parallax">
      <section class="parallax">
            <v-parallax
                height="300"
                :src="require(`@/assets/img/${imagen}.webp`)"
            ></v-parallax>
      </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imagen: this.imagenParallax
        }
    },
    props:{
        imagenParallax: null
    }
}
</script>

<style scoped>

</style>