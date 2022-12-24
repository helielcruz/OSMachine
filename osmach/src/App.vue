<template>
  <div>
    <div>
      <NavBarComponent/>
    </div>
  </div>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <router-view/>
</template>

<script>
import StyleVue from "./theme/styleVue.vue";
import NavBarComponent from "./components/NavBarComponent.vue";

export default{
  components:{
    NavBarComponent
  },
  data(){
    return{

    }
  },
  computed:{

  },
  methods:{

  }
}
</script>

<style>
  @import "~bulma/css/bulma.css";
</style>
