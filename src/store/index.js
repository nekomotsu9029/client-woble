import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    urlServer: 'http://localhost:3000',
    charge: true,
    auth: false,
    token: '',
    alerts: [],
    user: '',
    boards: []
  },
  mutations: {
    setAuth (state, value) {
      // mutate state
      state.auth=value;
    },
    setToken (state, value) {
      // mutate state
      state.token=value;
    },
    setUser (state, value){
      state.user=value;
    },
    setCharge(state, value){
      state.charge = value;
    },
    setBoards(state, value){
      state.boards = value;
    },
    obtainUser(state){
      if(state.auth){
        let endPoint = "/api/user"
        let url = state.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': state.token
        }
        axios.get(url, {headers: headers}).then((response)=>{
          const {auth, user, message} = response.data;
          if(auth){
            state.auth = auth;
            state.user = user;
            state.charge = false;
            let temas = document.getElementById('temas');
            let padre = temas.parentNode;
            padre.removeChild(temas);
          }else{
            state.auth = auth;
            state.alerts.push({
              title: "Error al Recuperar el Usuario",
              description: message,
              type: "danger",
            });
          }
        })
      }
    },
    obtainBoards(state){
      if(state.auth){
        let endPoint = "/api/board"
        let url = state.urlServer + endPoint;
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': state.token
        }
        axios.get(url, {headers: headers}).then((response)=>{
          const {auth, board, message} = response.data;
          if(auth){
            state.auth = auth;
            state.boards = board;
          }else{
            state.auth = auth;
            state.alerts.push({
              title: "Error al Recuperar los tableros",
              description: message,
              type: "danger",
            });
          }
        })
      }
    }
  },
  actions: {},
  modules: {},
});
