<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="column">
            <p class="title has-text-left">
              Welcome to the Char2SymVec Project!
            </p>
            <p class="has-text-left is-size-3">
              Char2SymVec is a project dedicated to research the low resoursed Chukchi language.<br> We aimed to make a neural network language model for the Chukchi language and for that we had to solve the problem of creating emmbedings having only a small dataset of Chukchi texts.
            </p>
          </div>
          <router-link :to="{name: 'Research'}" class="is-pulled-right is-dark button">Learn more</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Base"
}
</script>

<style scoped>

</style>