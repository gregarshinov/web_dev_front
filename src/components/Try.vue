<template>
<section class="section">
  <div class="column">
    <div :class="{control: true, 'is-loading': isLoading}">
      <textarea class="textarea" placeholder="Loading textarea" v-model="text"></textarea>
    </div>
    <div class="my-2 has-text-left">
      <transition name="slide-fade">
        <div v-show="!isLoading">
        <button
            @click="text += suggestion"
            class="button has-background-info has-text-white"
            v-for="(suggestion, i) in suggestions"
            :key="i">{{ suggestion }}</button>
        </div>
      </transition>
    </div>
  </div>
</section>
</template>

<script>
import { fetchSuggestions } from "@/api"

export default {
  name: "Try",
  data: function () {
    return {
      text: "",
      isLoading: false,
      isError: false,
      suggestions: []
    }
  },
  methods: {
    loadSuggestions: function (text) {
      return fetchSuggestions (text)
          .then((response) => {
            return response.data.suggestions
          })
    },
    myMethod: async function () {
      try {
        this.isLoading = true;
        const { data } = await fetchSuggestions(this.text);
        this.suggestions = data.suggestions
      } catch (err) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    }
  },
  watch: {
    async text ()  {
      return await this.myMethod()
    }
  }
}
</script>

<style scoped>
/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>