<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="column">
            <p class="title has-text-left">
              {{ $t('message.home.headline') }}
            </p>
            <p class="has-text-left is-size-3">
              {{ $t('message.home.heroText') }}
            </p>
          </div>
          <router-link :to="{name: 'Research'}" class="is-pulled-right is-dark button">{{ $t('message.home.learnMore') }}</router-link>
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