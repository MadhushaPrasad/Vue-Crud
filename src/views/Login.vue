<template>
  <div class="container mt-5 pb-lg-5">
    <div class="card ms-auto me-auto p-3 shadow-lg custom-card">
      <font-awesome-icon icon="user-circle" class="ms-auto me-auto user-icon"/>
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" novalidate :class="submitted ? 'was-validated' : ''">
        <div class="form-group">
          <label for="username">Username</label>
          <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Username"
              required>
          <div class="invalid-feedback">
            Username is required.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Username</label>
          <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Password"
              required>
          <div class="invalid-feedback">
            Password is required.
          </div>
        </div>
        <button @click="submitted = true" :disabled="loading" class="btn btn-success w-100 mt-3">
          Sign In
        </button>
      </form>

      <router-link to="/register" class="btn btn-link" style="color: darkgray">Create a new account!</router-link>
    </div>
  </div>
</template>

<script>
import User from "../Models/user";
import vuex from "vuex";
import AuthenticationService from "../services/authentication.service";

export default {
  name: "login",
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessage: '',
    }
  },
  computed: {
    ...vuex.mapGetters(['currentUser'])
  },
  mounted() {
    if (this.currentUser?.username) {
      this.$router.push('/profile')
    }
  },
  methods: {

    ...vuex.mapActions(['updateUser']),

    handleLogin() {
      if (!this.formData.userName || !this.formData.password) {
        return;
      }

      this.loading = true;

      AuthenticationService.login(this.formData).then((response) => {
        this.updateUser(response.data)
        this.$router.push('/profile')
      }).catch((err) => {
        console.log(err)
        this.errorMessage = 'Unexpected error occurred'
      }).then(() => {
        this.loading = false;
      })
    }
  }
}

</script>

<style scoped>

</style>