<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
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
            <li class="nav-item">
              <a class="nav-link text-white active" aria-current="page" href="/admin">Amin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white active" href="/">Home</a>
            </li>
          </ul>
          <div class="d-flex flex-lg-row flex-sm-column">
            <p class="nav-item">
              <a class="ps-0 nav-link" href="/register">Sign Up</a>
            </p>
            <p class="nav-item">
              <a class="ps-0 nav-link" href="/login">Sign In</a>
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

<style>
</style>
