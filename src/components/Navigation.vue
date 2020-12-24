<template>
  <nav class="level">
    <p class="level-item has-text-centered">
      <router-link :to="{name: 'Home'}" class="link is-info">Home</router-link>
    </p>
    <p class="level-item has-text-centered">
      <router-link :to="{name: 'Try'}" class="link is-info">Try</router-link>
    </p>
    <h1 class="level-item has-text-centered title">
      Char2SymVec
    </h1>
    <p class="level-item has-text-centered">
      <a class="link is-info" href="https://github.com/ftyers/nis-nplm">Repository</a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">About Us</a>
    </p>
  </nav>
</template>

<script>
export default {
name: "Navigation"
}
</script>

<style scoped>

</style>