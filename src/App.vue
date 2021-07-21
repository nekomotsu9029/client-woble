<template>
  <div id="app">
    <link v-if="user && user.theme!=''" id="temas" rel="stylesheet" :href="'https://bootswatch.com/5/'+user.theme+'/bootstrap.min.css'">
    <link v-else id="temas" rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css">
    <div v-if="charge" id="contenedor_carga">
      <div id="carga"></div>
    </div>
    <nav
      v-if="auth"
      class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Woble</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Tableros</router-link>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Diseño
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button @click="changeTheme('sketchy')" :class="user.theme=='sketchy' ? 'active' : ''" class="btn rounded-0 dropdown-item">sketchy</button></li>
            <li><button @click="changeTheme('flatly')" :class="user.theme=='flatly' ? 'active' : ''" class="btn rounded-0 dropdown-item">flatly</button></li>
            <li><button @click="changeTheme('sandstone')" :class="user.theme=='sandstone' ? 'active' : ''" class="btn rounded-0 dropdown-item">sandstone</button></li>
          </ul>
        </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{user.name}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="btn rounded-0 dropdown-item" to="/profile">Perfil</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><button @click="closeSesion()" class="btn rounded-0 dropdown-item">Cerrar Sesion</button></li>
          </ul>
        </li>
          </ul>
        </div>
      </div>
    </nav>
    <div v-if="auth" class="pt-5">
      <router-view />
    </div>
    <div id="login" class="container-fluid pb-5 pt-5" v-if="!auth">
      <div class="row pt-5">
        <div class="col-12 col-sm-1 col-md-2"></div>
        <div class="col-12 col-sm-10 col-md-8 bg-white p-2 rounded">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-6 border-dark p-2 mb-2">
                <h3 class="text-center fw-bolder mt-2 mb-4">Inicia Sesion</h3>
                <div class="pe-3 form-floating mb-3 signInInput">
                  <input
                    v-model="formSignIn.email"
                    id="inputEmailSignIn"
                    :class="
                      'form-control form-control-sm ' +
                      formSignIn.emailIsInvalid
                    "
                    type="email"
                    placeholder="Aqui va tu correo"
                  />
                  <label for="inputEmailSignIn">Escribe tu correo...</label>
                </div>
                <div class="pe-3 d-flex form-row mb-3 signInInput">
                  <div class="col-10 form-floating">
                    <input
                      id="inputPassword1"
                      v-model="formSignIn.password"
                      for="inputPAssword1SignIn"
                      :class="
                        'form-control form-control-sm ' +
                        formSignIn.passwordIsInvalid
                      "
                      type="password"
                      placeholder="Aqui va tu contraseña"
                    />
                    <label id="inputPAssword1SignIn"
                      >Escribe tu contraseña...</label
                    >
                  </div>
                  <div class="col-2 d-flex">
                    <button
                      id="btnVisibilityPassword1"
                      @click="
                        visibilityPassword(
                          'btnVisibilityPassword1',
                          'inputPassword1'
                        )
                      "
                      class="btn mx-auto btn-primary"
                    >
                      <span class="material-icons-outlined mt-1">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                <div class="d-grid gap-2 pe-3 mb-2 signInInput">
                  <button
                    @click="signIn()"
                    class="btn btn-lg btn-success"
                    type="button"
                  >
                    Inicia Sesion
                  </button>
                </div>
                <div class="pe-3 w-100 d-flex mb-3">
                  <small class="mx-auto"
                    ><button class="btn text-primary">
                      Recuperar contraseña
                    </button>
                    o
                    <button class="btn text-primary">
                      Inicia Sesion con Google
                    </button></small
                  >
                </div>
              </div>
              <div id="signUpCard" class="col-12 col-md-6 border-dark p-2 border-start mb-2">
                <h3 class="text-center fw-bolder mb-4">Crea una Cuenta</h3>
                <div class="ps-3 form-floating mb-3 signUpInput">
                  <input
                    v-model="formSignUp.name"
                    id="inputNombreSignUp"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Aqui va tu nombre"
                  />
                  <label for="inputNombreSignUp" class="ms-3"
                    >Escribe tu nombre...</label
                  >
                </div>
                <div class="ps-3 form-floating mb-3 signUpInput">
                  <input
                    v-model="formSignUp.email"
                    id="inputEmailSignUp"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Aqui va tu correo"
                  />
                  <label for="inputEmailSignUp" class="ms-3"
                    >Escribe tu correo...</label
                  >
                </div>
                <div class="ps-3 d-flex form-row mb-3 signUpInput">
                  <div class="col-10 form-floating">
                    <input
                      id="inputPassword2"
                      v-model="formSignUp.password"
                      for="inputPAssword1SignUp"
                      class="form-control form-control-sm"
                      type="password"
                      placeholder="Aqui va tu contraseña"
                    />
                    <label id="inputPAssword1SignUp"
                      >Escribe tu contraseña...</label
                    >
                  </div>
                  <div class="col-2 d-flex">
                    <button
                      id="btnVisibilityPassword2"
                      @click="
                        visibilityPassword(
                          'btnVisibilityPassword2',
                          'inputPassword2'
                        )
                      "
                      class="btn mx-auto btn-primary"
                    >
                      <span class="material-icons-outlined mt-1">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                <div class="d-grid gap-2 mb-2 ps-3 signUpInput">
                  <button
                    @click="signUp()"
                    class="btn btn-lg btn-success"
                    type="button"
                  >
                    Crear cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="alerts">
      <div
        v-for="(item, index) in alerts"
        v-bind:key="index"
        :class="
          'alert text-white alert-dismissible m-1 fade show alert-' + item.type
        "
        role="alert"
      >
        <strong>{{ item.title }}</strong> {{ item.description }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  setup() {},
  data() {
    return {
      formSignIn: {
        email: "",
        emailIsInvalid: "",
        password: "",
        passwordIsInvalid: "",
      },
      formSignUp: {
        name: "",
        nameIsInvalid: "",
        email: "",
        emailIsInvalid: "",
        password: "",
        passwordIsInvalid: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setAuth", "setToken", 
    "setCharge", "obtainUser", "obtainBoards", "setUser"]),
    signIn: function () {
      let error = false;
      if (this.formSignIn.email == "") {
        error = true;
        this.formSignIn.emailIsInvalid = "is-invalid";
        this.alerts.push({
          title: "Campo requerido!",
          description: "El campo Email es necesario para iniciar sesion :)   ",
          type: "danger",
        });
      } else {
        this.formSignIn.emailIsInvalid = "";
      }
      if (!error && this.formSignIn.password == "") {
        error = true;
        this.formSignIn.passwordIsInvalid = "is-invalid";
        this.alerts.push({
          title: "Campo requerido!",
          description:
            "El campo Contraseña es necesario para iniciar sesion :)   ",
          type: "danger",
        });
      } else {
        this.formSignIn.passwordIsInvalid = "";
      }
      if (!error) {
        let endPoint = "/api/signin";
        let url = this.urlServer + endPoint;
        let obj = {
          email: this.formSignIn.email,
          password: this.formSignIn.password,
        };
        axios.post(url, obj).then((response) => {
          const { auth, token, message } = response.data;
          if (auth) {
            localStorage.setItem('token', token)
            this.setCharge(true);
            this.setAuth(auth);
            this.setToken(token);
            this.obtainUser();
            this.obtainBoards();
          } else {
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Iniciar Sesion",
              description: message,
              type: "warning",
            });
          }
        });
      }
    },
    signUp: function () {
      let error = false;
      if (this.formSignUp.name == "") {
        error = true;
        this.formSignUp.nameIsInvalid = "is-invalid";
        this.alerts.push({
          title: "Campo requerido!",
          description:
            "El campo Nombre es necesario para Crear una Cuenta :)   ",
          type: "danger",
        });
      } else {
        this.formSignUp.nameIsInvalid = "";
      }
      if (!error && this.formSignUp.email == "") {
        error = true;
        this.formSignUp.emailIsInvalid = "is-invalid";
        this.alerts.push({
          title: "Campo requerido!",
          description:
            "El campo Email es necesario para Crear una Cuenta :)   ",
          type: "danger",
        });
      } else {
        this.formSignUp.emailIsInvalid = "";
      }
      if (!error && this.formSignUp.password == "") {
        error = true;
        this.formSignUp.passwordIsInvalid = "is-invalid";
        this.alerts.push({
          title: "Campo requerido!",
          description:
            "El campo Contraseña es necesario para Crear una Cuenta :)   ",
          type: "danger",
        });
      } else {
        this.formSignUp.passwordIsInvalid = "";
      }
      if (!error) {
        let endPoint = "/api/signup";
        let url = this.urlServer + endPoint;
        let obj = {
          name: this.formSignUp.name,
          email: this.formSignUp.email,
          password: this.formSignUp.password,
        };
        axios.post(url, obj).then((response) => {
          const { auth, token, message } = response.data;
          if (auth) {
            localStorage.setItem('token', token)
            this.setCharge(true);
            this.setAuth(auth);
            this.setToken(token);
            this.obtainUser();
            this.obtainBoards();
          } else {
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Crear Cuenta",
              description: message,
              type: "warning",
            });
          }
        });
      }
    },
    visibilityPassword: function (idBtn, idInput) {
      let inputPassword = document.getElementById(idInput);
      if (inputPassword.type == "password") {
        inputPassword.type = "text";
        document.getElementById(idBtn).classList.add("btn-success");
        document.getElementById(idBtn).classList.remove("btn-primary");
        document.getElementById(idBtn).innerHTML =
          '<span class="material-icons-outlined mt-1">visibility_off</span>';
      } else {
        inputPassword.type = "password";
        document.getElementById(idBtn).classList.remove("btn-success");
        document.getElementById(idBtn).classList.add("btn-primary");
        document.getElementById(idBtn).innerHTML =
          '<span class="material-icons-outlined mt-1">visibility</span>';
      }
    },
    sesionVerify: function(){
      let token = localStorage.getItem('token');
      if(token && token!=''){
        this.setAuth(true);
        this.setToken(token);
        this.obtainUser();
        this.obtainBoards();
      }
    },
    changeTheme: function(theme){
      let endPoint = '/api/user/theme';
      let url = this.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
        const obj = {
          theme
        }
        axios.put(url,obj, {headers: headers}).then((response)=>{
          const {auth, user, message} = response.data;
          if(auth){
            this.setAuth(auth);
            this.setUser(user);
          }else{
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Cambiar el thema",
              description: message,
              type: "danger",
            });
          }
        })
    },
    closeSesion(){
      localStorage.clear();
      this.setAuth(false)
    }
  },
  mounted(){
    this.sesionVerify();
    this.setCharge(false)
  },
  computed: mapState([
    // map this.count to store.state.count
    "auth",
    "charge",
    "token",
    "alerts",
    "urlServer",
    "user"
  ]),
};
</script>