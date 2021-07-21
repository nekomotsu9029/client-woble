<template>
  <div class="container-fluid pt-5 pb-5">
    <div class="row">
      <div v-if="boards.length==0" class="w-100 pt-5">
        <h1 class="text-white text-center fw-bolder">
          No encotramos ni un solo tablero &#128533;
        </h1>
      </div>
      <div v-for="(item, index) in boards" v-bind:key="index" 
      class="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 d-flex mb-3">
        <div class="card border cardBoard mx-auto border-4 bg-primary rounded border-white text-white">
          <div class="card-body bg-primary">
            <div class="w-100 d-flex">
              <router-link class="btn fw-bolder mx-auto text-white" :to="'/board/'+item._id">{{item.name}}</router-link> 
              <div v-if="eliminarTableros || editarTableros" class="btn-group btn-group-sm ms-auto" role="group" aria-label="Basic mixed styles example">
                  <button v-if="editarTableros" type="button" class="btn btn-sm btn-info">
                    <span class="material-icons-outlined">
                    mode_edit
                    </span>
                  </button>
                  <button v-if="eliminarTableros" @click="deleteBoard(item._id)" type="button" class="btn btn-sm btn-danger">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="btnDeleteBoard">
      <button @click="eliminarTableros=!eliminarTableros" class="btn ms-auto rounded-circle border border-2 border-white mt-4 btn-danger me-3 mb-3">
        <span class="material-icons-outlined mt-1">
        delete_sweep
        </span>
      </button>
    </div>
    <div id="btnEditBoard">
      <button @click="editarTableros=!editarTableros" class="btn ms-auto rounded-circle border border-2 border-white mt-4 btn-info me-3 mb-3">
        <span class="material-icons-outlined">
        drive_file_rename_outline
        </span>
      </button>
    </div>
    <div id="btnNewBoard">
      <button class="btn ms-auto rounded-circle border border-2 border-white mt-4 btn-success me-3 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <span class="material-icons-outlined mt-1">
        add
        </span>
      </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="staticBackdropLabel">Crea un nuevo Tablero</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input v-model="formNewBoard.name" id="inputNameBoard" :class="'form-control form-control-sm '+formNewBoard.nameIsInvalid" type="text" placeholder="Aqui va el nombre del tablero">
              <label for="inputNameBoard">Escribe el nombre del tablero...</label>
            </div>
            <div class="form-floating mb-3">
              <textarea v-model="formNewBoard.description" id="inputDescriptionBoard" :class="'form-control form-control-sm '+formNewBoard.descriptionIsInvalid" type="text" placeholder="Aqui va la descripcion del tablero"></textarea>
              <label for="inputDescriptionBoard">Escribe una descripcion del tablero...</label>
            </div>
            <div class="d-grid gap-2 mb-2">
              <button @click="createBoard" class="btn btn-lg btn-success">Crear Tablero</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
  data(){
    return{
      eliminarTableros: false,
      editarTableros: false,
      formNewBoard:{
        name: '',
        nameIsInvalid: "",
        description: '',
        descriptionIsInvalid: ""
      }
    }
  },
  methods: {
    ...mapMutations(["obtainBoards", "setBoards", "setAuth"]),
    createBoard: function(){
      let error = false;
      if(this.formNewBoard.name == ''){
        error = true;
        this.formNewBoard.nameIsInvalid = 'is-invalid';
      }else{
        this.formNewBoard.nameIsInvalid = '';
      }
      if(this.formNewBoard.description == ''){
        error = true;
        this.formNewBoard.descriptionIsInvalid = 'is-invalid';
      }else{
        this.formNewBoard.descriptionIsInvalid = '';
      }
      if(!error){
        let endPoint = "/api/board"
        let url = this.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
        let fecha = new Date();
        let obj = {
          name: this.formNewBoard.name,
          description: this.formNewBoard.description,
          date: (fecha.getMonth() +1) + "/" + fecha.getDate() + "/" + fecha.getFullYear(),
          mailusers: [this.user.email]
        }
        axios.post(url, obj, {headers: headers}).then((response)=>{
          const {auth, board} = response.data;
          if(auth){
            this.setBoards(board);
            this.alerts.push({
            title: "Tablero Creado",
            description: 'Se creo el tablero con exito :)   ',
            type: "success",
          });
          }else{
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Crear Tablero",
              description: 'Parece que no estas logeado :(   ',
              type: "danger",
            });
          }
        })
      }
    },
    deleteBoard: function(idBoard){
      let endPoint = "/api/board/"+idBoard;
      let url = this.urlServer + endPoint;
      const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
      axios.delete(url, {headers: headers}).then((response)=>{
        const {auth, board, message} = response.data;
        if(auth){
          this.setBoards(board);
          this.alerts.push({
            title: "Tablero Eliminado",
            description: 'Se elimino el tablero con exito :)   ',
            type: "success",
          });
        }else{
          this.setAuth(auth);
          this.alerts.push({
            title: "Error al Eliminar Tablero",
            description: message,
            type: "danger",
          });
        }
      })
    }
  },
  computed: mapState([
    // map this.count to store.state.count
    "alerts",
    "token",
    "boards",
    "urlServer",
    "user"
  ])
};
</script>
