<template>
  <div class="columns pageLogin">
    <div class="column"></div>
    <div class="column">
    </div>
    <div class="column" id="columnFormLogin">
        <div>
          <div class="blockFormLogin">
            <input class="input is-warning inputLogin placeholder" type="text" placeholder="email" v-model="email"><br>
            <input class="input is-info inputLogin placeholder" type="password" placeholder="password" v-model="password"><br>
            <button class="button is-info buttonFormLogin" @click="toDoLogin(email, password)">Go</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Login from "../services/login";
export default {
  name: 'HomeView',
  data(){
    return{
        email:"",
        password:"",
    }
  },
  methods:{
    async toDoLogin(email, password){
      const response = await Login.login(email, password);
      localStorage.setItem('token', response.data.token);
      this.$store.state.dispatch('login', )
      
    }
  }
}
</script>
