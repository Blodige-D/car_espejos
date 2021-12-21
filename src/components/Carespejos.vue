<template>
    <div class="main-carespejos">
        <figure class="figure__carespejos">
            <img :src="require(`@/${ruta_imagen}`)" alt="" class="img_carespejos">
        </figure>
    </div>
  
</template>

<script>
export default {
    name: "Carespejos",
    data(){
        return{
            ruta_imagen: this.imagen
        }
    },
    props:{
        imagen:null
    }
}
</script>

<style scoped>
.figure__carespejos{
    background: #282c34;
    display: flex;
    justify-content: center;
}


</style>