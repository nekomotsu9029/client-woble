<template>
  <div class="container-fluid pt-5 pb-5">
    <div class="row pb-5">
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 pb-5">
        <!--En espera-->
        <div class="card text-center">
          <div class="card-header">
            En espera
          </div>
          <div id="enEspera" class="p-3">
            <div data-id="enEspera" ></div>
            <div v-for="(item, index) in enEspera" v-bind:key="index" :data-id="item._id" class="bg-primary text-white drag p-1 mb-1">
              <div class="w-100 d-flex">
                <h5 class="card-title mx-auto">{{item.name}}</h5>
                <div v-if="eliminarTableros || editarTableros" class="btn-group btn-group-sm ms-auto" role="group" aria-label="Basic mixed styles example">
                  <button v-if="editarTableros" type="button" class="btn btn-sm btn-info">
                    <span class="material-icons-outlined">
                    mode_edit
                    </span>
                  </button>
                  <button v-if="eliminarTableros" @click="deleteTask(item._id)" type="button" class="btn btn-sm btn-danger">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                  </button>
                </div>
              </div>              
              <p class="mb-0">Descripcion: {{item.description}}</p>
              <div class="w-100 d-flex">
                <small class="text-white ms-auto"> <i>{{item.targetDate}}</i> </small>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 pb-5">
        <!--Retroalimentacion-->
        <div class="card text-center">
          <div class="card-header">
            Retroalimentacion
          </div>
          <div id="retroalimentacion" class="p-3">
            <div data-id="retroalimentacion" ></div>
            <div v-for="(item, index) in retroalimentacion" v-bind:key="index" :data-id="item._id" class="bg-primary text-white drag p-1 mb-1">
              <div class="w-100 d-flex">
                <h5 class="card-title mx-auto">{{item.name}}</h5>
                <div v-if="eliminarTableros || editarTableros" class="btn-group btn-group-sm ms-auto" role="group" aria-label="Basic mixed styles example">
                  <button v-if="editarTableros" type="button" class="btn btn-sm btn-info">
                    <span class="material-icons-outlined">
                    mode_edit
                    </span>
                  </button>
                  <button v-if="eliminarTableros" @click="deleteTask(item._id)" type="button" class="btn btn-sm btn-danger">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                  </button>
                </div>
              </div>              
              <p class="mb-0">Descripcion: {{item.description}}</p>
              <div class="w-100 d-flex">
                <small class="text-white ms-auto"> <i>{{item.targetDate}}</i> </small>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 pb-5">
        <!--En proceso-->
        <div class="card text-center">
          <div class="card-header">
            En proceso
          </div>
          <div id="enProceso" class="p-3">
            <div data-id="enProceso" ></div>
            <div v-for="(item, index) in enProceso" v-bind:key="index" :data-id="item._id" class="bg-primary text-white drag p-1 mb-1">
              <div class="w-100 d-flex">
                <h5 class="card-title mx-auto">{{item.name}}</h5>
                <div v-if="eliminarTableros || editarTableros" class="btn-group btn-group-sm ms-auto" role="group" aria-label="Basic mixed styles example">
                  <button v-if="editarTableros" type="button" class="btn btn-sm btn-info">
                    <span class="material-icons-outlined">
                    mode_edit
                    </span>
                  </button>
                  <button v-if="eliminarTableros" @click="deleteTask(item._id)" type="button" class="btn btn-sm btn-danger">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                  </button>
                </div>
              </div>              
              <p class="mb-0">Descripcion: {{item.description}}</p>
              <div class="w-100 d-flex">
                <small class="text-white ms-auto"> <i>{{item.targetDate}}</i> </small>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 p-1 pb-5">
        <!--En terminado-->
        <div class="card text-center">
          <div class="card-header">
            Terminado
          </div>
          <div id="terminado" class="p-3">
            <div data-id="terminado" ></div>
            <div v-for="(item, index) in terminado" v-bind:key="index" :data-id="item._id" class="bg-primary text-white drag p-1 mb-1">
              <div class="w-100 d-flex">
                <h5 class="card-title mx-auto">{{item.name}}</h5>
                <div v-if="eliminarTableros || editarTableros" class="btn-group btn-group-sm ms-auto" role="group" aria-label="Basic mixed styles example">
                  <button v-if="editarTableros" type="button" class="btn btn-sm btn-info">
                    <span class="material-icons-outlined">
                    mode_edit
                    </span>
                  </button>
                  <button v-if="eliminarTableros" @click="deleteTask(item._id)" type="button" class="btn btn-sm btn-danger">
                    <span class="material-icons-outlined">
                    delete
                    </span>
                  </button>
                </div>
              </div>              
              <p class="mb-0">Descripcion: {{item.description}}</p>
              <div class="w-100 d-flex">
                <small class="text-white ms-auto"> <i>{{item.targetDate}}</i> </small>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="btnDeleteTask">
      <button @click="eliminarTableros=!eliminarTableros" class="btn ms-auto rounded-circle border border-2 border-white mt-4 btn-danger me-3 mb-3">
        <span class="material-icons-outlined mt-1">
        delete_sweep
        </span>
      </button>
    </div>
    <div id="btnEditTask">
      <button @click="editarTableros=!editarTableros" class="btn ms-auto rounded-circle border border-2 border-white mt-4 btn-info me-3 mb-3">
        <span class="material-icons-outlined">
        drive_file_rename_outline
        </span>
      </button>
    </div>
    <div id="btnNewTask">
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
            <h5 class="modal-title" id="staticBackdropLabel">Crea una nueva Tarea</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input v-model="formNewTask.name" id="inputNameBoard" :class="'form-control form-control-sm '+formNewTask.nameIsInvalid" type="text" placeholder="Aqui va el nombre de la tarea">
              <label for="inputNameBoard">Escribe el nombre del tablero...</label>
            </div>
            <div class="form-floating mb-3">
              <textarea v-model="formNewTask.description" id="inputDescriptionBoard" :class="'form-control form-control-sm '+formNewTask.descriptionIsInvalid" type="text" placeholder="Aqui va la descripcion de la tarea"></textarea>
              <label for="inputDescriptionBoard">Escribe una descripcion del tablero...</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="formNewTask.targetDate" id="inputDescriptionBoard" :class="'form-control form-control-sm '+formNewTask.targetDateIsInvalid" type="date" placeholder="Aqui va la fecha de la tarea">
              <label for="inputDescriptionBoard">Cual es la fecha objetivo?</label>
            </div>
            <div class="d-grid gap-2 mb-2">
              <button @click="createTask()" class="btn btn-lg btn-success">Crear Tablero</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="setDrag" id="btnChangeSortable" class="d-none">none</button>
    
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Sortable from 'sortablejs';
import axios from "axios";
export default {
  name: "Board",
  components: {
  },
  data(){
    return{
      idBoard:this.$route.params.id,
      tasks: [],
      enEspera: [],
      retroalimentacion: [],
      enProceso: [],
      terminado: [],
      eliminarTableros: false,
      editarTableros: false,
      formNewTask: {
        name: '',
        nameIsInvalid: '',
        description: '',
        descriptionIsInvalid: '',
        targetDate: '',
        targetDateIsInvalid: ''
      }
    }
  },
  methods: {
    ...mapMutations(["setAuth"]),
    obtainTask: function(){
      let endPoint = '/api/task';
      let url = this.urlServer + endPoint;
      const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
      axios.get(url, {headers: headers}).then((response)=>{
        const {auth, task, message} = response.data;
        if(auth){
          this.tasks = task;
          this.dividirTareasPorCategorias()
          this.setAuth(auth);
        }else{
          this.setAuth(auth);
            this.alerts.push({
              title: "Error al Recuperar las tareas",
              description: message,
              type: "danger",
            });
        }
      })
    },
    dragAndDrop: function(){
      const enEspera = document.getElementById('enEspera');
      const retroalimentacion = document.getElementById('retroalimentacion');
      const enProceso = document.getElementById('enProceso');
      const terminado = document.getElementById('terminado');

      const configSortable = {
          group: {
              name: "lista-tareas"
          },
          animation: 100,
          easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
          handle: ".drag",
          filter: '.btn',
          chosenClass: "bg-info",
          store: {
              set: function(sortable){
                  localStorage.setItem('arrSortable', sortable.toArray())
                  document.getElementById('btnChangeSortable').click();
              }
          }
      }

      Sortable.create(enEspera, configSortable);
      Sortable.create(retroalimentacion, configSortable);
      Sortable.create(enProceso, configSortable);
      Sortable.create(terminado, configSortable);

    },
    createTask: function(){
      let error = false;
      if(this.formNewTask.name == ''){
        error = true;
        this.formNewTask.nameIsInvalid = 'is-invalid'
      }
      if(this.formNewTask.description == ''){
        error = true;
        this.formNewTask.descriptionIsInvalid = 'is-invalid'
      }
      if(this.formNewTask.targetDate == ''){
        error = true;
        this.formNewTask.targetDateIsInvalid = 'is-invalid'
      }
      if(!error){
        let endPoint = '/api/task';
        let url = this.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
        let fecha = new Date();
        const obj = {
          name: this.formNewTask.name, 
          description: this.formNewTask.description, 
          date: (fecha.getMonth() +1) + "/" + fecha.getDate() + "/" + fecha.getFullYear(),
          category: 'enEspera', 
          targetDate: this.formNewTask.targetDate, 
          idboard: this.idBoard
        }
        axios.post(url, obj, {headers: headers}).then((response)=>{
          const {auth, task, message} = response.data;
          if(auth){
            this.setAuth(auth);
            this.tasks = task;
            this.enEspera = task.filter(tarea => tarea.category == 'enEspera')
            this.retroalimentacion = task.filter(tarea => tarea.category == 'retroalimentacion')
            this.enProceso = task.filter(tarea => tarea.category == 'enProceso')
            this.terminado = task.filter(tarea => tarea.category == 'terminado')
            this.alerts.push({
            title: "Tarea Creada",
            description: 'Se creo la tarea con exito :)   ',
            type: "success",
          });
          }else{
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Crear Tablero",
              description: message,
              type: "danger",
            });
          }
          console.log(response.data)
        })
      }
      
    },
    removeItemFromArr: function( arr, item ) {
        let i = arr.indexOf( item );    
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    },
    obtainTaskById: function(idTask){
      for(let i=0; i<this.tasks.length; i++){
        let item = this.tasks[i]
        if(item._id == idTask){
          return item;
        }
      }
      return null;
    },
    setDrag: function(){
      let arr = localStorage.getItem('arrSortable').split(',')
      //para cada cambio este metodo se llama dos veces, uno para la salida y el otro para la entrada
      let category  = '';
      let arrToCompare = [];
      if(arr.includes( 'enEspera' )){
        category  = 'enEspera';
        arrToCompare = this.enEspera;
      }
      if(arr.includes( 'retroalimentacion' )){
        category  = 'retroalimentacion';
        arrToCompare = this.retroalimentacion;
      }
      if(arr.includes( 'enProceso' )){
        category  = 'enProceso';
        arrToCompare = this.enProceso;
      }
      if(arr.includes( 'terminado' )){
        category  = 'terminado';
        arrToCompare = this.terminado;
      }
      this.removeItemFromArr(arr, category);
      if(arrToCompare.length<arr.length){
        for(let i=0; i<arrToCompare.length; i++){
          let item = arrToCompare[i];
          this.removeItemFromArr(arr, item._id);
        }
        let task = this.obtainTaskById(arr[0]);
        task.category = category;
        
        let endPoint = '/api/task/'+task._id;
        let url = this.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
        const obj = {
          taskUpdate: task
        }
        axios.put(url, obj, {headers: headers}).then((response)=>{
          const {auth, message} = response.data;
          if(!auth){
            this.setAuth(auth);
            this.alerts.push({
              title: "Error al Mover Tablero",
              description: message,
              type: "danger",
            });
          }
        })
        
      }
    },
    deleteTask: function(idTask){
      let endPoint = '/api/task/'+idTask;
      let url = this.urlServer + endPoint;
      const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.token
        }
      axios.delete(url, {headers: headers}).then((response)=>{
        const {auth, task, message} = response.data;
        if(auth){
          this.tasks = task;
          this.dividirTareasPorCategorias()
          this.alerts.push({
            title: "Tarea Eliminada",
            description: 'Se elimino la tarea con exito :)   ',
            type: "success",
          });
        }else{
          this.setAuth(auth);
          this.alerts.push({
            title: "Error al Eliminar la Tarea",
            description: message,
            type: "danger",
          });
        }
      })
    },
    dividirTareasPorCategorias: function(){
      this.enEspera = []
      this.retroalimentacion = []
      this.enProceso = []
      this.terminado = []
      this.enEspera = this.tasks.filter(tarea => tarea.category == 'enEspera' && tarea.idboard == this.idBoard)
      this.retroalimentacion = this.tasks.filter(tarea => tarea.category == 'retroalimentacion' && tarea.idboard == this.idBoard)
      this.enProceso = this.tasks.filter(tarea => tarea.category == 'enProceso' && tarea.idboard == this.idBoard)
      this.terminado = this.tasks.filter(tarea => tarea.category == 'terminado' && tarea.idboard == this.idBoard)
    }
  },
  mounted(){
    this.obtainTask();
    this.dragAndDrop();
  },
  computed: mapState([
    // map this.count to store.state.count
    "alerts",
    "token",
    "urlServer"
  ])
};
</script>
