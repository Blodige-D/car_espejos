<template>
    <div class="main-slider1">
        <section class="seccion__slider1">
            <div class="contenedor_texto">
                <h1>{{EnunciadoSlider1[0]}}</h1>
                <p>{{EnunciadoSlider1[1]}}</p>
            </div>
            <div class="contenedor_slider1">
                <v-sheet
                    class="mx-auto"
                    elevation="8"
                    max-width="99%"
                >
                    <v-slide-group
                    v-model="model"
                    class="pa-4"
                    active-class="success"
                    show-arrows
                    >
                        <v-slide-item
                            v-for="(imagen,n) in imagenSlider1"
                            :key="n"
                            v-slot="{ active, toggle }"
                        >
                            <v-card
                            :color="active ? undefined : 'grey lighten-1'"
                            class="ma-4"
                            height="200"
                            width="300"
                            @click="toggle"
                            >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-scale-transition>
                                        <img class="slider__img" :src="require(`@/assets/img/${imagen.fields.categoria}/${imagen.fields.img}`)" alt="2">
                                        <!-- <img class="slider__img" :src="require(`@/assets/img/seguros/A.jpg`)" alt="2"> -->
                                    </v-scale-transition>
                                </v-row>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Slider1',
    data() {
        return {
            model: null,
        }
    },
    props:{
        imagenSlider1: [],
        EnunciadoSlider1: []
    }
}
</script>

<style scoped>

.contenedor_texto{
    display: block;
    padding: 80px;
}

.contenedor_texto h1{
    font-size: 60px;
    text-align: center;
}

.contenedor_texto p{
    text-align: center;
}
.contenedor_slider1{
    display: flex;
    justify-content: center;
}

.slider__img{
    width: 300px;
    height: 200px;
    object-fit: cover;
}
</style>