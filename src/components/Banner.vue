<template>
    <div class="main-banner">
        <figure class="figure__banner">
            <!-- <img :src="require(`${ruta_imagen}`)" alt="" class="img__banner"> -->
            <img :src="require(`@/${ruta_imagen}`)" alt="" class="img__banner">
        </figure>
    </div>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {
            ruta_imagen: this.imagen
        }
    },
    props:{
        imagen: null
    }
}
</script>

<style scoped>

.figure__banner{
    background: #282c34;
}

.img__banner{
    min-width: 100vw;
    max-width: 100vw;
    height: calc(100vh - 80px);
    object-fit: cover;
    object-position: center;
}

</style>