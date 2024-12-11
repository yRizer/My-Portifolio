<template>
  <main class="main">
    <SideBar />
    <div class="main-content">
      <router-view name="MainContent"/>
    </div>
  </main>
</template>

<script>
import SideBar from './components/side-bar/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
:root {
  --seasalt: #f8f9faff;
  --antiflash-white: #e9ecefff;
  --platinum: #dee2e6ff;
  --french-gray: #ced4daff;
  --french-gray-2: #adb5bdff;
  --slate-gray: #6c757dff;
  --outer-space: #495057ff;
  --onyx: #343a40ff;
  --eerie-black: #212529ff;
  --semi-black: #0e0e0e;
  --black: #050505;
}
</style>

<style scoped>

main {
  background-color: var(--black);
  height: 100%;
  width: 100%;
  display: flex;
}

.main-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
