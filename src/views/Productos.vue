<template>
  <div class="main-productos">
    <div class="body"></div>
    <div class="grad"></div>
    <div class="header">
      <div>Car<span>Espejos</span></div>
    </div>
    <br />
    <div class="productos">
      <form  v-on:submit.prevent="agregar_Producto()" method="POST">
        <input type="text" placeholder="Nombre del producto" name="img"  v-model="posts_productos.img" /><br />
        <select name="categoria" id="categoria" v-model="posts_productos.categoria">
          <option class="option" value="N/A">Elige una categoria</option>
          <option class="option" value="direccionales">Direccionales</option>
          <option class="option" value="espejos">Espejos</option>
          <option class="option" value="fatolas">Farolas</option>
          <option class="option" value="llaves">Llaves</option>
          <option class="option" value="manijas">Manijas</option>
          <option class="option" value="parabrisas">Parabrisas</option>
          <option class="option" value="segum">Seguros para espejos</option>
          <option class="option" value="stops">Stops</option>
          <option class="option" value="variedades">Variedades</option>
        </select>
        <br />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        posts_productos:{
            nombre: 'N/A',
            img: null,
            desc: 'N/A',
            categoria: null
        },
        validado: ''
    };
  },
  methods: {
      agregar_Producto(){
          let token = sessionStorage.token
          let producto = new FormData();
          producto.append("img",this.posts_productos.img);
          producto.append("categoria",this.posts_productos.categoria);
          axios({
              method: "post",
              url: "https://apicarespejos.herokuapp.com/create/",
              data: producto,
              headers:{
                  "Content-Type": "multipart/form-data",
                  "Authorization": token
              } 
          }).then((response) => {
              this.validado = response.data
              if (this.validado === 'completo') {
                  alert("Producto Agregado")
              }
          }).catch((error) => {
              alert("Credenciales del producto mal")
          })
      },
      validacion(){
          if (sessionStorage.token) {
          }else{
              this.$router.push('/Login')
          }
      },
  },
  mounted() {
      this.validacion()
  },
};
</script>

<style scoped>
.body {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background: #282c34;
  z-index: 0;
}

.grad {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.65))
  );
  z-index: 1;
  opacity: 0.7;
}

.header {
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 255px);
  z-index: 2;
}

.header div {
  float: left;
  color: yellow;
  font-family: "Exo", sans-serif;
  font-size: 35px;
  font-weight: 200;
}

.header div span {
  color: red !important;
}

.productos {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 50px);
  height: 150px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}

.productos input[type="text"] {
  width: 260px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
}

.productos select {
  width: 260px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 10px;
}

.option{
    background: transparent !important; 
    color: black !important; 
}

.productos button {
  width: 260px;
  height: 35px;
  background: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 2px;
  color: #a18d6c;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
}

.productos button:hover {
  opacity: 0.8;
}

.productos button:active {
  opacity: 0.6;
}

.productos input[type="text"]:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.productos select:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.productos button:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}
</style>