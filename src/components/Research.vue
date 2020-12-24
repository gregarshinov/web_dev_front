<template>
<section class="section">
  <div class="content px-6">
    <p class="title">
      Tensor Product Representation In Service of low-resource polysynthetic languages
    </p>
    <p class="subtitle">
      Greg Arshinov, Daria Samsonova, Sergey Kosyak, Mikhail Voronov
    </p>
    <!-- <lorem-ipsum add="6p" class="has-text-justified"/> -->
    <article>
      \author{G. Arshinov, S. Kosyak, D. Samsonova, F. Tyers, M. Voronov}

      \documentclass[leqno]{article}
      \usepackage[utf8]{inputenc}
      \usepackage[table,xcdraw]{xcolor}
      \usepackage{polyglossia}
      \setdefaultlanguage{english}
      \setotherlanguage{russian}
      \usepackage{fontspec}
      \usepackage{xunicode}
      \usepackage{xltxtra}
      \usepackage{libertine}
      \usepackage{indentfirst}
      \usepackage{enumerate}
      \usepackage[fleqn]{amsmath}
      \usepackage{gb4e} \noautomath
      \usepackage[colorlinks,allcolors=black]{hyperref}
      \providecommand{\keywords}[1]{\textbf{\textit{Tags: }} #1}

      \usepackage[backend=biber,style=authoryear]{biblatex}
      \addbibresource{bib.bib}

      \newtheorem{theorem}{Definition}


      \title{Tensor Product of Representations in Service of Low-Resource Languages}
      \author{G. Arshinov, S. Kosyak, D. Samsonova, F. Tyers, M. Voronov}
      \date{June 2020}

      \begin{document}

      \maketitle

      \begin{abstract}
      Polysynthetic low-resource languages are poorly treated with standard language modeling approaches. In this paper a hypothesis that word-segment embeddings based on tensor product of representations show better performance for low-resource languages compared to conventional word- and char-based models is tested. In order to prove it a pipeline that allows to process low-resource polysynthetic languages was developed. Using Neural Sequence Labeling Toolkit \parencite{yang2018ncrf} to train a segmenter on a Chukchi corpus, a raw Chuckchi corpus was segmented and the \textit{iiksiin} \parencite{iiksiin} model was employed to create the embeddings. After that we tested them on the language modelling task and evaluated the results, which showed a notable increase in performance compared to regular approaches.
      \end{abstract}

      \keywords{TPR, Chuckchi, language modeling, polysynthetic, low-resource, NLP} 

      \section{Introduction}

      Most traditional text vectorization approaches target languages that do not have much inflection
      (e.g. \parencite{word2vec, bojanowski2017enriching, pennington2014glove}).
      Such approaches treat \textit{cat} and \textit{cats} as individual words. It works reasonably well for analytic languages such as Chinese or English. However, there are polysynthetic languages that feature extensive
      morphology and cannot be efficiently processed this way.\author{G. Arshinov, Sergei Kosyak, D. Samsonova, F. Tyers, M. Voronov}



      In this work we will model the Chukchi language. Let us consider the
      following two examples
      (examples (\ref{ex1}) and (\ref{ex2})). As you could see, the words
      have the same root but different inflectional affixes.
      Eventually, representing Chukchi tokens using one of the traditional approaches will inevitably fail to encode the complex meaning, that is built up out each and individual morpheme.
    </article>

  </div>
</section>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum'
export default {
name: "Research",
  components: { LoremIpsum }
}
</script>

<style scoped>

</style>