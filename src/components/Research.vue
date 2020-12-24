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
      <html>
        <head>
        <title>LaTeX4Web 1.4 OUTPUT</title>
        <style type="text/css">
        <!--
        body {color: black;  background:"#FFCC99";  }
        div.p { margin-top: 7pt;}
        td div.comp { margin-top: -0.6ex; margin-bottom: -1ex;}
        td div.comb { margin-top: -0.6ex; margin-bottom: -.6ex;}
        td div.norm {line-height:normal;}
        td div.hrcomp { line-height: 0.9; margin-top: -0.8ex; margin-bottom: -1ex;}
        td.sqrt {border-top:2 solid black;
                  border-left:2 solid black;
                  border-bottom:none;
                  border-right:none;}
        table.sqrt {border-top:2 solid black;
                    border-left:2 solid black;
                    border-bottom:none;
                    border-right:none;}
        -->
        </style>
        </head>
        <body>
        \authorG. Arshinov, S. Kosyak, D. Samsonova, F. Tyers, M. Voronov

        \documentclass[leqno]article
        \usepackage[utf8]inputenc
        \usepackage[table,xcdraw]xcolor
        \usepackagepolyglossia
        \setdefaultlanguageenglish
        \setotherlanguagerussian
        \usepackagefontspec
        \usepackagexunicode
        \usepackagexltxtra
        \usepackagelibertine
        \usepackageindentfirst
        \usepackageenumerate
        \usepackage[fleqn]amsmath
        \usepackagegb4e \noautomath
        \usepackage[colorlinks,allcolors=black]hyperref
        Phys.Rev. ovidecommand\keywords[1]\textbf\textitTags:  #1

        \usepackage[backend=biber,style=authoryear]biblatex
        \addbibresourcebib.bib

        \newtheoremtheoremDefinition


        \titleTensor Product of Representations in Service of Low-Resource Languages
        \authorG. Arshinov, S. Kosyak, D. Samsonova, F. Tyers, M. Voronov
        \dateJune 2020

        \begindocument

        \maketitle

        \beginabstract
        Polysynthetic low-resource languages are poorly treated with standard language modeling approaches. In this paper a hypothesis that word-segment embeddings based on tensor product of representations show better performance for low-resource languages compared to conventional word- and char-based models is tested. In order to prove it a pipeline that allows to process low-resource polysynthetic languages was developed. Using Neural Sequence Labeling Toolkit <br>enciteyang2018ncrf to train a segmenter on a Chukchi corpus, a raw Chuckchi corpus was segmented and the \textitiiksiin <br>enciteiiksiin model was employed to create the embeddings. After that we tested them on the language modelling task and evaluated the results, which showed a notable increase in performance compared to regular approaches.
        \endabstract

        \keywordsTPR, Chuckchi, language modeling, polysynthetic, low-resource, NLP 

        <p><a name="toc.1"><h1>1&nbsp;Introduction</h1>

        Most traditional text vectorization approaches target languages that do not have much inflection
        (e.g. <br>enciteword2vec, bojanowski2017enriching, pennington2014glove).
        Such approaches treat \textitcat and \textitcats as individual words. It works reasonably well for analytic languages such as Chinese or English. However, there are polysynthetic languages that feature extensive
        morphology and cannot be efficiently processed this way.\authorG. Arshinov, Sergei Kosyak, D. Samsonova, F. Tyers, M. Voronov



        In this work we will model the Chukchi language. Let us consider the
        following two examples
        (examples (<a href="#refex1">(0)</a>
        ) and (<a href="#refex2">(0)</a>
        )). As you could see, the words
        have the same root but different inflectional affixes.
        Eventually, representing Chukchi tokens using one of the traditional approaches will inevitably fail to encode the complex meaning, that is built up out each and individual morpheme.

        \beginexe
            \ex <a name="refex1">

            \gll weɬə-tko-ra-jpə-ŋ <br>

            goods-\textsciter-dwelling-\textscabl-\textscad<br>

            \glt \textitin the shop
            \ex <a name="refex2">

            \gll q-weɬə-tko-ra-nta-ɣ-e=ʔəm <br>

            \textsc2.s/a.subj-goods-iter-dwelling-\textscgo.do-irr-2/3sg.s=emph <br>

            \glt \textitgo to the shop!
        \endexe

        Moreover, many polysynthetic languages are minority languages.
        For example, Chukchi is spoken in by approximately 5100 people
        and is marked as "threatened" in the \textitEthnologue
        database<br>enciteethn.
        Therefore, there is very little language data available for Chukchi.

        Due to the two problems mentioned it is impossible to apply traditional approaches, we decided our goal is to develop a pipeline that can process
        low-resource languages with extensive inflectional morphology.

        <p><a name="toc.2"><h1>2&nbsp;Related work</h1>

        The idea that some smaller segments can be used as representations was suggested in <br>encitetpr1990.
        In this article Smolensky suggests ``a formalization of the idea that a set of value&nbsp;variable
        pairs can be represented by accumulating activity in a collection of units each of which computes the
        product of a feature of a variable and a feature of its value" <br>encite[p. 159]tpr1990.
        He suggests using tensor product to accumulate representations of smaller structures into
        bigger ones.

        This way, the word \textitcats will be treated not only as a whole but also as a combination
        of two morphemes.

        The idea to use tensor product of representations to process a natural language, was implemented in 2019 in a tool called \textitiiksiin <br>enciteschwartz2020neural, iiksiin.
        It "constructs a sequence of morpheme tensors from a word using Tensor Product Representation"
        <br>enciteiiksiin. We will further cover the way this tool functions.


        <p><a name="toc.3"><h1>3&nbsp;Data</h1>

        For our language model experiments we use Chukchi corpus
        <br>encitechukchicorpus. The corpus consists of fiction and folklore
        texts in Cyrillic.

        The corpus of Chukchi texts is very small (approximately 30 000 sentences)
        and hence if we manage to model Chukchi using this corpus
        we will prove that our pipeline is efficient for low-resource
        languages.

        We also had some data serving as a segmentation standard, though it was written in Latin alphabet. Table <a href="#reftab:preproc">(0)</a>
        shows some statistics for the data.

        \begintable[h]
        \centering
        \begintabular|l|l|l|
        \hline
        \color[HTML]000000               & \color[HTML]000000 sentences & \color[HTML]000000 words  <br>
        \hline
        \color[HTML]000000 Corpus        & \color[HTML]000000 33331     & \color[HTML]000000 151667 <br>
        \hline
        \color[HTML]000000 Gold standard & \color[HTML]000000 1006      & \color[HTML]000000 4417   <br>
        \hline
        \endtabular
        <font face=symbol>Ç</font>tionPreprocessed corpus statistics
        <a name="reftab:preproc">

        \endtable

        To use the corpus, we had to deal with several issues: 
        <ul>
            
        <li> The Chukchi writing system allows for variation in the appearance
            of the following two letters:
            \textitн<font face=symbol>¢</font> = \textitӈ and \textit&ecirc;<font face=symbol>¢</font> = \textitӄ. The latter two symbols
            were introduced in 1980s <br>encitechukchiLetters.
            We needed to unify these options, so we replaced \textitн<font face=symbol>¢</font> and
            \textit&ecirc;<font face=symbol>¢</font> with \textitӈ and \textitӄ respectively.
            
        <li> We then removed invalid characters and fixed the ones in wrong
            typeset such as \textitC (U+0043) and \textitС (U+0421).
            
        <li> Finally, we fixed the <font face=symbol>¢</font>ʔ<font face=symbol>¢</font> signs turning them into "<font face=symbol>¢</font>/ь/ъ"
            in accordance with Chukchi orthography <br>encite[58]dunn1999grammar so that \textitʔА would be \textitА<font face=symbol>¢</font>.
        </ul>

        Fixing the segmentation standard also involved these steps, though at the beginning we had to transliterate it to Cyrillic alphabet. Unfortunately, we had to review some of the sentences manually to make sure the segmentation worked correctly. Table <a href="#reftab:postproc">(0)</a>
        shows the statistics for the post-processed corpus.
        \begintable[h]
        \centering
        \begintabular|l|l|l|l|
        \hline
        \color[HTML]000000 version & \color[HTML]000000 changes              & \color[HTML]000000 sentences & \color[HTML]000000 words  <br>
        \hline
        \color[HTML]000000 v2      & \color[HTML]000000 \textitн<font face=symbol>¢</font> and \textit&ecirc;<font face=symbol>¢</font>          & \color[HTML]000000 33331     & \color[HTML]000000 151667 <br>
        \hline
        \color[HTML]000000 v3      & \color[HTML]000000 invalid characters   & \color[HTML]000000 33323     & \color[HTML]000000 151585 <br>
        \hline
        \color[HTML]000000 v4      & \color[HTML]000000 fixing \textitʔ sign & \color[HTML]000000 33323     & \color[HTML]000000 151585 <br>
        \hline
        \endtabular
        <font face=symbol>Ç</font>tionPost-processed corpus statistics
        <a name="reftab:postproc">

        \endtable

        The example of changes in the data can be seen in the Table <a href="#reftab:datachanges">(0)</a>
        .

        \begintable[h]
        \centering
        \begintabular|l|l|
        \hline
        \color[HTML]000000 version & \color[HTML]000000 changes       <br>
        \hline
        \color[HTML]000000 v1      & \color[HTML]000000 ʔ&agrave;&agrave;че&ecirc;>∅ эты н>&egrave;н>&egrave;&acirc;>&ecirc;<font face=symbol>¢</font>&egrave;н <br>
        \hline
        \color[HTML]000000 v2      & \color[HTML]000000 ʔ&agrave;&agrave;че&ecirc;>∅ эты н>&egrave;н>&egrave;&acirc;>ӄ&egrave;н <br>
        \hline
        \color[HTML]000000 v3      & \color[HTML]000000 ʔ&agrave;&agrave;че&ecirc;>∅ эты н>&egrave;н>&egrave;&acirc;>ӄ&egrave;н <br>
        \hline
        \color[HTML]000000 v4      & \color[HTML]000000 &agrave;<font face=symbol>¢</font>&agrave;че&ecirc;>∅ эты н>&egrave;н>&egrave;&acirc;>ӄ&egrave;н <br>
        \hline
        \endtabular
        <font face=symbol>Ç</font>tionChanges in data
        <a name="reftab:datachanges">

        \endtable

        One of the questions we asked ourselves was if our data fixes may be incorrect and would significantly effect the quality of the segmentation model, so we ran it using different versions.

        Evidently, there are not many resources to use both for segmentation training and validation, so we decided to manually validate a piece of the output of the segmentation model in order to have more data to rely on. 
        Subsequently, the corpus segmentation data had to be put into the tensor-making model; the output of the segmentation model had to be converted from \textscbmes format to the segmented sentences with delimiters.


        <p><a name="toc.4"><h1>4&nbsp;Segmentation</h1>
        The TPR model requires moderately large dataset of texts segmented into morphemes for training. Initially, we had only 1000 segmented sentences in Chukchi and that was not sufficient enough for getting any meaningful training results. To extend our training set, we obtained an unsegmented Chukchi language corpus and segmented it automatically.

        To achieve any satisfactory segmentation quality, we tested several different approaches varying from rule-based to neural net based solutions. At first, we tried using an LSTM sequence-to-sequence model. We used the OpenNMT library <br>enciteklein-etal-2017-opennmt, that is suitable for solving various sequence-to-sequence tasks, mainly machine translation. We took a word-level tokenized sentence as an input sequence and an arrangement of morphemes and their respective glosses as an output sequence. We used  770 examples for the training and 130 ones for evaluation. The resulting accuracy of 0.33 was, obviously, not enough to rely on this model.

        Later, we tried using a rule-based approach. We discovered an in-progress project <br>encitechkchn that was based on finite state transducing. We tested this tool and got the accuracy of 76.2 \%, that was still not satisfactory. Considering this fact, we decided that we should find a more robust solution to this problem. We reformulated the task: the main goal of the segmenter was to show where are the borders between morphemes, not identify them or gloss. Hence, the task was restated as character-level sequence tagging. This allowed us to use the Neural Sequence Labeling toolkit <br>enciteyang2018ncrf, that leveraged convolutional neural network with conditional random field based output layer. We trained the model on the train sample of 1315 tokens and tested it on the remaining 146 tokens. The model was fed words without any context, these words were treated as “sentences”. Each character was assigned one of the four labels: \textscb-morph, \textscm-morph, \textsce-morph, which stand for beginning, middle and end of morpheme. One more label is \textscs-morph, that stands for a single character morpheme. The output of the model is a sequence of the aforementioned tags. We trained over 1000 epochs, the 879th of which gave the most accurate results. This model showed  91\% F-1 rate for morpheme segmentation.

        The final evaluation metrics are shown in Table <a href="#reftab:segmmetrics">(0)</a>
        : 
        \begintable[h]
        \centering
        \begintabular|l|l|l|l|
        \hline
        Accuracy & Precision & Recall & F1-measure <br>
        \hline
        0.9577   & 0.9193    & 0.9131 & 0.9162     <br>
        \hline
        \endtabular
        <font face=symbol>Ç</font>tionSegmentation evaluation stats
        <a name="reftab:segmmetrics">

        \endtable

        <p><a name="toc.5"><h1>5&nbsp;Tensor Product Representation</h1>


        Tensor product is defined as follows:

        \begintheorem
        Let V<sub>1</sub> and V<sub>2</sub> be two vector spaces.
        A space W furnished with a map (x<sub>1</sub>, x<sub>2</sub>) <font face=symbol>®</font> x<sub>1</sub> &#183; x<sub>2</sub>
        of V<sub>1</sub> &times; V<sub>2</sub> into W,
        is called the \textbftensor product of V<sub>1</sub> and V<sub>2</sub> if the two following conditions are satisfied:
        <ol>[i.]
            
        <li> x<sub>1</sub> &#183; x<sub>2</sub> is linear in each of the variables x<sub>1</sub> and x<sub>2</sub>.
            
        <li> If (e<sub>i</sub>1) is a basis of V<sub>1</sub> and (e<sub>i</sub>2) is a basis of V<sub>2</sub>, the family of products e<sub>i</sub>1 &#183; e<sub>i</sub>2 is a basis of W.
        </ol>
        \endtheorem <br>encite[p. 8]tensorProduct

        \begintheorem
        \textbfRepresentation is a piece of text data mapped to
        a tensor of real numbers.
        \endtheorem

        Now we provide the detailed explanation of how \textitiiksiin works. The first step is to generate alphabet <font face=symbol>S</font> for the Chukchi corpus <font face=symbol>S</font><sup>*</sup>
        </td>
        <td nowrap align=center>
          and the dictionary of morpheme tensors.

        We generate tensors for each morpheme m  <font face=symbol>Î</font>  <font face=symbol>S</font><sup>*</sup> in the following way:
        we sum the outer product of two one-hot vectors for each symbol s<sub>i</sub>
        in a morpheme m. The length of the first one-hot vector is equal to
        the length of the alphabet <font face=symbol>S</font>. The symbol index in the alphabet stands
        for its position in the vector. The length of the second vector equals
        to the length of the morpheme m. The symbol index in the morpheme stands
        for its position in the vector. This is shown in the
        Equation (<a href="#refeq:1">(0)</a>
        ).


        <table cellspacing=0  border=0 align=center>
        <tr>
          <td nowrap align="center">
            <a name="refeq:1">
            
            repr(m) = 
          </td>
          <td nowrap align=center>
            <!--UB--><font face=symbol>å</font><sub>i=1</sub><sup>n</sup>
          </td>
          <td nowrap align=center>
            
            \bigg(oneHot(s<sub>i</sub>, <font face=symbol>S</font>) <font face=symbol>Ä</font> oneHot(r<sub>i</sub>, m)\bigg)
        <a name="eq0">&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue>(0)</font>
          </td>
        </tr>
        </table>


        Where:

        <ul>
            
        <li> oneHot -- one hot encoding function
            
        <li> <font face=symbol>Ä</font> -- tensor product (in this case equals to the outer product) 
            
        <li> s -- symbol in the morpheme
            
        <li> r -- role (index of a symbol within the morpheme)
            
        <li> n -- number of symbols in the morpheme
        </ul>

        Here we provide an example:


        <table cellspacing=0  border=0 align=center>
        <tr>
          <td nowrap align="center">
            
            \beginaligned
                repr(caab  <font face=symbol>Î</font>  {a, b, c, d}<sup>*</sup>) &= 
                \beginpmatrix 0 & 0 & 1 & 0 \endpmatrix
                <font face=symbol>Ä</font> \beginpmatrix 1 & 0 & 0 & 0 \endpmatrix + <br>
            
                &+ \beginpmatrix 1 & 0 & 0 & 0 \endpmatrix
                <font face=symbol>Ä</font> \beginpmatrix 0 & 1 & 0 & 0 \endpmatrix + <br>
            
                &+ \beginpmatrix 1 & 0 & 0 & 0 \endpmatrix
                <font face=symbol>Ä</font> \beginpmatrix 0 & 0 & 1 & 0 \endpmatrix + <br>
            
                &+ \beginpmatrix 0 & 1 & 0 & 0 \endpmatrix
                <font face=symbol>Ä</font> \beginpmatrix 0 & 0 & 0 & 1 \endpmatrix = <br>
            
                = \beginpmatrix
                0 & 1 & 1 & 0 <br>
            
                0 & 0 & 0 & 1 <br>
            
                1 & 0 & 0 & 0 <br>
            
                0 & 0 & 0 & 0 <br>
            
                \endpmatrix
            \endaligned
        <a name="eq1">&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue>(1)</font>
          </td>
        </tr>
        </table>


        The next step is to generate tensors for each word w  <font face=symbol>Î</font>  m<sup>*</sup> in the following way: we sum the tensor product of the morpheme representation repr(m)
        from the Equation (<a href="#refeq:1">(0)</a>
        ) and the one-hot encoded position of the morpheme
        in the word. So, a tensor product of a 2D-matrix and a vector gives
        a 3D-matrix. You can find the formula in the Equation (<a href="#refeq:3">(2)</a>
        ) and
        an example in the Equation (<a href="#refeq:4">(3)</a>
        ).


        <table cellspacing=0  border=0 align=center>
        <tr>
          <td nowrap align="center">
            <a name="refeq:3">
            
            repr(w) = 
          </td>
          <td nowrap align=center>
            <!--UB--><font face=symbol>å</font><sub>i=1</sub><sup>n</sup>
          </td>
          <td nowrap align=center>
            
            \bigg(repr(m<sub>i</sub>) <font face=symbol>Ä</font> oneHot(m<sub>i</sub>, w)\bigg)
        <a name="eq2">&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue>(2)</font>
          </td>
        </tr>
        </table>

        Where n is a number of morphemes in a word.

        Example:

        \beginmultline<a name="refeq:4">

            repr({caab, bd}) = <br>

            =
            \beginpmatrix
            0 & 1 & 1 & 0 <br>

            0 & 0 & 0 & 1 <br>

            1 & 0 & 0 & 0 <br>

            0 & 0 & 0 & 0 <br>

            \endpmatrix
            <font face=symbol>Ä</font>
            \beginpmatrix 1 & 0 \endpmatrix
            +
            \beginpmatrix
            0 & 0 <br>

            1 & 0 <br>

            0 & 0 <br>

            0 & 1 <br>

            \endpmatrix
            <font face=symbol>Ä</font>
            \beginpmatrix 0 & 1 \endpmatrix = <br>

            =
            \beginpmatrix
            \beginpmatrix
            0 & 0 <br>

            1 & 0 <br>

            1 & 0 <br>

            0 & 0 <br>

            \endpmatrix
            \beginpmatrix
            0 & 1 <br>

            0 & 0 <br>

            0 & 0 <br>

            1 & 0 <br>

            \endpmatrix
            \beginpmatrix
            1 & 0 <br>

            0 & 0 <br>

            0 & 0 <br>

            0 & 0 <br>

            \endpmatrix
            \beginpmatrix
            0 & 0 <br>

            0 & 1 <br>

            0 & 0 <br>

            0 & 0 <br>

            \endpmatrix
            \endpmatrix
        \endmultline

        The resulting third-rank tensors are very sparse. So, they
        should be converted into first-rank tensors (vectors) with a neural network-based autoencoder. For a detailed explanation of it consult <br>encite[47-50]schwartz2020neural.
        As a result, we obtain a vector space which we call a tensor product of representations.

        <p><a name="toc.6"><h1>6&nbsp;Evaluation</h1>

        To evaluate the quality of the tensor representations of natural language we have decided to train an \textitawd-lstm-lm <br>enciteawd-lstm language model which is licensed under the
        BSD 3-Clause "New" or "Revised" License.

        This language model was chosen due to the fact that for polysynthetic languages it gives results close to the state-of-the-art and its code is freely distributed and allowed to use.

        The LSTM-model was trained on characters, words and segments (with  tensor representation as pre-trained embeddings) and the perplexity of each language model was measured on the validation dataset, the results can be seen in Table <a href="#reftab:result">(3)</a>
        . 
        \begintable[h]
        \centering
        \begintabular|l|l|
        \hline
        Input format                        & Pereplexity   <br>
        \hline
        Character                           & 2677.94 <br>
        \hline
        Word                                & 471.06 <br>
        \hline
        Segment (with pertained embeddings) & 189.51 <br>
        \hline
        \endtabular
        <font face=symbol>Ç</font>tionLSTM-model performance
        <a name="reftab:result">

        \endtable

        According to the results, the tensor representation makes a significant improvement on the language model rate of perplexity. Nevertheless, it can be a good idea to measure the quality of the language model trained on the tensor representation by evaluating the results of text generation made by it. Moreover, in own future work we plan to check the results for synthetic (such as Turkish and Russian) and analytic (such as English) languages.




        <p><a name="toc.7"><h1>7&nbsp;Conclusion</h1>
        In this paper we test the hypothesis that word-segment embeddings based on tensor product
        of representations show better performance for low-resource languages compared to conventional word- and char-based models. To prove that we developed a pipeline that allows to process low-resource polysynthetic languages. Firstly, we used Neural Sequence Labeling Toolkit <br>enciteyang2018ncrf to train a segmenter on a Chukchi corpus. Later, we segmented a raw Chuckchi corpus using it. Secondly, we used \textitiiksiin <br>enciteiiksiin to create the embeddings. After that we tested them in action and evaluated the results, which showed a notable increase in language modeling performance.

        \clearpage
        <h1>Acknoledgements</h1>
        We would like to show our appreciation to the HSE expeditions which visited Chukotka and collected the corpus of texts in Chukchi, which gave us an opportunity to test the hypothesis using the corpus they made. We would also like to mention that this research was supported in part through computational resources of HPC facilities at NRU HSE \texttrademark.

        \clearpage
        \appendix

        <p><a name="toc.8"><h1>8&nbsp;List of abbreviations</h1>
        <ul>
            
        <li> \textsciter – iterative aspect
            
        <li> \textscabl – ablative case
            
        <li> \textscad – archaic dative
            
        <li> \textsc2.s/a.subj-...-irr-2/3sg.s – nonimperfective subjunctive mood, subject is sigular, in second person
            
        <li> \textscemph – emphatic clitic
            
        <li> LSTM – long short-term memory network
            
        <li> TPR – tensor product representation = tensor product of representations
        </ul>

        Phys.Rev. intbibliography

        \enddocument
        <hr>
        <p><h1>Table Of Contents</h1>
        <p><a href="#toc.1"><h1>1&nbsp;Introduction</h1></a>
        <p><a href="#toc.2"><h1>2&nbsp;Related work</h1></a>
        <p><a href="#toc.3"><h1>3&nbsp;Data</h1></a>
        <p><a href="#toc.4"><h1>4&nbsp;Segmentation</h1></a>
        <p><a href="#toc.5"><h1>5&nbsp;Tensor Product Representation</h1></a>
        <p><a href="#toc.6"><h1>6&nbsp;Evaluation</h1></a>
        <p><a href="#toc.7"><h1>7&nbsp;Conclusion</h1></a>
        <p><a href="#toc.8"><h1>8&nbsp;List of abbreviations</h1></a>
        </body>
        </html>
      </article>

  </div>
</section>
</template>

<script>
import LoremIpsum from "vue-lorem-ipsum";
export default {
  name: "Research",
  components: { LoremIpsum },
};
</script>

<style scoped>
</style>