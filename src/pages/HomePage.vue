<template>
  <div class="home-page">

    <div class="header">
      <h1>Vehicle Checks</h1>
    </div>

    <p>Select your vehicle type:</p>
    <router-link class="vehicle-type-button" to="/vehicle/cat-1">Cat 1</router-link>
    <router-link class="vehicle-type-button" to="/vehicle/pc">PC</router-link>

  </div>
</template>

<style>
.header {
  margin-top: 60px;
  margin-bottom: 60px;
}

/* The CSS for the buttons */
.vehicle-type-button {
  display: block;
  color: #FAFAFF;
  font-weight: bold;
  background: #1E2749;
  border-color: #FAFAFF;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  padding: 12px 16px;
  margin-bottom: 16px;
}
</style>
