<script setup>
import Navbar from './components/navbar.vue';
import Sidebar from './components/sidebar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <b-container>
      <b-row>
      
      <b-col cols="2">
        <aside>
          <Sidebar />
        </aside>
      </b-col>

      <b-col cols="10">
        <main>
          <router-view></router-view>
        </main>
      </b-col>

    </b-row>
    </b-container>
  </div>
</template>

<style scoped></style>
