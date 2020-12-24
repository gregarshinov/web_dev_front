<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <p class="title has-text-left">
            Welcome to the Char2SymVec Project!
          </p>
          <article>
            <lorem-ipsum add="2p" class="has-text-left"/>
          </article>
          <router-link :to="{name: 'Research'}" class="is-pulled-right is-dark button">Read the paper</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum'
export default {
  name: "Base",
  components: {LoremIpsum}
}
</script>

<style scoped>

</style>