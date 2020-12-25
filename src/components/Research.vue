<template>
  <section class="section">
    <div class="content px-6">
      <p class="title">
        Tensor Product Representation In Service of low-resource polysynthetic languages
      </p>
      <p class="subtitle">
        Greg Arshinov, Daria Samsonova, Sergey Kosyak, Mikhail Voronov
      </p>
      <article class="has-text-justified is-size-4">
        Polysynthetic low-resource languages are poorly treated with standard language modeling approaches. In this
        paper a hypothesis that word-segment embeddings based on tensor product of representations show better
        performance for low-resource languages compared to conventional word- and char-based models is tested. In order
        to prove it a pipeline that allows to process low-resource polysynthetic languages was developed. Using Neural
        Sequence Labeling Toolkit \parencite{yang2018ncrf} to train a segmenter on a Chukchi corpus, a raw Chuckchi
        corpus was segmented and the \textit{iiksiin} \parencite{iiksiin} model was employed to create the embeddings.
        After that we tested them on the language modelling task and evaluated the results, which showed a notable
        increase in performance compared to regular approaches.
      </article>
      <div class="column has-text-right">
        <a class="button has-background-dark has-text-white"
           href="https://github.com/ftyers/nis-nplm/blob/master/iiksiin.article/article.pdf">Read the article</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Research"
}
</script>

<style scoped>

</style>