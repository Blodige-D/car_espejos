<template>
  <div class="main-login">
    <div class="body"></div>
    <div class="grad"></div>
    <div class="header">
      <div>Car<span>Espejos</span></div>
    </div>
    <br />
    <div class="login">
      <form v-on:submit.prevent="Login()" method="POST">
        <input
          type="text"
          placeholder="username"
          name="username"
          v-model="posts.username"
        /><br />
        <input
          type="password"
          placeholder="password"
          name="password"
          v-model="posts.password"
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: {
        username: null,
        password: null,
      },
	  token: '',
    };
  },
  methods: {
    Login() {
      let login = new FormData();
      login.append("username", this.posts.username);
      login.append("password", this.posts.password);
      axios({
        method: "post",
        url: "https://apicarespejos.herokuapp.com/users/login/",
        data: login,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
		  this.token = 'Token '+response.data.token
		  sessionStorage.token = this.token
		  this.$router.replace('/Productos')
        })
        .catch((error) => {
          alert("Credenciales Incorrectas :"+error)
        });
    },
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
  background-image: url(../assets/img/Banner.webp);
  background-size: cover;
  -webkit-filter: blur(2px);
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
  ); /* Chrome,Safari4+ */
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

.login {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 50px);
  height: 150px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}

.login input[type="text"] {
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

.login input[type="password"] {
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
  margin-top: 10px;
}

.login button {
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

.login button:hover {
  opacity: 0.8;
}

.login button:active {
  opacity: 0.6;
}

.login input[type="text"]:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.login input[type="password"]:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.login button:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}
</style>
