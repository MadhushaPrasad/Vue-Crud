<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="https://vuejs.org">
          <img src="./assets/logo.png" alt="logo" height="40"/>
          Vue
        </a>
        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="isAdmin">
              <router-link class="nav-link text-white" to="/admin" active-class="active">Amin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/" active-class="active">Home</router-link>
            </li>
          </ul>
          <div class="d-flex flex-lg-row flex-sm-column" v-if="!currentUser">
            <p class="nav-item">
              <router-link class="ps-0 nav-link" to="/register" active-class="active">Sign Up</router-link>
            </p>
            <p class="nav-item">
              <router-link class="ps-0 nav-link" to="/login" active-class="active">Sign In</router-link>
            </p>
          </div>

          <div class="d-flex flex-lg-row flex-sm-column" v-if="currentUser">
            <p class="nav-item">
              <router-link class="ps-0 nav-link" to="/register" active-class="profile">{{currentUser.name}}</router-link>
            </p>
            <p class="nav-item">
              <a class="ps-0 nav-link active" href="#" @click="logout">Sign Out</a>
            </p>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Role from "./Models/role";

export default {
  computed:{
    ...vuex.mapGetters(['currentUser']),
    isAdmin(){
      return this.currentUser?.role === Role.ADMIN
    }
  },
  methods:{
    ...vuex.mapActions(['clearUser']),
    logout(){
      this.clearUser()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
