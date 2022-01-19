<template>
  <div class="main-listaproductos">
      <div class="section_listproductos">
        <div class="contenedor__list">
            <v-item-group active-class="primary">
                <v-container>
                    <v-row>
                        <v-col
                        v-for="(imagen,n) in imagenList"
                        :key="n"
                        cols="12"
                        md="4"
                        >
                        <v-item v-slot="{ toggle }">
                            <v-card
                            class="d-flex align-center"
                            dark
                            height="200"
                            @click="toggle"
                            >
                            <v-scroll-y-transition>
                                <img class="list__img" :src="require(`@/assets/img/${imagen.fields.categoria}/${imagen.fields.img}`)" alt="">
                            </v-scroll-y-transition>
                            </v-card>
                        </v-item>
                        </v-col>
                    </v-row>
                </v-container>
            </v-item-group>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Listaproductos',
    data(){
        return{
            model: null,
        }
    },
    props:{
        imagenList: null,
        EnunciadoList: null
    }
}
</script>
    

<style scoped>

.contenedor__list{
    padding: 80px;
    box-shadow: 0 3px 100px rgb(0 0 0 / 0.2);
    margin: 80px 20px 0;
    height: 540px;
    overflow: auto;
}
.list__img{
    width: 276.02px;
    height: 200px;
    object-fit: cover;
}
</style>